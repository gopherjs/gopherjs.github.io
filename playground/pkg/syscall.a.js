0��8syscall�'ipackage syscall
import bytes "bytes"
import js "github.com/gopherjs/gopherjs/js"
import sync "sync"
import runtime "runtime"
import errors "errors"
const @"".AF_APPLETALK = 0x10
const @"".AF_CCITT = 0xa
const @"".AF_CHAOS = 0x5
const @"".AF_CNT = 0x15
const @"".AF_COIP = 0x14
const @"".AF_DATAKIT = 0x9
const @"".AF_DECnet = 0xc
const @"".AF_DLI = 0xd
const @"".AF_E164 = 0x1c
const @"".AF_ECMA = 0x8
const @"".AF_HYLINK = 0xf
const @"".AF_IEEE80211 = 0x25
const @"".AF_IMPLINK = 0x3
const @"".AF_INET = 0x2
const @"".AF_INET6 = 0x1e
const @"".AF_IPX = 0x17
const @"".AF_ISDN = 0x1c
const @"".AF_ISO = 0x7
const @"".AF_LAT = 0xe
const @"".AF_LINK = 0x12
const @"".AF_LOCAL = 0x1
const @"".AF_MAX = 0x26
const @"".AF_NATM = 0x1f
const @"".AF_NDRV = 0x1b
const @"".AF_NETBIOS = 0x21
const @"".AF_NS = 0x6
const @"".AF_OSI = 0x7
const @"".AF_PPP = 0x22
const @"".AF_PUP = 0x4
const @"".AF_RESERVED_36 = 0x24
const @"".AF_ROUTE = 0x11
const @"".AF_SIP = 0x18
const @"".AF_SNA = 0xb
const @"".AF_SYSTEM = 0x20
const @"".AF_UNIX = 0x1
const @"".AF_UNSPEC = 0x0
func @"".Accept(@"".fd int) (@"".nfd int, @"".sa @"".Sockaddr, @"".err error)
func @"".Access(@"".path string, @"".mode uint32) (@"".err error)
func @"".Adjtime(@"".delta *@"".Timeval, @"".olddelta *@"".Timeval) (@"".err error)
const @"".B0 = 0x0
const @"".B110 = 0x6e
const @"".B115200 = 0x1c200
const @"".B1200 = 0x4b0
const @"".B134 = 0x86
const @"".B14400 = 0x3840
const @"".B150 = 0x96
const @"".B1800 = 0x708
const @"".B19200 = 0x4b00
const @"".B200 = 0xc8
const @"".B230400 = 0x38400
const @"".B2400 = 0x960
const @"".B28800 = 0x7080
const @"".B300 = 0x12c
const @"".B38400 = 0x9600
const @"".B4800 = 0x12c0
const @"".B50 = 0x32
const @"".B57600 = 0xe100
const @"".B600 = 0x258
const @"".B7200 = 0x1c20
const @"".B75 = 0x4b
const @"".B76800 = 0x12c00
const @"".B9600 = 0x2580
const @"".BIOCFLUSH = 0x20004268
const @"".BIOCGBLEN = 0x40044266
const @"".BIOCGDLT = 0x4004426a
const @"".BIOCGDLTLIST = 0xc00c4279
const @"".BIOCGETIF = 0x4020426b
const @"".BIOCGHDRCMPLT = 0x40044274
const @"".BIOCGRSIG = 0x40044272
const @"".BIOCGRTIMEOUT = 0x4010426e
const @"".BIOCGSEESENT = 0x40044276
const @"".BIOCGSTATS = 0x4008426f
const @"".BIOCIMMEDIATE = 0x80044270
const @"".BIOCPROMISC = 0x20004269
const @"".BIOCSBLEN = 0xc0044266
const @"".BIOCSDLT = 0x80044278
const @"".BIOCSETF = 0x80104267
const @"".BIOCSETIF = 0x8020426c
const @"".BIOCSHDRCMPLT = 0x80044275
const @"".BIOCSRSIG = 0x80044273
const @"".BIOCSRTIMEOUT = 0x8010426d
const @"".BIOCSSEESENT = 0x80044277
const @"".BIOCVERSION = 0x40044271
const @"".BPF_A = 0x10
const @"".BPF_ABS = 0x20
const @"".BPF_ADD = 0x0
const @"".BPF_ALIGNMENT = 0x4
const @"".BPF_ALU = 0x4
const @"".BPF_AND = 0x50
const @"".BPF_B = 0x10
const @"".BPF_DIV = 0x30
const @"".BPF_H = 0x8
const @"".BPF_IMM = 0x0
const @"".BPF_IND = 0x40
const @"".BPF_JA = 0x0
const @"".BPF_JEQ = 0x10
const @"".BPF_JGE = 0x30
const @"".BPF_JGT = 0x20
const @"".BPF_JMP = 0x5
const @"".BPF_JSET = 0x40
const @"".BPF_K = 0x0
const @"".BPF_LD = 0x0
const @"".BPF_LDX = 0x1
const @"".BPF_LEN = 0x80
const @"".BPF_LSH = 0x60
const @"".BPF_MAJOR_VERSION = 0x1
const @"".BPF_MAXBUFSIZE = 0x80000
const @"".BPF_MAXINSNS = 0x200
const @"".BPF_MEM = 0x60
const @"".BPF_MEMWORDS = 0x10
const @"".BPF_MINBUFSIZE = 0x20
const @"".BPF_MINOR_VERSION = 0x1
const @"".BPF_MISC = 0x7
const @"".BPF_MSH = 0xa0
const @"".BPF_MUL = 0x20
const @"".BPF_NEG = 0x80
const @"".BPF_OR = 0x40
const @"".BPF_RELEASE = 0x30bb6
const @"".BPF_RET = 0x6
const @"".BPF_RSH = 0x70
const @"".BPF_ST = 0x2
const @"".BPF_STX = 0x3
const @"".BPF_SUB = 0x10
const @"".BPF_TAX = 0x0
const @"".BPF_TXA = 0x80
const @"".BPF_W = 0x0
const @"".BPF_X = 0x8
const @"".BRKINT = 0x2
func @"".Bind(@"".fd int, @"".sa @"".Sockaddr) (@"".err error)
func @"".BpfBuflen(@"".fd int) (? int, ? error)
func @"".BpfDatalink(@"".fd int) (? int, ? error)
type @"".BpfHdr struct { @"".Tstamp @"".Timeval32; @"".Caplen uint32; @"".Datalen uint32; @"".Hdrlen uint16; @"".Pad_cgo_0 [2]byte }
func @"".BpfHeadercmpl(@"".fd int) (? int, ? error)
type @"".BpfInsn struct { @"".Code uint16; @"".Jt uint8; @"".Jf uint8; @"".K uint32 }
func @"".BpfInterface(@"".fd int, @"".name string) (? string, ? error)
func @"".BpfJump(@"".code int, @"".k int, @"".jt int, @"".jf int) (? *@"".BpfInsn)
type @"".BpfProgram struct { @"".Len uint32; @"".Pad_cgo_0 [4]byte; @"".Insns *@"".BpfInsn }
type @"".BpfStat struct { @"".Recv uint32; @"".Drop uint32 }
func @"".BpfStats(@"".fd int) (? *@"".BpfStat, ? error)
func @"".BpfStmt(@"".code int, @"".k int) (? *@"".BpfInsn)
func @"".BpfTimeout(@"".fd int) (? *@"".Timeval, ? error)
type @"".BpfVersion struct { @"".Major uint16; @"".Minor uint16 }
func @"".BytePtrFromString(@"".s string) (? *byte, ? error)
func @"".ByteSliceFromString(@"".s string) (? []byte, ? error)
const @"".CFLUSH = 0xf
const @"".CLOCAL = 0x8000
const @"".CREAD = 0x800
const @"".CS5 = 0x0
const @"".CS6 = 0x100
const @"".CS7 = 0x200
const @"".CS8 = 0x300
const @"".CSIZE = 0x300
const @"".CSTART = 0x11
const @"".CSTATUS = 0x14
const @"".CSTOP = 0x13
const @"".CSTOPB = 0x400
const @"".CSUSP = 0x1a
const @"".CTL_MAXNAME = 0xc
const @"".CTL_NET = 0x4
func @"".Chdir(@"".path string) (@"".err error)
func @"".CheckBpfVersion(@"".fd int) (? error)
func @"".Chflags(@"".path string, @"".flags int) (@"".err error)
func @"".Chmod(@"".path string, @"".mode uint32) (@"".err error)
func @"".Chown(@"".path string, @"".uid int, @"".gid int) (@"".err error)
func @"".Chroot(@"".path string) (@"".err error)
func @"".Clearenv() ()
func @"".Close(@"".fd int) (@"".err error)
func @"".CloseOnExec(@"".fd int) ()
func @"".CmsgLen(@"".datalen int) (? int)
func @"".CmsgSpace(@"".datalen int) (? int)
type @"".Cmsghdr struct { @"".Len uint32; @"".Level int32; @"".Type int32 }
func (? *@"".Cmsghdr) @"".SetLen(@"".length int) ()
func @"".Connect(@"".fd int, @"".sa @"".Sockaddr) (@"".err error)
type @"".Credential struct { @"".Uid uint32; @"".Gid uint32; @"".Groups []uint32 }
const @"".DLT_APPLE_IP_OVER_IEEE1394 = 0x8a
const @"".DLT_ARCNET = 0x7
const @"".DLT_ATM_CLIP = 0x13
const @"".DLT_ATM_RFC1483 = 0xb
const @"".DLT_AX25 = 0x3
const @"".DLT_CHAOS = 0x5
const @"".DLT_CHDLC = 0x68
const @"".DLT_C_HDLC = 0x68
const @"".DLT_EN10MB = 0x1
const @"".DLT_EN3MB = 0x2
const @"".DLT_FDDI = 0xa
const @"".DLT_IEEE802 = 0x6
const @"".DLT_IEEE802_11 = 0x69
const @"".DLT_IEEE802_11_RADIO = 0x7f
const @"".DLT_IEEE802_11_RADIO_AVS = 0xa3
const @"".DLT_LINUX_SLL = 0x71
const @"".DLT_LOOP = 0x6c
const @"".DLT_NULL = 0x0
const @"".DLT_PFLOG = 0x75
const @"".DLT_PFSYNC = 0x12
const @"".DLT_PPP = 0x9
const @"".DLT_PPP_BSDOS = 0x10
const @"".DLT_PPP_SERIAL = 0x32
const @"".DLT_PRONET = 0x4
const @"".DLT_RAW = 0xc
const @"".DLT_SLIP = 0x8
const @"".DLT_SLIP_BSDOS = 0xf
const @"".DT_BLK = 0x6
const @"".DT_CHR = 0x2
const @"".DT_DIR = 0x4
const @"".DT_FIFO = 0x1
const @"".DT_LNK = 0xa
const @"".DT_REG = 0x8
const @"".DT_SOCK = 0xc
const @"".DT_UNKNOWN = 0x0
const @"".DT_WHT = 0xe
type @"".Dirent struct { @"".Ino uint64; @"".Seekoff uint64; @"".Reclen uint16; @"".Namlen uint16; @"".Type uint8; @"".Name [1024]int8; @"".Pad_cgo_0 [3]byte }
func @"".Dup(@"".fd int) (@"".nfd int, @"".err error)
func @"".Dup2(@"".from int, @"".to int) (@"".err error)
const @"".E2BIG @"".Errno = 0x7
const @"".EACCES @"".Errno = 0xd
const @"".EADDRINUSE @"".Errno = 0x30
const @"".EADDRNOTAVAIL @"".Errno = 0x31
const @"".EAFNOSUPPORT @"".Errno = 0x2f
const @"".EAGAIN @"".Errno = 0x23
const @"".EALREADY @"".Errno = 0x25
const @"".EAUTH @"".Errno = 0x50
const @"".EBADARCH @"".Errno = 0x56
const @"".EBADEXEC @"".Errno = 0x55
const @"".EBADF @"".Errno = 0x9
const @"".EBADMACHO @"".Errno = 0x58
const @"".EBADMSG @"".Errno = 0x5e
const @"".EBADRPC @"".Errno = 0x48
const @"".EBUSY @"".Errno = 0x10
const @"".ECANCELED @"".Errno = 0x59
const @"".ECHILD @"".Errno = 0xa
const @"".ECHO = 0x8
const @"".ECHOCTL = 0x40
const @"".ECHOE = 0x2
const @"".ECHOK = 0x4
const @"".ECHOKE = 0x1
const @"".ECHONL = 0x10
const @"".ECHOPRT = 0x20
const @"".ECONNABORTED @"".Errno = 0x35
const @"".ECONNREFUSED @"".Errno = 0x3d
const @"".ECONNRESET @"".Errno = 0x36
const @"".EDEADLK @"".Errno = 0xb
const @"".EDESTADDRREQ @"".Errno = 0x27
const @"".EDEVERR @"".Errno = 0x53
const @"".EDOM @"".Errno = 0x21
const @"".EDQUOT @"".Errno = 0x45
const @"".EEXIST @"".Errno = 0x11
const @"".EFAULT @"".Errno = 0xe
const @"".EFBIG @"".Errno = 0x1b
const @"".EFTYPE @"".Errno = 0x4f
const @"".EHOSTDOWN @"".Errno = 0x40
const @"".EHOSTUNREACH @"".Errno = 0x41
const @"".EIDRM @"".Errno = 0x5a
const @"".EILSEQ @"".Errno = 0x5c
const @"".EINPROGRESS @"".Errno = 0x24
const @"".EINTR @"".Errno = 0x4
const @"".EINVAL @"".Errno = 0x16
const @"".EIO @"".Errno = 0x5
const @"".EISCONN @"".Errno = 0x38
const @"".EISDIR @"".Errno = 0x15
const @"".ELAST @"".Errno = 0x69
const @"".ELOOP @"".Errno = 0x3e
const @"".EMFILE @"".Errno = 0x18
const @"".EMLINK @"".Errno = 0x1f
const @"".EMSGSIZE @"".Errno = 0x28
const @"".EMULTIHOP @"".Errno = 0x5f
const @"".ENAMETOOLONG @"".Errno = 0x3f
const @"".ENEEDAUTH @"".Errno = 0x51
const @"".ENETDOWN @"".Errno = 0x32
const @"".ENETRESET @"".Errno = 0x34
const @"".ENETUNREACH @"".Errno = 0x33
const @"".ENFILE @"".Errno = 0x17
const @"".ENOATTR @"".Errno = 0x5d
const @"".ENOBUFS @"".Errno = 0x37
const @"".ENODATA @"".Errno = 0x60
const @"".ENODEV @"".Errno = 0x13
const @"".ENOENT @"".Errno = 0x2
const @"".ENOEXEC @"".Errno = 0x8
const @"".ENOLCK @"".Errno = 0x4d
const @"".ENOLINK @"".Errno = 0x61
const @"".ENOMEM @"".Errno = 0xc
const @"".ENOMSG @"".Errno = 0x5b
const @"".ENOPOLICY @"".Errno = 0x67
const @"".ENOPROTOOPT @"".Errno = 0x2a
const @"".ENOSPC @"".Errno = 0x1c
const @"".ENOSR @"".Errno = 0x62
const @"".ENOSTR @"".Errno = 0x63
const @"".ENOSYS @"".Errno = 0x4e
const @"".ENOTBLK @"".Errno = 0xf
const @"".ENOTCONN @"".Errno = 0x39
const @"".ENOTDIR @"".Errno = 0x14
const @"".ENOTEMPTY @"".Errno = 0x42
const @"".ENOTRECOVERABLE @"".Errno = 0x68
const @"".ENOTSOCK @"".Errno = 0x26
const @"".ENOTSUP @"".Errno = 0x2d
const @"".ENOTTY @"".Errno = 0x19
const @"".ENXIO @"".Errno = 0x6
const @"".EOPNOTSUPP @"".Errno = 0x66
const @"".EOVERFLOW @"".Errno = 0x54
const @"".EOWNERDEAD @"".Errno = 0x69
const @"".EPERM @"".Errno = 0x1
const @"".EPFNOSUPPORT @"".Errno = 0x2e
const @"".EPIPE @"".Errno = 0x20
const @"".EPROCLIM @"".Errno = 0x43
const @"".EPROCUNAVAIL @"".Errno = 0x4c
const @"".EPROGMISMATCH @"".Errno = 0x4b
const @"".EPROGUNAVAIL @"".Errno = 0x4a
const @"".EPROTO @"".Errno = 0x64
const @"".EPROTONOSUPPORT @"".Errno = 0x2b
const @"".EPROTOTYPE @"".Errno = 0x29
const @"".EPWROFF @"".Errno = 0x52
const @"".ERANGE @"".Errno = 0x22
const @"".EREMOTE @"".Errno = 0x47
const @"".EROFS @"".Errno = 0x1e
const @"".ERPCMISMATCH @"".Errno = 0x49
const @"".ESHLIBVERS @"".Errno = 0x57
const @"".ESHUTDOWN @"".Errno = 0x3a
const @"".ESOCKTNOSUPPORT @"".Errno = 0x2c
const @"".ESPIPE @"".Errno = 0x1d
const @"".ESRCH @"".Errno = 0x3
const @"".ESTALE @"".Errno = 0x46
const @"".ETIME @"".Errno = 0x65
const @"".ETIMEDOUT @"".Errno = 0x3c
const @"".ETOOMANYREFS @"".Errno = 0x3b
const @"".ETXTBSY @"".Errno = 0x1a
const @"".EUSERS @"".Errno = 0x44
const @"".EVFILT_AIO = -0x3
const @"".EVFILT_FS = -0x9
const @"".EVFILT_MACHPORT = -0x8
const @"".EVFILT_PROC = -0x5
const @"".EVFILT_READ = -0x1
const @"".EVFILT_SIGNAL = -0x6
const @"".EVFILT_SYSCOUNT = 0xc
const @"".EVFILT_THREADMARKER = 0xc
const @"".EVFILT_TIMER = -0x7
const @"".EVFILT_USER = -0xa
const @"".EVFILT_VM = -0xc
const @"".EVFILT_VNODE = -0x4
const @"".EVFILT_WRITE = -0x2
const @"".EV_ADD = 0x1
const @"".EV_CLEAR = 0x20
const @"".EV_DELETE = 0x2
const @"".EV_DISABLE = 0x8
const @"".EV_DISPATCH = 0x80
const @"".EV_ENABLE = 0x4
const @"".EV_EOF = 0x8000
const @"".EV_ERROR = 0x4000
const @"".EV_FLAG0 = 0x1000
const @"".EV_FLAG1 = 0x2000
const @"".EV_ONESHOT = 0x10
const @"".EV_OOBAND = 0x2000
const @"".EV_POLL = 0x1000
const @"".EV_RECEIPT = 0x40
const @"".EV_SYSFLAGS = 0xf000
const @"".EWOULDBLOCK @"".Errno = 0x23
const @"".EXDEV @"".Errno = 0x12
const @"".EXTA = 0x4b00
const @"".EXTB = 0x9600
const @"".EXTPROC = 0x800
func @"".Environ() (? []string)
type @"".Errno uintptr
func (? @"".Errno) @"".Error() (? string)
func (? @"".Errno) @"".Temporary() (? bool)
func (? @"".Errno) @"".Timeout() (? bool)
func (? *@"".Errno) @"".Error() (? string)
func (? *@"".Errno) @"".Temporary() (? bool)
func (? *@"".Errno) @"".Timeout() (? bool)
func @"".Exchangedata(@"".path1 string, @"".path2 string, @"".options int) (@"".err error)
func @"".Exec(@"".argv0 string, @"".argv []string, @"".envv []string) (@"".err error)
func @"".Exit(@"".code int) ()
const @"".FD_CLOEXEC = 0x1
const @"".FD_SETSIZE = 0x400
const @"".FLUSHO = 0x800000
const @"".F_ADDFILESIGS = 0x3d
const @"".F_ADDSIGS = 0x3b
const @"".F_ALLOCATEALL = 0x4
const @"".F_ALLOCATECONTIG = 0x2
const @"".F_CHKCLEAN = 0x29
const @"".F_DUPFD = 0x0
const @"".F_DUPFD_CLOEXEC = 0x43
const @"".F_FLUSH_DATA = 0x28
const @"".F_FREEZE_FS = 0x35
const @"".F_FULLFSYNC = 0x33
const @"".F_GETFD = 0x1
const @"".F_GETFL = 0x3
const @"".F_GETLK = 0x7
const @"".F_GETLKPID = 0x42
const @"".F_GETNOSIGPIPE = 0x4a
const @"".F_GETOWN = 0x5
const @"".F_GETPATH = 0x32
const @"".F_GETPATH_MTMINFO = 0x47
const @"".F_GETPROTECTIONCLASS = 0x3f
const @"".F_GLOBAL_NOCACHE = 0x37
const @"".F_LOG2PHYS = 0x31
const @"".F_LOG2PHYS_EXT = 0x41
const @"".F_MARKDEPENDENCY = 0x3c
const @"".F_NOCACHE = 0x30
const @"".F_NODIRECT = 0x3e
const @"".F_OK = 0x0
const @"".F_PATHPKG_CHECK = 0x34
const @"".F_PEOFPOSMODE = 0x3
const @"".F_PREALLOCATE = 0x2a
const @"".F_RDADVISE = 0x2c
const @"".F_RDAHEAD = 0x2d
const @"".F_RDLCK = 0x1
const @"".F_READBOOTSTRAP = 0x2e
const @"".F_SETBACKINGSTORE = 0x46
const @"".F_SETFD = 0x2
const @"".F_SETFL = 0x4
const @"".F_SETLK = 0x8
const @"".F_SETLKW = 0x9
const @"".F_SETNOSIGPIPE = 0x49
const @"".F_SETOWN = 0x6
const @"".F_SETPROTECTIONCLASS = 0x40
const @"".F_SETSIZE = 0x2b
const @"".F_THAW_FS = 0x36
const @"".F_UNLCK = 0x2
const @"".F_VOLPOSMODE = 0x4
const @"".F_WRITEBOOTSTRAP = 0x2f
const @"".F_WRLCK = 0x3
type @"".Fbootstraptransfer_t struct { @"".Offset int64; @"".Length uint64; @"".Buffer *byte }
func @"".Fchdir(@"".fd int) (@"".err error)
func @"".Fchflags(@"".fd int, @"".flags int) (@"".err error)
func @"".Fchmod(@"".fd int, @"".mode uint32) (@"".err error)
func @"".Fchown(@"".fd int, @"".uid int, @"".gid int) (@"".err error)
func @"".FcntlFlock(@"".fd uintptr, @"".cmd int, @"".lk *@"".Flock_t) (? error)
type @"".FdSet struct { @"".Bits [32]int32 }
func @"".Flock(@"".fd int, @"".how int) (@"".err error)
type @"".Flock_t struct { @"".Start int64; @"".Len int64; @"".Pid int32; @"".Type int16; @"".Whence int16 }
func @"".FlushBpf(@"".fd int) (? error)
func @"".ForkExec(@"".argv0 string, @"".argv []string, @"".attr *@"".ProcAttr) (@"".pid int, @"".err error)
var @"".ForkLock @"sync".RWMutex
func @"".Fpathconf(@"".fd int, @"".name int) (@"".val int, @"".err error)
type @"".Fsid struct { @"".Val [2]int32 }
func @"".Fstat(@"".fd int, @"".stat *@"".Stat_t) (@"".err error)
func @"".Fstatfs(@"".fd int, @"".stat *@"".Statfs_t) (@"".err error)
type @"".Fstore_t struct { @"".Flags uint32; @"".Posmode int32; @"".Offset int64; @"".Length int64; @"".Bytesalloc int64 }
func @"".Fsync(@"".fd int) (@"".err error)
func @"".Ftruncate(@"".fd int, @"".length int64) (@"".err error)
func @"".Futimes(@"".fd int, @"".tv []@"".Timeval) (@"".err error)
func @"".Getdirentries(@"".fd int, @"".buf []byte, @"".basep *uintptr) (@"".n int, @"".err error)
func @"".Getdtablesize() (@"".size int)
func @"".Getegid() (@"".egid int)
func @"".Getenv(@"".key string) (@"".value string, @"".found bool)
func @"".Geteuid() (@"".uid int)
func @"".Getfsstat(@"".buf []@"".Statfs_t, @"".flags int) (@"".n int, @"".err error)
func @"".Getgid() (@"".gid int)
func @"".Getgroups() (@"".gids []int, @"".err error)
func @"".Getpagesize() (? int)
func @"".Getpeername(@"".fd int) (@"".sa @"".Sockaddr, @"".err error)
func @"".Getpgid(@"".pid int) (@"".pgid int, @"".err error)
func @"".Getpgrp() (@"".pgrp int)
func @"".Getpid() (@"".pid int)
func @"".Getppid() (@"".ppid int)
func @"".Getpriority(@"".which int, @"".who int) (@"".prio int, @"".err error)
func @"".Getrlimit(@"".which int, @"".lim *@"".Rlimit) (@"".err error)
func @"".Getrusage(@"".who int, @"".rusage *@"".Rusage) (@"".err error)
func @"".Getsid(@"".pid int) (@"".sid int, @"".err error)
func @"".Getsockname(@"".fd int) (@"".sa @"".Sockaddr, @"".err error)
func @"".GetsockoptByte(@"".fd int, @"".level int, @"".opt int) (@"".value byte, @"".err error)
func @"".GetsockoptICMPv6Filter(@"".fd int, @"".level int, @"".opt int) (? *@"".ICMPv6Filter, ? error)
func @"".GetsockoptIPMreq(@"".fd int, @"".level int, @"".opt int) (? *@"".IPMreq, ? error)
func @"".GetsockoptIPv6MTUInfo(@"".fd int, @"".level int, @"".opt int) (? *@"".IPv6MTUInfo, ? error)
func @"".GetsockoptIPv6Mreq(@"".fd int, @"".level int, @"".opt int) (? *@"".IPv6Mreq, ? error)
func @"".GetsockoptInet4Addr(@"".fd int, @"".level int, @"".opt int) (@"".value [4]byte, @"".err error)
func @"".GetsockoptInt(@"".fd int, @"".level int, @"".opt int) (@"".value int, @"".err error)
func @"".Gettimeofday(@"".tv *@"".Timeval) (@"".err error)
func @"".Getuid() (@"".uid int)
func @"".Getwd() (? string, ? error)
const @"".HUPCL = 0x4000
const @"".ICANON = 0x100
const @"".ICMP6_FILTER = 0x12
type @"".ICMPv6Filter struct { @"".Filt [8]uint32 }
const @"".ICRNL = 0x100
const @"".IEXTEN = 0x400
const @"".IFF_ALLMULTI = 0x200
const @"".IFF_ALTPHYS = 0x4000
const @"".IFF_BROADCAST = 0x2
const @"".IFF_DEBUG = 0x4
const @"".IFF_LINK0 = 0x1000
const @"".IFF_LINK1 = 0x2000
const @"".IFF_LINK2 = 0x4000
const @"".IFF_LOOPBACK = 0x8
const @"".IFF_MULTICAST = 0x8000
const @"".IFF_NOARP = 0x80
const @"".IFF_NOTRAILERS = 0x20
const @"".IFF_OACTIVE = 0x400
const @"".IFF_POINTOPOINT = 0x10
const @"".IFF_PROMISC = 0x100
const @"".IFF_RUNNING = 0x40
const @"".IFF_SIMPLEX = 0x800
const @"".IFF_UP = 0x1
const @"".IFNAMSIZ = 0x10
const @"".IFT_1822 = 0x2
const @"".IFT_AAL5 = 0x31
const @"".IFT_ARCNET = 0x23
const @"".IFT_ARCNETPLUS = 0x24
const @"".IFT_ATM = 0x25
const @"".IFT_BRIDGE = 0xd1
const @"".IFT_CARP = 0xf8
const @"".IFT_CELLULAR = 0xff
const @"".IFT_CEPT = 0x13
const @"".IFT_DS3 = 0x1e
const @"".IFT_ENC = 0xf4
const @"".IFT_EON = 0x19
const @"".IFT_ETHER = 0x6
const @"".IFT_FAITH = 0x38
const @"".IFT_FDDI = 0xf
const @"".IFT_FRELAY = 0x20
const @"".IFT_FRELAYDCE = 0x2c
const @"".IFT_GIF = 0x37
const @"".IFT_HDH1822 = 0x3
const @"".IFT_HIPPI = 0x2f
const @"".IFT_HSSI = 0x2e
const @"".IFT_HY = 0xe
const @"".IFT_IEEE1394 = 0x90
const @"".IFT_IEEE8023ADLAG = 0x88
const @"".IFT_ISDNBASIC = 0x14
const @"".IFT_ISDNPRIMARY = 0x15
const @"".IFT_ISO88022LLC = 0x29
const @"".IFT_ISO88023 = 0x7
const @"".IFT_ISO88024 = 0x8
const @"".IFT_ISO88025 = 0x9
const @"".IFT_ISO88026 = 0xa
const @"".IFT_L2VLAN = 0x87
const @"".IFT_LAPB = 0x10
const @"".IFT_LOCALTALK = 0x2a
const @"".IFT_LOOP = 0x18
const @"".IFT_MIOX25 = 0x26
const @"".IFT_MODEM = 0x30
const @"".IFT_NSIP = 0x1b
const @"".IFT_OTHER = 0x1
const @"".IFT_P10 = 0xc
const @"".IFT_P80 = 0xd
const @"".IFT_PARA = 0x22
const @"".IFT_PDP = 0xff
const @"".IFT_PFLOG = 0xf5
const @"".IFT_PFSYNC = 0xf6
const @"".IFT_PPP = 0x17
const @"".IFT_PROPMUX = 0x36
const @"".IFT_PROPVIRTUAL = 0x35
const @"".IFT_PTPSERIAL = 0x16
const @"".IFT_RS232 = 0x21
const @"".IFT_SDLC = 0x11
const @"".IFT_SIP = 0x1f
const @"".IFT_SLIP = 0x1c
const @"".IFT_SMDSDXI = 0x2b
const @"".IFT_SMDSICIP = 0x34
const @"".IFT_SONET = 0x27
const @"".IFT_SONETPATH = 0x32
const @"".IFT_SONETVT = 0x33
const @"".IFT_STARLAN = 0xb
const @"".IFT_STF = 0x39
const @"".IFT_T1 = 0x12
const @"".IFT_ULTRA = 0x1d
const @"".IFT_V35 = 0x2d
const @"".IFT_X25 = 0x5
const @"".IFT_X25DDN = 0x4
const @"".IFT_X25PLE = 0x28
const @"".IFT_XETHER = 0x1a
const @"".IGNBRK = 0x1
const @"".IGNCR = 0x80
const @"".IGNPAR = 0x4
const @"".IMAXBEL = 0x2000
const @"".INLCR = 0x40
const @"".INPCK = 0x10
const @"".IN_CLASSA_HOST = 0xffffff
const @"".IN_CLASSA_MAX = 0x80
const @"".IN_CLASSA_NET = 0xff000000
const @"".IN_CLASSA_NSHIFT = 0x18
const @"".IN_CLASSB_HOST = 0xffff
const @"".IN_CLASSB_MAX = 0x10000
const @"".IN_CLASSB_NET = 0xffff0000
const @"".IN_CLASSB_NSHIFT = 0x10
const @"".IN_CLASSC_HOST = 0xff
const @"".IN_CLASSC_NET = 0xffffff00
const @"".IN_CLASSC_NSHIFT = 0x8
const @"".IN_CLASSD_HOST = 0xfffffff
const @"".IN_CLASSD_NET = 0xf0000000
const @"".IN_CLASSD_NSHIFT = 0x1c
const @"".IN_LINKLOCALNETNUM = 0xa9fe0000
const @"".IN_LOOPBACKNET = 0x7f
type @"".IPMreq struct { @"".Multiaddr [4]byte; @"".Interface [4]byte }
const @"".IPPROTO_3PC = 0x22
const @"".IPPROTO_ADFS = 0x44
const @"".IPPROTO_AH = 0x33
const @"".IPPROTO_AHIP = 0x3d
const @"".IPPROTO_APES = 0x63
const @"".IPPROTO_ARGUS = 0xd
const @"".IPPROTO_AX25 = 0x5d
const @"".IPPROTO_BHA = 0x31
const @"".IPPROTO_BLT = 0x1e
const @"".IPPROTO_BRSATMON = 0x4c
const @"".IPPROTO_CFTP = 0x3e
const @"".IPPROTO_CHAOS = 0x10
const @"".IPPROTO_CMTP = 0x26
const @"".IPPROTO_CPHB = 0x49
const @"".IPPROTO_CPNX = 0x48
const @"".IPPROTO_DDP = 0x25
const @"".IPPROTO_DGP = 0x56
const @"".IPPROTO_DIVERT = 0xfe
const @"".IPPROTO_DONE = 0x101
const @"".IPPROTO_DSTOPTS = 0x3c
const @"".IPPROTO_EGP = 0x8
const @"".IPPROTO_EMCON = 0xe
const @"".IPPROTO_ENCAP = 0x62
const @"".IPPROTO_EON = 0x50
const @"".IPPROTO_ESP = 0x32
const @"".IPPROTO_ETHERIP = 0x61
const @"".IPPROTO_FRAGMENT = 0x2c
const @"".IPPROTO_GGP = 0x3
const @"".IPPROTO_GMTP = 0x64
const @"".IPPROTO_GRE = 0x2f
const @"".IPPROTO_HELLO = 0x3f
const @"".IPPROTO_HMP = 0x14
const @"".IPPROTO_HOPOPTS = 0x0
const @"".IPPROTO_ICMP = 0x1
const @"".IPPROTO_ICMPV6 = 0x3a
const @"".IPPROTO_IDP = 0x16
const @"".IPPROTO_IDPR = 0x23
const @"".IPPROTO_IDRP = 0x2d
const @"".IPPROTO_IGMP = 0x2
const @"".IPPROTO_IGP = 0x55
const @"".IPPROTO_IGRP = 0x58
const @"".IPPROTO_IL = 0x28
const @"".IPPROTO_INLSP = 0x34
const @"".IPPROTO_INP = 0x20
const @"".IPPROTO_IP = 0x0
const @"".IPPROTO_IPCOMP = 0x6c
const @"".IPPROTO_IPCV = 0x47
const @"".IPPROTO_IPEIP = 0x5e
const @"".IPPROTO_IPIP = 0x4
const @"".IPPROTO_IPPC = 0x43
const @"".IPPROTO_IPV4 = 0x4
const @"".IPPROTO_IPV6 = 0x29
const @"".IPPROTO_IRTP = 0x1c
const @"".IPPROTO_KRYPTOLAN = 0x41
const @"".IPPROTO_LARP = 0x5b
const @"".IPPROTO_LEAF1 = 0x19
const @"".IPPROTO_LEAF2 = 0x1a
const @"".IPPROTO_MAX = 0x100
const @"".IPPROTO_MAXID = 0x34
const @"".IPPROTO_MEAS = 0x13
const @"".IPPROTO_MHRP = 0x30
const @"".IPPROTO_MICP = 0x5f
const @"".IPPROTO_MTP = 0x5c
const @"".IPPROTO_MUX = 0x12
const @"".IPPROTO_ND = 0x4d
const @"".IPPROTO_NHRP = 0x36
const @"".IPPROTO_NONE = 0x3b
const @"".IPPROTO_NSP = 0x1f
const @"".IPPROTO_NVPII = 0xb
const @"".IPPROTO_OSPFIGP = 0x59
const @"".IPPROTO_PGM = 0x71
const @"".IPPROTO_PIGP = 0x9
const @"".IPPROTO_PIM = 0x67
const @"".IPPROTO_PRM = 0x15
const @"".IPPROTO_PUP = 0xc
const @"".IPPROTO_PVP = 0x4b
const @"".IPPROTO_RAW = 0xff
const @"".IPPROTO_RCCMON = 0xa
const @"".IPPROTO_RDP = 0x1b
const @"".IPPROTO_ROUTING = 0x2b
const @"".IPPROTO_RSVP = 0x2e
const @"".IPPROTO_RVD = 0x42
const @"".IPPROTO_SATEXPAK = 0x40
const @"".IPPROTO_SATMON = 0x45
const @"".IPPROTO_SCCSP = 0x60
const @"".IPPROTO_SCTP = 0x84
const @"".IPPROTO_SDRP = 0x2a
const @"".IPPROTO_SEP = 0x21
const @"".IPPROTO_SRPC = 0x5a
const @"".IPPROTO_ST = 0x7
const @"".IPPROTO_SVMTP = 0x52
const @"".IPPROTO_SWIPE = 0x35
const @"".IPPROTO_TCF = 0x57
const @"".IPPROTO_TCP = 0x6
const @"".IPPROTO_TP = 0x1d
const @"".IPPROTO_TPXX = 0x27
const @"".IPPROTO_TRUNK1 = 0x17
const @"".IPPROTO_TRUNK2 = 0x18
const @"".IPPROTO_TTP = 0x54
const @"".IPPROTO_UDP = 0x11
const @"".IPPROTO_VINES = 0x53
const @"".IPPROTO_VISA = 0x46
const @"".IPPROTO_VMTP = 0x51
const @"".IPPROTO_WBEXPAK = 0x4f
const @"".IPPROTO_WBMON = 0x4e
const @"".IPPROTO_WSN = 0x4a
const @"".IPPROTO_XNET = 0xf
const @"".IPPROTO_XTP = 0x24
const @"".IPV6_2292DSTOPTS = 0x17
const @"".IPV6_2292HOPLIMIT = 0x14
const @"".IPV6_2292HOPOPTS = 0x16
const @"".IPV6_2292NEXTHOP = 0x15
const @"".IPV6_2292PKTINFO = 0x13
const @"".IPV6_2292PKTOPTIONS = 0x19
const @"".IPV6_2292RTHDR = 0x18
const @"".IPV6_BINDV6ONLY = 0x1b
const @"".IPV6_BOUND_IF = 0x7d
const @"".IPV6_CHECKSUM = 0x1a
const @"".IPV6_DEFAULT_MULTICAST_HOPS = 0x1
const @"".IPV6_DEFAULT_MULTICAST_LOOP = 0x1
const @"".IPV6_DEFHLIM = 0x40
const @"".IPV6_FAITH = 0x1d
const @"".IPV6_FLOWINFO_MASK = 0xffffff0f
const @"".IPV6_FLOWLABEL_MASK = 0xffff0f00
const @"".IPV6_FRAGTTL = 0x78
const @"".IPV6_FW_ADD = 0x1e
const @"".IPV6_FW_DEL = 0x1f
const @"".IPV6_FW_FLUSH = 0x20
const @"".IPV6_FW_GET = 0x22
const @"".IPV6_FW_ZERO = 0x21
const @"".IPV6_HLIMDEC = 0x1
const @"".IPV6_IPSEC_POLICY = 0x1c
const @"".IPV6_JOIN_GROUP = 0xc
const @"".IPV6_LEAVE_GROUP = 0xd
const @"".IPV6_MAXHLIM = 0xff
const @"".IPV6_MAXOPTHDR = 0x800
const @"".IPV6_MAXPACKET = 0xffff
const @"".IPV6_MAX_GROUP_SRC_FILTER = 0x200
const @"".IPV6_MAX_MEMBERSHIPS = 0xfff
const @"".IPV6_MAX_SOCK_SRC_FILTER = 0x80
const @"".IPV6_MIN_MEMBERSHIPS = 0x1f
const @"".IPV6_MMTU = 0x500
const @"".IPV6_MULTICAST_HOPS = 0xa
const @"".IPV6_MULTICAST_IF = 0x9
const @"".IPV6_MULTICAST_LOOP = 0xb
const @"".IPV6_PORTRANGE = 0xe
const @"".IPV6_PORTRANGE_DEFAULT = 0x0
const @"".IPV6_PORTRANGE_HIGH = 0x1
const @"".IPV6_PORTRANGE_LOW = 0x2
const @"".IPV6_RECVTCLASS = 0x23
const @"".IPV6_RTHDR_LOOSE = 0x0
const @"".IPV6_RTHDR_STRICT = 0x1
const @"".IPV6_RTHDR_TYPE_0 = 0x0
const @"".IPV6_SOCKOPT_RESERVED1 = 0x3
const @"".IPV6_TCLASS = 0x24
const @"".IPV6_UNICAST_HOPS = 0x4
const @"".IPV6_V6ONLY = 0x1b
const @"".IPV6_VERSION = 0x60
const @"".IPV6_VERSION_MASK = 0xf0
const @"".IP_ADD_MEMBERSHIP = 0xc
const @"".IP_ADD_SOURCE_MEMBERSHIP = 0x46
const @"".IP_BLOCK_SOURCE = 0x48
const @"".IP_BOUND_IF = 0x19
const @"".IP_DEFAULT_MULTICAST_LOOP = 0x1
const @"".IP_DEFAULT_MULTICAST_TTL = 0x1
const @"".IP_DF = 0x4000
const @"".IP_DROP_MEMBERSHIP = 0xd
const @"".IP_DROP_SOURCE_MEMBERSHIP = 0x47
const @"".IP_DUMMYNET_CONFIGURE = 0x3c
const @"".IP_DUMMYNET_DEL = 0x3d
const @"".IP_DUMMYNET_FLUSH = 0x3e
const @"".IP_DUMMYNET_GET = 0x40
const @"".IP_FAITH = 0x16
const @"".IP_FW_ADD = 0x28
const @"".IP_FW_DEL = 0x29
const @"".IP_FW_FLUSH = 0x2a
const @"".IP_FW_GET = 0x2c
const @"".IP_FW_RESETLOG = 0x2d
const @"".IP_FW_ZERO = 0x2b
const @"".IP_HDRINCL = 0x2
const @"".IP_IPSEC_POLICY = 0x15
const @"".IP_MAXPACKET = 0xffff
const @"".IP_MAX_GROUP_SRC_FILTER = 0x200
const @"".IP_MAX_MEMBERSHIPS = 0xfff
const @"".IP_MAX_SOCK_MUTE_FILTER = 0x80
const @"".IP_MAX_SOCK_SRC_FILTER = 0x80
const @"".IP_MF = 0x2000
const @"".IP_MIN_MEMBERSHIPS = 0x1f
const @"".IP_MSFILTER = 0x4a
const @"".IP_MSS = 0x240
const @"".IP_MULTICAST_IF = 0x9
const @"".IP_MULTICAST_IFINDEX = 0x42
const @"".IP_MULTICAST_LOOP = 0xb
const @"".IP_MULTICAST_TTL = 0xa
const @"".IP_MULTICAST_VIF = 0xe
const @"".IP_NAT__XXX = 0x37
const @"".IP_OFFMASK = 0x1fff
const @"".IP_OLD_FW_ADD = 0x32
const @"".IP_OLD_FW_DEL = 0x33
const @"".IP_OLD_FW_FLUSH = 0x34
const @"".IP_OLD_FW_GET = 0x36
const @"".IP_OLD_FW_RESETLOG = 0x38
const @"".IP_OLD_FW_ZERO = 0x35
const @"".IP_OPTIONS = 0x1
const @"".IP_PKTINFO = 0x1a
const @"".IP_PORTRANGE = 0x13
const @"".IP_PORTRANGE_DEFAULT = 0x0
const @"".IP_PORTRANGE_HIGH = 0x1
const @"".IP_PORTRANGE_LOW = 0x2
const @"".IP_RECVDSTADDR = 0x7
const @"".IP_RECVIF = 0x14
const @"".IP_RECVOPTS = 0x5
const @"".IP_RECVPKTINFO = 0x1a
const @"".IP_RECVRETOPTS = 0x6
const @"".IP_RECVTTL = 0x18
const @"".IP_RETOPTS = 0x8
const @"".IP_RF = 0x8000
const @"".IP_RSVP_OFF = 0x10
const @"".IP_RSVP_ON = 0xf
const @"".IP_RSVP_VIF_OFF = 0x12
const @"".IP_RSVP_VIF_ON = 0x11
const @"".IP_STRIPHDR = 0x17
const @"".IP_TOS = 0x3
const @"".IP_TRAFFIC_MGT_BACKGROUND = 0x41
const @"".IP_TTL = 0x4
const @"".IP_UNBLOCK_SOURCE = 0x49
type @"".IPv6MTUInfo struct { @"".Addr @"".RawSockaddrInet6; @"".Mtu uint32 }
type @"".IPv6Mreq struct { @"".Multiaddr [16]byte; @"".Interface uint32 }
const @"".ISIG = 0x80
const @"".ISTRIP = 0x20
const @"".IUTF8 = 0x4000
const @"".IXANY = 0x800
const @"".IXOFF = 0x400
const @"".IXON = 0x200
type @"".IfData struct { @"".Type uint8; @"".Typelen uint8; @"".Physical uint8; @"".Addrlen uint8; @"".Hdrlen uint8; @"".Recvquota uint8; @"".Xmitquota uint8; @"".Unused1 uint8; @"".Mtu uint32; @"".Metric uint32; @"".Baudrate uint32; @"".Ipackets uint32; @"".Ierrors uint32; @"".Opackets uint32; @"".Oerrors uint32; @"".Collisions uint32; @"".Ibytes uint32; @"".Obytes uint32; @"".Imcasts uint32; @"".Omcasts uint32; @"".Iqdrops uint32; @"".Noproto uint32; @"".Recvtiming uint32; @"".Xmittiming uint32; @"".Lastchange @"".Timeval32; @"".Unused2 uint32; @"".Hwassist uint32; @"".Reserved1 uint32; @"".Reserved2 uint32 }
type @"".IfMsghdr struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Addrs int32; @"".Flags int32; @"".Index uint16; @"".Pad_cgo_0 [2]byte; @"".Data @"".IfData }
type @"".IfaMsghdr struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Addrs int32; @"".Flags int32; @"".Index uint16; @"".Pad_cgo_0 [2]byte; @"".Metric int32 }
type @"".IfmaMsghdr struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Addrs int32; @"".Flags int32; @"".Index uint16; @"".Pad_cgo_0 [2]byte }
type @"".IfmaMsghdr2 struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Addrs int32; @"".Flags int32; @"".Index uint16; @"".Pad_cgo_0 [2]byte; @"".Refcount int32 }
const @"".ImplementsGetwd = true
type @"".Inet4Pktinfo struct { @"".Ifindex uint32; @"".Spec_dst [4]byte; @"".Addr [4]byte }
type @"".Inet6Pktinfo struct { @"".Addr [16]byte; @"".Ifindex uint32 }
type @"".InterfaceAddrMessage struct { @"".Header @"".IfaMsghdr; @"".Data []byte }
func (? *@"".InterfaceAddrMessage) @"".sockaddr() (@"".sas []@"".Sockaddr)
type @"".InterfaceMessage struct { @"".Header @"".IfMsghdr; @"".Data []byte }
func (? *@"".InterfaceMessage) @"".sockaddr() (@"".sas []@"".Sockaddr)
type @"".InterfaceMulticastAddrMessage struct { @"".Header @"".IfmaMsghdr2; @"".Data []byte }
func (? *@"".InterfaceMulticastAddrMessage) @"".sockaddr() (@"".sas []@"".Sockaddr)
type @"".Iovec struct { @"".Base *byte; @"".Len uint64 }
func (? *@"".Iovec) @"".SetLen(@"".length int) ()
func @"".Issetugid() (@"".tainted bool)
func @"".Kevent(@"".kq int, @"".changes []@"".Kevent_t, @"".events []@"".Kevent_t, @"".timeout *@"".Timespec) (@"".n int, @"".err error)
type @"".Kevent_t struct { @"".Ident uint64; @"".Filter int16; @"".Flags uint16; @"".Fflags uint32; @"".Data int64; @"".Udata *byte }
func @"".Kill(@"".pid int, @"".signum @"".Signal) (@"".err error)
func @"".Kqueue() (@"".fd int, @"".err error)
const @"".LOCK_EX = 0x2
const @"".LOCK_NB = 0x4
const @"".LOCK_SH = 0x1
const @"".LOCK_UN = 0x8
func @"".Lchown(@"".path string, @"".uid int, @"".gid int) (@"".err error)
type @"".Linger struct { @"".Onoff int32; @"".Linger int32 }
func @"".Link(@"".path string, @"".link string) (@"".err error)
func @"".Listen(@"".s int, @"".backlog int) (@"".err error)
type @"".Log2phys_t struct { @"".Flags uint32; @"".Contigbytes int64; @"".Devoffset int64 }
func @"".Lstat(@"".path string, @"".stat *@"".Stat_t) (@"".err error)
const @"".MADV_CAN_REUSE = 0x9
const @"".MADV_DONTNEED = 0x4
const @"".MADV_FREE = 0x5
const @"".MADV_FREE_REUSABLE = 0x7
const @"".MADV_FREE_REUSE = 0x8
const @"".MADV_NORMAL = 0x0
const @"".MADV_RANDOM = 0x1
const @"".MADV_SEQUENTIAL = 0x2
const @"".MADV_WILLNEED = 0x3
const @"".MADV_ZERO_WIRED_PAGES = 0x6
const @"".MAP_ANON = 0x1000
const @"".MAP_COPY = 0x2
const @"".MAP_FILE = 0x0
const @"".MAP_FIXED = 0x10
const @"".MAP_HASSEMAPHORE = 0x200
const @"".MAP_JIT = 0x800
const @"".MAP_NOCACHE = 0x400
const @"".MAP_NOEXTEND = 0x100
const @"".MAP_NORESERVE = 0x40
const @"".MAP_PRIVATE = 0x2
const @"".MAP_RENAME = 0x20
const @"".MAP_RESERVED0080 = 0x80
const @"".MAP_SHARED = 0x1
const @"".MCL_CURRENT = 0x1
const @"".MCL_FUTURE = 0x2
const @"".MSG_CTRUNC = 0x20
const @"".MSG_DONTROUTE = 0x4
const @"".MSG_DONTWAIT = 0x80
const @"".MSG_EOF = 0x100
const @"".MSG_EOR = 0x8
const @"".MSG_FLUSH = 0x400
const @"".MSG_HAVEMORE = 0x2000
const @"".MSG_HOLD = 0x800
const @"".MSG_NEEDSA = 0x10000
const @"".MSG_OOB = 0x1
const @"".MSG_PEEK = 0x2
const @"".MSG_RCVMORE = 0x4000
const @"".MSG_SEND = 0x1000
const @"".MSG_TRUNC = 0x10
const @"".MSG_WAITALL = 0x40
const @"".MSG_WAITSTREAM = 0x200
const @"".MS_ASYNC = 0x1
const @"".MS_DEACTIVATE = 0x8
const @"".MS_INVALIDATE = 0x2
const @"".MS_KILLPAGES = 0x4
const @"".MS_SYNC = 0x10
func @"".Mkdir(@"".path string, @"".mode uint32) (@"".err error)
func @"".Mkfifo(@"".path string, @"".mode uint32) (@"".err error)
func @"".Mknod(@"".path string, @"".mode uint32, @"".dev int) (@"".err error)
func @"".Mlock(@"".b []byte) (@"".err error)
func @"".Mlockall(@"".flags int) (@"".err error)
func @"".Mmap(@"".fd int, @"".offset int64, @"".length int, @"".prot int, @"".flags int) (@"".data []byte, @"".err error)
func @"".Mprotect(@"".b []byte, @"".prot int) (@"".err error)
type @"".Msghdr struct { @"".Name *byte; @"".Namelen uint32; @"".Pad_cgo_0 [4]byte; @"".Iov *@"".Iovec; @"".Iovlen int32; @"".Pad_cgo_1 [4]byte; @"".Control *byte; @"".Controllen uint32; @"".Flags int32 }
func (? *@"".Msghdr) @"".SetControllen(@"".length int) ()
func @"".Munlock(@"".b []byte) (@"".err error)
func @"".Munlockall() (@"".err error)
func @"".Munmap(@"".b []byte) (@"".err error)
const @"".NAME_MAX = 0xff
const @"".NET_RT_DUMP = 0x1
const @"".NET_RT_DUMP2 = 0x7
const @"".NET_RT_FLAGS = 0x2
const @"".NET_RT_IFLIST = 0x3
const @"".NET_RT_IFLIST2 = 0x6
const @"".NET_RT_MAXID = 0xa
const @"".NET_RT_STAT = 0x4
const @"".NET_RT_TRASH = 0x5
const @"".NOFLSH = 0x80000000
const @"".NOTE_ABSOLUTE = 0x8
const @"".NOTE_ATTRIB = 0x8
const @"".NOTE_CHILD = 0x4
const @"".NOTE_DELETE = 0x1
const @"".NOTE_EXEC = 0x20000000
const @"".NOTE_EXIT = 0x80000000
const @"".NOTE_EXITSTATUS = 0x4000000
const @"".NOTE_EXTEND = 0x4
const @"".NOTE_FFAND = 0x40000000
const @"".NOTE_FFCOPY = 0xc0000000
const @"".NOTE_FFCTRLMASK = 0xc0000000
const @"".NOTE_FFLAGSMASK = 0xffffff
const @"".NOTE_FFNOP = 0x0
const @"".NOTE_FFOR = 0x80000000
const @"".NOTE_FORK = 0x40000000
const @"".NOTE_LINK = 0x10
const @"".NOTE_LOWAT = 0x1
const @"".NOTE_NONE = 0x80
const @"".NOTE_NSECONDS = 0x4
const @"".NOTE_PCTRLMASK = -0x100000
const @"".NOTE_PDATAMASK = 0xfffff
const @"".NOTE_REAP = 0x10000000
const @"".NOTE_RENAME = 0x20
const @"".NOTE_RESOURCEEND = 0x2000000
const @"".NOTE_REVOKE = 0x40
const @"".NOTE_SECONDS = 0x1
const @"".NOTE_SIGNAL = 0x8000000
const @"".NOTE_TRACK = 0x1
const @"".NOTE_TRACKERR = 0x2
const @"".NOTE_TRIGGER = 0x1000000
const @"".NOTE_USECONDS = 0x2
const @"".NOTE_VM_ERROR = 0x10000000
const @"".NOTE_VM_PRESSURE = 0x80000000
const @"".NOTE_VM_PRESSURE_SUDDEN_TERMINATE = 0x20000000
const @"".NOTE_VM_PRESSURE_TERMINATE = 0x40000000
const @"".NOTE_WRITE = 0x2
func @"".NsecToTimespec(@"".nsec int64) (@"".ts @"".Timespec)
func @"".NsecToTimeval(@"".nsec int64) (@"".tv @"".Timeval)
const @"".OCRNL = 0x10
const @"".OFDEL = 0x20000
const @"".OFILL = 0x80
const @"".ONLCR = 0x2
const @"".ONLRET = 0x40
const @"".ONOCR = 0x20
const @"".ONOEOT = 0x8
const @"".OPOST = 0x1
const @"".O_ACCMODE = 0x3
const @"".O_ALERT = 0x20000000
const @"".O_APPEND = 0x8
const @"".O_ASYNC = 0x40
const @"".O_CLOEXEC = 0x1000000
const @"".O_CREAT = 0x200
const @"".O_DIRECTORY = 0x100000
const @"".O_DSYNC = 0x400000
const @"".O_EVTONLY = 0x8000
const @"".O_EXCL = 0x800
const @"".O_EXLOCK = 0x20
const @"".O_FSYNC = 0x80
const @"".O_NDELAY = 0x4
const @"".O_NOCTTY = 0x20000
const @"".O_NOFOLLOW = 0x100
const @"".O_NONBLOCK = 0x4
const @"".O_POPUP = 0x80000000
const @"".O_RDONLY = 0x0
const @"".O_RDWR = 0x2
const @"".O_SHLOCK = 0x10
const @"".O_SYMLINK = 0x200000
const @"".O_SYNC = 0x80
const @"".O_TRUNC = 0x400
const @"".O_WRONLY = 0x1
func @"".Open(@"".path string, @"".mode int, @"".perm uint32) (@"".fd int, @"".err error)
const @"".PARENB = 0x1000
const @"".PARMRK = 0x8
const @"".PARODD = 0x2000
const @"".PENDIN = 0x20000000
const @"".PRIO_PGRP = 0x1
const @"".PRIO_PROCESS = 0x0
const @"".PRIO_USER = 0x2
const @"".PROT_EXEC = 0x4
const @"".PROT_NONE = 0x0
const @"".PROT_READ = 0x1
const @"".PROT_WRITE = 0x2
const @"".PTRACE_CONT = 0x7
const @"".PTRACE_KILL = 0x8
const @"".PTRACE_TRACEME = 0x0
const @"".PT_ATTACH = 0xa
const @"".PT_ATTACHEXC = 0xe
const @"".PT_CONTINUE = 0x7
const @"".PT_DENY_ATTACH = 0x1f
const @"".PT_DETACH = 0xb
const @"".PT_FIRSTMACH = 0x20
const @"".PT_FORCEQUOTA = 0x1e
const @"".PT_KILL = 0x8
const @"".PT_READ_D = 0x2
const @"".PT_READ_I = 0x1
const @"".PT_READ_U = 0x3
const @"".PT_SIGEXC = 0xc
const @"".PT_STEP = 0x9
const @"".PT_THUPDATE = 0xd
const @"".PT_TRACE_ME = 0x0
const @"".PT_WRITE_D = 0x5
const @"".PT_WRITE_I = 0x4
const @"".PT_WRITE_U = 0x6
func @"".ParseDirent(@"".buf []byte, @"".max int, @"".names []string) (@"".consumed int, @"".count int, @"".newnames []string)
func @"".ParseRoutingMessage(@"".b []byte) (@"".msgs []@"".RoutingMessage, @"".err error)
func @"".ParseRoutingSockaddr(@"".msg @"".RoutingMessage) (@"".sas []@"".Sockaddr, @"".err error)
func @"".ParseSocketControlMessage(@"".b []byte) (? []@"".SocketControlMessage, ? error)
func @"".ParseUnixRights(@"".m *@"".SocketControlMessage) (? []int, ? error)
func @"".Pathconf(@"".path string, @"".name int) (@"".val int, @"".err error)
func @"".Pipe(@"".p []int) (@"".err error)
func @"".Pread(@"".fd int, @"".p []byte, @"".offset int64) (@"".n int, @"".err error)
type @"".ProcAttr struct { @"".Dir string; @"".Env []string; @"".Files []uintptr; @"".Sys *@"".SysProcAttr }
func @"".PtraceAttach(@"".pid int) (@"".err error)
func @"".PtraceDetach(@"".pid int) (@"".err error)
func @"".Pwrite(@"".fd int, @"".p []byte, @"".offset int64) (@"".n int, @"".err error)
const @"".RLIMIT_AS = 0x5
const @"".RLIMIT_CORE = 0x4
const @"".RLIMIT_CPU = 0x0
const @"".RLIMIT_DATA = 0x2
const @"".RLIMIT_FSIZE = 0x1
const @"".RLIMIT_NOFILE = 0x8
const @"".RLIMIT_STACK = 0x3
const @"".RLIM_INFINITY = 0x7fffffffffffffff
const @"".RTAX_AUTHOR = 0x6
const @"".RTAX_BRD = 0x7
const @"".RTAX_DST = 0x0
const @"".RTAX_GATEWAY = 0x1
const @"".RTAX_GENMASK = 0x3
const @"".RTAX_IFA = 0x5
const @"".RTAX_IFP = 0x4
const @"".RTAX_MAX = 0x8
const @"".RTAX_NETMASK = 0x2
const @"".RTA_AUTHOR = 0x40
const @"".RTA_BRD = 0x80
const @"".RTA_DST = 0x1
const @"".RTA_GATEWAY = 0x2
const @"".RTA_GENMASK = 0x8
const @"".RTA_IFA = 0x20
const @"".RTA_IFP = 0x10
const @"".RTA_NETMASK = 0x4
const @"".RTF_BLACKHOLE = 0x1000
const @"".RTF_BROADCAST = 0x400000
const @"".RTF_CLONING = 0x100
const @"".RTF_CONDEMNED = 0x2000000
const @"".RTF_DELCLONE = 0x80
const @"".RTF_DONE = 0x40
const @"".RTF_DYNAMIC = 0x10
const @"".RTF_GATEWAY = 0x2
const @"".RTF_HOST = 0x4
const @"".RTF_IFREF = 0x4000000
const @"".RTF_IFSCOPE = 0x1000000
const @"".RTF_LLINFO = 0x400
const @"".RTF_LOCAL = 0x200000
const @"".RTF_MODIFIED = 0x20
const @"".RTF_MULTICAST = 0x800000
const @"".RTF_PINNED = 0x100000
const @"".RTF_PRCLONING = 0x10000
const @"".RTF_PROTO1 = 0x8000
const @"".RTF_PROTO2 = 0x4000
const @"".RTF_PROTO3 = 0x40000
const @"".RTF_REJECT = 0x8
const @"".RTF_STATIC = 0x800
const @"".RTF_UP = 0x1
const @"".RTF_WASCLONED = 0x20000
const @"".RTF_XRESOLVE = 0x200
const @"".RTM_ADD = 0x1
const @"".RTM_CHANGE = 0x3
const @"".RTM_DELADDR = 0xd
const @"".RTM_DELETE = 0x2
const @"".RTM_DELMADDR = 0x10
const @"".RTM_GET = 0x4
const @"".RTM_GET2 = 0x14
const @"".RTM_IFINFO = 0xe
const @"".RTM_IFINFO2 = 0x12
const @"".RTM_LOCK = 0x8
const @"".RTM_LOSING = 0x5
const @"".RTM_MISS = 0x7
const @"".RTM_NEWADDR = 0xc
const @"".RTM_NEWMADDR = 0xf
const @"".RTM_NEWMADDR2 = 0x13
const @"".RTM_OLDADD = 0x9
const @"".RTM_OLDDEL = 0xa
const @"".RTM_REDIRECT = 0x6
const @"".RTM_RESOLVE = 0xb
const @"".RTM_RTTUNIT = 0xf4240
const @"".RTM_VERSION = 0x5
const @"".RTV_EXPIRE = 0x4
const @"".RTV_HOPCOUNT = 0x2
const @"".RTV_MTU = 0x1
const @"".RTV_RPIPE = 0x8
const @"".RTV_RTT = 0x40
const @"".RTV_RTTVAR = 0x80
const @"".RTV_SPIPE = 0x10
const @"".RTV_SSTHRESH = 0x20
const @"".RUSAGE_CHILDREN = -0x1
const @"".RUSAGE_SELF = 0x0
type @"".Radvisory_t struct { @"".Offset int64; @"".Count int32; @"".Pad_cgo_0 [4]byte }
type @"".RawSockaddr struct { @"".Len uint8; @"".Family uint8; @"".Data [14]int8 }
type @"".RawSockaddrAny struct { @"".Addr @"".RawSockaddr; @"".Pad [92]int8 }
type @"".RawSockaddrDatalink struct { @"".Len uint8; @"".Family uint8; @"".Index uint16; @"".Type uint8; @"".Nlen uint8; @"".Alen uint8; @"".Slen uint8; @"".Data [12]int8 }
type @"".RawSockaddrInet4 struct { @"".Len uint8; @"".Family uint8; @"".Port uint16; @"".Addr [4]byte; @"".Zero [8]int8 }
type @"".RawSockaddrInet6 struct { @"".Len uint8; @"".Family uint8; @"".Port uint16; @"".Flowinfo uint32; @"".Addr [16]byte; @"".Scope_id uint32 }
type @"".RawSockaddrUnix struct { @"".Len uint8; @"".Family uint8; @"".Path [104]int8 }
func @"".RawSyscall(@"".trap uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".RawSyscall6(@"".trap uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr, @"".a4 uintptr, @"".a5 uintptr, @"".a6 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".Read(@"".fd int, @"".p []byte) (@"".n int, @"".err error)
func @"".ReadDirent(@"".fd int, @"".buf []byte) (@"".n int, @"".err error)
func @"".Readlink(@"".path string, @"".buf []byte) (@"".n int, @"".err error)
func @"".Recvfrom(@"".fd int, @"".p []byte, @"".flags int) (@"".n int, @"".from @"".Sockaddr, @"".err error)
func @"".Recvmsg(@"".fd int, @"".p []byte, @"".oob []byte, @"".flags int) (@"".n int, @"".oobn int, @"".recvflags int, @"".from @"".Sockaddr, @"".err error)
func @"".Rename(@"".from string, @"".to string) (@"".err error)
func @"".Revoke(@"".path string) (@"".err error)
type @"".Rlimit struct { @"".Cur uint64; @"".Max uint64 }
func @"".Rmdir(@"".path string) (@"".err error)
type @"".RouteMessage struct { @"".Header @"".RtMsghdr; @"".Data []byte }
func (? *@"".RouteMessage) @"".sockaddr() (? []@"".Sockaddr)
func @"".RouteRIB(@"".facility int, @"".param int) (? []byte, ? error)
type @"".RoutingMessage interface { @"".sockaddr() (? []@"".Sockaddr) }
type @"".RtMetrics struct { @"".Locks uint32; @"".Mtu uint32; @"".Hopcount uint32; @"".Expire int32; @"".Recvpipe uint32; @"".Sendpipe uint32; @"".Ssthresh uint32; @"".Rtt uint32; @"".Rttvar uint32; @"".Pksent uint32; @"".Filler [4]uint32 }
type @"".RtMsghdr struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Index uint16; @"".Pad_cgo_0 [2]byte; @"".Flags int32; @"".Addrs int32; @"".Pid int32; @"".Seq int32; @"".Errno int32; @"".Use int32; @"".Inits uint32; @"".Rmx @"".RtMetrics }
type @"".Rusage struct { @"".Utime @"".Timeval; @"".Stime @"".Timeval; @"".Maxrss int64; @"".Ixrss int64; @"".Idrss int64; @"".Isrss int64; @"".Minflt int64; @"".Majflt int64; @"".Nswap int64; @"".Inblock int64; @"".Oublock int64; @"".Msgsnd int64; @"".Msgrcv int64; @"".Nsignals int64; @"".Nvcsw int64; @"".Nivcsw int64 }
const @"".SCM_CREDS = 0x3
const @"".SCM_RIGHTS = 0x1
const @"".SCM_TIMESTAMP = 0x2
const @"".SCM_TIMESTAMP_MONOTONIC = 0x4
const @"".SHUT_RD = 0x0
const @"".SHUT_RDWR = 0x2
const @"".SHUT_WR = 0x1
const @"".SIGABRT @"".Signal = 0x6
const @"".SIGALRM @"".Signal = 0xe
const @"".SIGBUS @"".Signal = 0xa
const @"".SIGCHLD @"".Signal = 0x14
const @"".SIGCONT @"".Signal = 0x13
const @"".SIGEMT @"".Signal = 0x7
const @"".SIGFPE @"".Signal = 0x8
const @"".SIGHUP @"".Signal = 0x1
const @"".SIGILL @"".Signal = 0x4
const @"".SIGINFO @"".Signal = 0x1d
const @"".SIGINT @"".Signal = 0x2
const @"".SIGIO @"".Signal = 0x17
const @"".SIGIOT @"".Signal = 0x6
const @"".SIGKILL @"".Signal = 0x9
const @"".SIGPIPE @"".Signal = 0xd
const @"".SIGPROF @"".Signal = 0x1b
const @"".SIGQUIT @"".Signal = 0x3
const @"".SIGSEGV @"".Signal = 0xb
const @"".SIGSTOP @"".Signal = 0x11
const @"".SIGSYS @"".Signal = 0xc
const @"".SIGTERM @"".Signal = 0xf
const @"".SIGTRAP @"".Signal = 0x5
const @"".SIGTSTP @"".Signal = 0x12
const @"".SIGTTIN @"".Signal = 0x15
const @"".SIGTTOU @"".Signal = 0x16
const @"".SIGURG @"".Signal = 0x10
const @"".SIGUSR1 @"".Signal = 0x1e
const @"".SIGUSR2 @"".Signal = 0x1f
const @"".SIGVTALRM @"".Signal = 0x1a
const @"".SIGWINCH @"".Signal = 0x1c
const @"".SIGXCPU @"".Signal = 0x18
const @"".SIGXFSZ @"".Signal = 0x19
const @"".SIOCADDMULTI = 0x80206931
const @"".SIOCAIFADDR = 0x8040691a
const @"".SIOCALIFADDR = 0x8118691d
const @"".SIOCARPIPLL = 0xc0206928
const @"".SIOCATMARK = 0x40047307
const @"".SIOCAUTOADDR = 0xc0206926
const @"".SIOCAUTONETMASK = 0x80206927
const @"".SIOCDELMULTI = 0x80206932
const @"".SIOCDIFADDR = 0x80206919
const @"".SIOCDIFPHYADDR = 0x80206941
const @"".SIOCDLIFADDR = 0x8118691f
const @"".SIOCGDRVSPEC = 0xc028697b
const @"".SIOCGETSGCNT = 0xc014721c
const @"".SIOCGETVIFCNT = 0xc014721b
const @"".SIOCGETVLAN = 0xc020697f
const @"".SIOCGHIWAT = 0x40047301
const @"".SIOCGIFADDR = 0xc0206921
const @"".SIOCGIFALTMTU = 0xc0206948
const @"".SIOCGIFASYNCMAP = 0xc020697c
const @"".SIOCGIFBOND = 0xc0206947
const @"".SIOCGIFBRDADDR = 0xc0206923
const @"".SIOCGIFCAP = 0xc020695b
const @"".SIOCGIFCONF = 0xc00c6924
const @"".SIOCGIFDEVMTU = 0xc0206944
const @"".SIOCGIFDSTADDR = 0xc0206922
const @"".SIOCGIFFLAGS = 0xc0206911
const @"".SIOCGIFGENERIC = 0xc020693a
const @"".SIOCGIFKPI = 0xc0206987
const @"".SIOCGIFMAC = 0xc0206982
const @"".SIOCGIFMEDIA = 0xc02c6938
const @"".SIOCGIFMETRIC = 0xc0206917
const @"".SIOCGIFMTU = 0xc0206933
const @"".SIOCGIFNETMASK = 0xc0206925
const @"".SIOCGIFPDSTADDR = 0xc0206940
const @"".SIOCGIFPHYS = 0xc0206935
const @"".SIOCGIFPSRCADDR = 0xc020693f
const @"".SIOCGIFSTATUS = 0xc331693d
const @"".SIOCGIFVLAN = 0xc020697f
const @"".SIOCGIFWAKEFLAGS = 0xc0206988
const @"".SIOCGLIFADDR = 0xc118691e
const @"".SIOCGLIFPHYADDR = 0xc1186943
const @"".SIOCGLOWAT = 0x40047303
const @"".SIOCGPGRP = 0x40047309
const @"".SIOCIFCREATE = 0xc0206978
const @"".SIOCIFCREATE2 = 0xc020697a
const @"".SIOCIFDESTROY = 0x80206979
const @"".SIOCRSLVMULTI = 0xc010693b
const @"".SIOCSDRVSPEC = 0x8028697b
const @"".SIOCSETVLAN = 0x8020697e
const @"".SIOCSHIWAT = 0x80047300
const @"".SIOCSIFADDR = 0x8020690c
const @"".SIOCSIFALTMTU = 0x80206945
const @"".SIOCSIFASYNCMAP = 0x8020697d
const @"".SIOCSIFBOND = 0x80206946
const @"".SIOCSIFBRDADDR = 0x80206913
const @"".SIOCSIFCAP = 0x8020695a
const @"".SIOCSIFDSTADDR = 0x8020690e
const @"".SIOCSIFFLAGS = 0x80206910
const @"".SIOCSIFGENERIC = 0x80206939
const @"".SIOCSIFKPI = 0x80206986
const @"".SIOCSIFLLADDR = 0x8020693c
const @"".SIOCSIFMAC = 0x80206983
const @"".SIOCSIFMEDIA = 0xc0206937
const @"".SIOCSIFMETRIC = 0x80206918
const @"".SIOCSIFMTU = 0x80206934
const @"".SIOCSIFNETMASK = 0x80206916
const @"".SIOCSIFPHYADDR = 0x8040693e
const @"".SIOCSIFPHYS = 0x80206936
const @"".SIOCSIFVLAN = 0x8020697e
const @"".SIOCSLIFPHYADDR = 0x81186942
const @"".SIOCSLOWAT = 0x80047302
const @"".SIOCSPGRP = 0x80047308
const @"".SOCK_DGRAM = 0x2
const @"".SOCK_MAXADDRLEN = 0xff
const @"".SOCK_RAW = 0x3
const @"".SOCK_RDM = 0x4
const @"".SOCK_SEQPACKET = 0x5
const @"".SOCK_STREAM = 0x1
const @"".SOL_SOCKET = 0xffff
const @"".SOMAXCONN = 0x80
const @"".SO_ACCEPTCONN = 0x2
const @"".SO_BROADCAST = 0x20
const @"".SO_DEBUG = 0x1
const @"".SO_DONTROUTE = 0x10
const @"".SO_DONTTRUNC = 0x2000
const @"".SO_ERROR = 0x1007
const @"".SO_KEEPALIVE = 0x8
const @"".SO_LABEL = 0x1010
const @"".SO_LINGER = 0x80
const @"".SO_LINGER_SEC = 0x1080
const @"".SO_NKE = 0x1021
const @"".SO_NOADDRERR = 0x1023
const @"".SO_NOSIGPIPE = 0x1022
const @"".SO_NOTIFYCONFLICT = 0x1026
const @"".SO_NP_EXTENSIONS = 0x1083
const @"".SO_NREAD = 0x1020
const @"".SO_NWRITE = 0x1024
const @"".SO_OOBINLINE = 0x100
const @"".SO_PEERLABEL = 0x1011
const @"".SO_RANDOMPORT = 0x1082
const @"".SO_RCVBUF = 0x1002
const @"".SO_RCVLOWAT = 0x1004
const @"".SO_RCVTIMEO = 0x1006
const @"".SO_RESTRICTIONS = 0x1081
const @"".SO_RESTRICT_DENYIN = 0x1
const @"".SO_RESTRICT_DENYOUT = 0x2
const @"".SO_RESTRICT_DENYSET = 0x80000000
const @"".SO_REUSEADDR = 0x4
const @"".SO_REUSEPORT = 0x200
const @"".SO_REUSESHAREUID = 0x1025
const @"".SO_SNDBUF = 0x1001
const @"".SO_SNDLOWAT = 0x1003
const @"".SO_SNDTIMEO = 0x1005
const @"".SO_TIMESTAMP = 0x400
const @"".SO_TIMESTAMP_MONOTONIC = 0x800
const @"".SO_TYPE = 0x1008
const @"".SO_UPCALLCLOSEWAIT = 0x1027
const @"".SO_USELOOPBACK = 0x40
const @"".SO_WANTMORE = 0x4000
const @"".SO_WANTOOBFLAG = 0x8000
const @"".SYS_ACCEPT = 0x1e
const @"".SYS_ACCEPT_NOCANCEL = 0x194
const @"".SYS_ACCESS = 0x21
const @"".SYS_ACCESS_EXTENDED = 0x11c
const @"".SYS_ACCT = 0x33
const @"".SYS_ADD_PROFIL = 0xb0
const @"".SYS_ADJTIME = 0x8c
const @"".SYS_AIO_CANCEL = 0x13c
const @"".SYS_AIO_ERROR = 0x13d
const @"".SYS_AIO_FSYNC = 0x139
const @"".SYS_AIO_READ = 0x13e
const @"".SYS_AIO_RETURN = 0x13a
const @"".SYS_AIO_SUSPEND = 0x13b
const @"".SYS_AIO_SUSPEND_NOCANCEL = 0x1a5
const @"".SYS_AIO_WRITE = 0x13f
const @"".SYS_ATGETMSG = 0xcf
const @"".SYS_ATPGETREQ = 0xd3
const @"".SYS_ATPGETRSP = 0xd4
const @"".SYS_ATPSNDREQ = 0xd1
const @"".SYS_ATPSNDRSP = 0xd2
const @"".SYS_ATPUTMSG = 0xd0
const @"".SYS_ATSOCKET = 0xce
const @"".SYS_AUDIT = 0x15e
const @"".SYS_AUDITCTL = 0x167
const @"".SYS_AUDITON = 0x15f
const @"".SYS_AUDIT_SESSION_JOIN = 0x1ad
const @"".SYS_AUDIT_SESSION_PORT = 0x1b0
const @"".SYS_AUDIT_SESSION_SELF = 0x1ac
const @"".SYS_BIND = 0x68
const @"".SYS_BSDTHREAD_CREATE = 0x168
const @"".SYS_BSDTHREAD_REGISTER = 0x16e
const @"".SYS_BSDTHREAD_TERMINATE = 0x169
const @"".SYS_CHDIR = 0xc
const @"".SYS_CHFLAGS = 0x22
const @"".SYS_CHMOD = 0xf
const @"".SYS_CHMOD_EXTENDED = 0x11a
const @"".SYS_CHOWN = 0x10
const @"".SYS_CHROOT = 0x3d
const @"".SYS_CHUD = 0xb9
const @"".SYS_CLOSE = 0x6
const @"".SYS_CLOSE_NOCANCEL = 0x18f
const @"".SYS_CONNECT = 0x62
const @"".SYS_CONNECT_NOCANCEL = 0x199
const @"".SYS_COPYFILE = 0xe3
const @"".SYS_CSOPS = 0xa9
const @"".SYS_DELETE = 0xe2
const @"".SYS_DUP = 0x29
const @"".SYS_DUP2 = 0x5a
const @"".SYS_EXCHANGEDATA = 0xdf
const @"".SYS_EXECVE = 0x3b
const @"".SYS_EXIT = 0x1
const @"".SYS_FCHDIR = 0xd
const @"".SYS_FCHFLAGS = 0x23
const @"".SYS_FCHMOD = 0x7c
const @"".SYS_FCHMOD_EXTENDED = 0x11b
const @"".SYS_FCHOWN = 0x7b
const @"".SYS_FCNTL = 0x5c
const @"".SYS_FCNTL_NOCANCEL = 0x196
const @"".SYS_FDATASYNC = 0xbb
const @"".SYS_FFSCTL = 0xf5
const @"".SYS_FGETATTRLIST = 0xe4
const @"".SYS_FGETXATTR = 0xeb
const @"".SYS_FHOPEN = 0xf8
const @"".SYS_FILEPORT_MAKEFD = 0x1af
const @"".SYS_FILEPORT_MAKEPORT = 0x1ae
const @"".SYS_FLISTXATTR = 0xf1
const @"".SYS_FLOCK = 0x83
const @"".SYS_FORK = 0x2
const @"".SYS_FPATHCONF = 0xc0
const @"".SYS_FREMOVEXATTR = 0xef
const @"".SYS_FSCTL = 0xf2
const @"".SYS_FSETATTRLIST = 0xe5
const @"".SYS_FSETXATTR = 0xed
const @"".SYS_FSGETPATH = 0x1ab
const @"".SYS_FSTAT = 0xbd
const @"".SYS_FSTAT64 = 0x153
const @"".SYS_FSTAT64_EXTENDED = 0x157
const @"".SYS_FSTATFS = 0x9e
const @"".SYS_FSTATFS64 = 0x15a
const @"".SYS_FSTATV = 0xdb
const @"".SYS_FSTAT_EXTENDED = 0x119
const @"".SYS_FSYNC = 0x5f
const @"".SYS_FSYNC_NOCANCEL = 0x198
const @"".SYS_FTRUNCATE = 0xc9
const @"".SYS_FUTIMES = 0x8b
const @"".SYS_GETATTRLIST = 0xdc
const @"".SYS_GETAUDIT = 0x163
const @"".SYS_GETAUDIT_ADDR = 0x165
const @"".SYS_GETAUID = 0x161
const @"".SYS_GETDIRENTRIES = 0xc4
const @"".SYS_GETDIRENTRIES64 = 0x158
const @"".SYS_GETDIRENTRIESATTR = 0xde
const @"".SYS_GETDTABLESIZE = 0x59
const @"".SYS_GETEGID = 0x2b
const @"".SYS_GETEUID = 0x19
const @"".SYS_GETFH = 0xa1
const @"".SYS_GETFSSTAT = 0x12
const @"".SYS_GETFSSTAT64 = 0x15b
const @"".SYS_GETGID = 0x2f
const @"".SYS_GETGROUPS = 0x4f
const @"".SYS_GETHOSTUUID = 0x8e
const @"".SYS_GETITIMER = 0x56
const @"".SYS_GETLCID = 0x18b
const @"".SYS_GETLOGIN = 0x31
const @"".SYS_GETPEERNAME = 0x1f
const @"".SYS_GETPGID = 0x97
const @"".SYS_GETPGRP = 0x51
const @"".SYS_GETPID = 0x14
const @"".SYS_GETPPID = 0x27
const @"".SYS_GETPRIORITY = 0x64
const @"".SYS_GETRLIMIT = 0xc2
const @"".SYS_GETRUSAGE = 0x75
const @"".SYS_GETSGROUPS = 0x120
const @"".SYS_GETSID = 0x136
const @"".SYS_GETSOCKNAME = 0x20
const @"".SYS_GETSOCKOPT = 0x76
const @"".SYS_GETTID = 0x11e
const @"".SYS_GETTIMEOFDAY = 0x74
const @"".SYS_GETUID = 0x18
const @"".SYS_GETWGROUPS = 0x122
const @"".SYS_GETXATTR = 0xea
const @"".SYS_IDENTITYSVC = 0x125
const @"".SYS_INITGROUPS = 0xf3
const @"".SYS_IOCTL = 0x36
const @"".SYS_IOPOLICYSYS = 0x142
const @"".SYS_ISSETUGID = 0x147
const @"".SYS_KDEBUG_TRACE = 0xb4
const @"".SYS_KEVENT = 0x16b
const @"".SYS_KEVENT64 = 0x171
const @"".SYS_KILL = 0x25
const @"".SYS_KQUEUE = 0x16a
const @"".SYS_LCHOWN = 0x16c
const @"".SYS_LINK = 0x9
const @"".SYS_LIO_LISTIO = 0x140
const @"".SYS_LISTEN = 0x6a
const @"".SYS_LISTXATTR = 0xf0
const @"".SYS_LSEEK = 0xc7
const @"".SYS_LSTAT = 0xbe
const @"".SYS_LSTAT64 = 0x154
const @"".SYS_LSTAT64_EXTENDED = 0x156
const @"".SYS_LSTATV = 0xda
const @"".SYS_LSTAT_EXTENDED = 0x118
const @"".SYS_MADVISE = 0x4b
const @"".SYS_MAXSYSCALL = 0x1b7
const @"".SYS_MINCORE = 0x4e
const @"".SYS_MINHERIT = 0xfa
const @"".SYS_MKCOMPLEX = 0xd8
const @"".SYS_MKDIR = 0x88
const @"".SYS_MKDIR_EXTENDED = 0x124
const @"".SYS_MKFIFO = 0x84
const @"".SYS_MKFIFO_EXTENDED = 0x123
const @"".SYS_MKNOD = 0xe
const @"".SYS_MLOCK = 0xcb
const @"".SYS_MLOCKALL = 0x144
const @"".SYS_MMAP = 0xc5
const @"".SYS_MODWATCH = 0xe9
const @"".SYS_MOUNT = 0xa7
const @"".SYS_MPROTECT = 0x4a
const @"".SYS_MSGCTL = 0x102
const @"".SYS_MSGGET = 0x103
const @"".SYS_MSGRCV = 0x105
const @"".SYS_MSGRCV_NOCANCEL = 0x1a3
const @"".SYS_MSGSND = 0x104
const @"".SYS_MSGSND_NOCANCEL = 0x1a2
const @"".SYS_MSGSYS = 0xfc
const @"".SYS_MSYNC = 0x41
const @"".SYS_MSYNC_NOCANCEL = 0x195
const @"".SYS_MUNLOCK = 0xcc
const @"".SYS_MUNLOCKALL = 0x145
const @"".SYS_MUNMAP = 0x49
const @"".SYS_NFSCLNT = 0xf7
const @"".SYS_NFSSVC = 0x9b
const @"".SYS_OPEN = 0x5
const @"".SYS_OPEN_EXTENDED = 0x115
const @"".SYS_OPEN_NOCANCEL = 0x18e
const @"".SYS_PATHCONF = 0xbf
const @"".SYS_PID_HIBERNATE = 0x1b3
const @"".SYS_PID_RESUME = 0x1b2
const @"".SYS_PID_SHUTDOWN_SOCKETS = 0x1b4
const @"".SYS_PID_SUSPEND = 0x1b1
const @"".SYS_PIPE = 0x2a
const @"".SYS_POLL = 0xe6
const @"".SYS_POLL_NOCANCEL = 0x1a1
const @"".SYS_POSIX_SPAWN = 0xf4
const @"".SYS_PREAD = 0x99
const @"".SYS_PREAD_NOCANCEL = 0x19e
const @"".SYS_PROCESS_POLICY = 0x143
const @"".SYS_PROC_INFO = 0x150
const @"".SYS_PROFIL = 0x2c
const @"".SYS_PSYNCH_CVBROAD = 0x12f
const @"".SYS_PSYNCH_CVCLRPREPOST = 0x138
const @"".SYS_PSYNCH_CVSIGNAL = 0x130
const @"".SYS_PSYNCH_CVWAIT = 0x131
const @"".SYS_PSYNCH_MUTEXDROP = 0x12e
const @"".SYS_PSYNCH_MUTEXWAIT = 0x12d
const @"".SYS_PSYNCH_RW_DOWNGRADE = 0x12b
const @"".SYS_PSYNCH_RW_LONGRDLOCK = 0x129
const @"".SYS_PSYNCH_RW_RDLOCK = 0x132
const @"".SYS_PSYNCH_RW_UNLOCK = 0x134
const @"".SYS_PSYNCH_RW_UNLOCK2 = 0x135
const @"".SYS_PSYNCH_RW_UPGRADE = 0x12c
const @"".SYS_PSYNCH_RW_WRLOCK = 0x133
const @"".SYS_PSYNCH_RW_YIELDWRLOCK = 0x12a
const @"".SYS_PTRACE = 0x1a
const @"".SYS_PWRITE = 0x9a
const @"".SYS_PWRITE_NOCANCEL = 0x19f
const @"".SYS_QUOTACTL = 0xa5
const @"".SYS_READ = 0x3
const @"".SYS_READLINK = 0x3a
const @"".SYS_READV = 0x78
const @"".SYS_READV_NOCANCEL = 0x19b
const @"".SYS_READ_NOCANCEL = 0x18c
const @"".SYS_REBOOT = 0x37
const @"".SYS_RECVFROM = 0x1d
const @"".SYS_RECVFROM_NOCANCEL = 0x193
const @"".SYS_RECVMSG = 0x1b
const @"".SYS_RECVMSG_NOCANCEL = 0x191
const @"".SYS_REMOVEXATTR = 0xee
const @"".SYS_RENAME = 0x80
const @"".SYS_REVOKE = 0x38
const @"".SYS_RMDIR = 0x89
const @"".SYS_SEARCHFS = 0xe1
const @"".SYS_SELECT = 0x5d
const @"".SYS_SELECT_NOCANCEL = 0x197
const @"".SYS_SEMCTL = 0xfe
const @"".SYS_SEMGET = 0xff
const @"".SYS_SEMOP = 0x100
const @"".SYS_SEMSYS = 0xfb
const @"".SYS_SEM_CLOSE = 0x10d
const @"".SYS_SEM_DESTROY = 0x114
const @"".SYS_SEM_GETVALUE = 0x112
const @"".SYS_SEM_INIT = 0x113
const @"".SYS_SEM_OPEN = 0x10c
const @"".SYS_SEM_POST = 0x111
const @"".SYS_SEM_TRYWAIT = 0x110
const @"".SYS_SEM_UNLINK = 0x10e
const @"".SYS_SEM_WAIT = 0x10f
const @"".SYS_SEM_WAIT_NOCANCEL = 0x1a4
const @"".SYS_SENDFILE = 0x151
const @"".SYS_SENDMSG = 0x1c
const @"".SYS_SENDMSG_NOCANCEL = 0x192
const @"".SYS_SENDTO = 0x85
const @"".SYS_SENDTO_NOCANCEL = 0x19d
const @"".SYS_SETATTRLIST = 0xdd
const @"".SYS_SETAUDIT = 0x164
const @"".SYS_SETAUDIT_ADDR = 0x166
const @"".SYS_SETAUID = 0x162
const @"".SYS_SETEGID = 0xb6
const @"".SYS_SETEUID = 0xb7
const @"".SYS_SETGID = 0xb5
const @"".SYS_SETGROUPS = 0x50
const @"".SYS_SETITIMER = 0x53
const @"".SYS_SETLCID = 0x18a
const @"".SYS_SETLOGIN = 0x32
const @"".SYS_SETPGID = 0x52
const @"".SYS_SETPRIORITY = 0x60
const @"".SYS_SETPRIVEXEC = 0x98
const @"".SYS_SETREGID = 0x7f
const @"".SYS_SETREUID = 0x7e
const @"".SYS_SETRLIMIT = 0xc3
const @"".SYS_SETSGROUPS = 0x11f
const @"".SYS_SETSID = 0x93
const @"".SYS_SETSOCKOPT = 0x69
const @"".SYS_SETTID = 0x11d
const @"".SYS_SETTID_WITH_PID = 0x137
const @"".SYS_SETTIMEOFDAY = 0x7a
const @"".SYS_SETUID = 0x17
const @"".SYS_SETWGROUPS = 0x121
const @"".SYS_SETXATTR = 0xec
const @"".SYS_SHARED_REGION_CHECK_NP = 0x126
const @"".SYS_SHARED_REGION_MAP_AND_SLIDE_NP = 0x1b6
const @"".SYS_SHMAT = 0x106
const @"".SYS_SHMCTL = 0x107
const @"".SYS_SHMDT = 0x108
const @"".SYS_SHMGET = 0x109
const @"".SYS_SHMSYS = 0xfd
const @"".SYS_SHM_OPEN = 0x10a
const @"".SYS_SHM_UNLINK = 0x10b
const @"".SYS_SHUTDOWN = 0x86
const @"".SYS_SIGACTION = 0x2e
const @"".SYS_SIGALTSTACK = 0x35
const @"".SYS_SIGPENDING = 0x34
const @"".SYS_SIGPROCMASK = 0x30
const @"".SYS_SIGRETURN = 0xb8
const @"".SYS_SIGSUSPEND = 0x6f
const @"".SYS_SIGSUSPEND_NOCANCEL = 0x19a
const @"".SYS_SOCKET = 0x61
const @"".SYS_SOCKETPAIR = 0x87
const @"".SYS_STACK_SNAPSHOT = 0x16d
const @"".SYS_STAT = 0xbc
const @"".SYS_STAT64 = 0x152
const @"".SYS_STAT64_EXTENDED = 0x155
const @"".SYS_STATFS = 0x9d
const @"".SYS_STATFS64 = 0x159
const @"".SYS_STATV = 0xd9
const @"".SYS_STAT_EXTENDED = 0x117
const @"".SYS_SWAPON = 0x55
const @"".SYS_SYMLINK = 0x39
const @"".SYS_SYNC = 0x24
const @"".SYS_SYSCALL = 0x0
const @"".SYS_THREAD_SELFID = 0x174
const @"".SYS_TRUNCATE = 0xc8
const @"".SYS_UMASK = 0x3c
const @"".SYS_UMASK_EXTENDED = 0x116
const @"".SYS_UNDELETE = 0xcd
const @"".SYS_UNLINK = 0xa
const @"".SYS_UNMOUNT = 0x9f
const @"".SYS_UTIMES = 0x8a
const @"".SYS_VFORK = 0x42
const @"".SYS_VM_PRESSURE_MONITOR = 0x128
const @"".SYS_WAIT4 = 0x7
const @"".SYS_WAIT4_NOCANCEL = 0x190
const @"".SYS_WAITEVENT = 0xe8
const @"".SYS_WAITID = 0xad
const @"".SYS_WAITID_NOCANCEL = 0x1a0
const @"".SYS_WATCHEVENT = 0xe7
const @"".SYS_WORKQ_KERNRETURN = 0x170
const @"".SYS_WORKQ_OPEN = 0x16f
const @"".SYS_WRITE = 0x4
const @"".SYS_WRITEV = 0x79
const @"".SYS_WRITEV_NOCANCEL = 0x19c
const @"".SYS_WRITE_NOCANCEL = 0x18d
const @"".SYS___DISABLE_THREADSIGNAL = 0x14b
const @"".SYS___MAC_EXECVE = 0x17c
const @"".SYS___MAC_GETFSSTAT = 0x1aa
const @"".SYS___MAC_GET_FD = 0x184
const @"".SYS___MAC_GET_FILE = 0x17e
const @"".SYS___MAC_GET_LCID = 0x187
const @"".SYS___MAC_GET_LCTX = 0x188
const @"".SYS___MAC_GET_LINK = 0x180
const @"".SYS___MAC_GET_MOUNT = 0x1a9
const @"".SYS___MAC_GET_PID = 0x186
const @"".SYS___MAC_GET_PROC = 0x182
const @"".SYS___MAC_MOUNT = 0x1a8
const @"".SYS___MAC_SET_FD = 0x185
const @"".SYS___MAC_SET_FILE = 0x17f
const @"".SYS___MAC_SET_LCTX = 0x189
const @"".SYS___MAC_SET_LINK = 0x181
const @"".SYS___MAC_SET_PROC = 0x183
const @"".SYS___MAC_SYSCALL = 0x17d
const @"".SYS___OLD_SEMWAIT_SIGNAL = 0x172
const @"".SYS___OLD_SEMWAIT_SIGNAL_NOCANCEL = 0x173
const @"".SYS___PTHREAD_CANCELED = 0x14d
const @"".SYS___PTHREAD_CHDIR = 0x15c
const @"".SYS___PTHREAD_FCHDIR = 0x15d
const @"".SYS___PTHREAD_KILL = 0x148
const @"".SYS___PTHREAD_MARKCANCEL = 0x14c
const @"".SYS___PTHREAD_SIGMASK = 0x149
const @"".SYS___SEMWAIT_SIGNAL = 0x14e
const @"".SYS___SEMWAIT_SIGNAL_NOCANCEL = 0x1a7
const @"".SYS___SIGWAIT = 0x14a
const @"".SYS___SIGWAIT_NOCANCEL = 0x1a6
const @"".SYS___SYSCTL = 0xca
const @"".S_IEXEC = 0x40
const @"".S_IFBLK = 0x6000
const @"".S_IFCHR = 0x2000
const @"".S_IFDIR = 0x4000
const @"".S_IFIFO = 0x1000
const @"".S_IFLNK = 0xa000
const @"".S_IFMT = 0xf000
const @"".S_IFREG = 0x8000
const @"".S_IFSOCK = 0xc000
const @"".S_IFWHT = 0xe000
const @"".S_IREAD = 0x100
const @"".S_IRGRP = 0x20
const @"".S_IROTH = 0x4
const @"".S_IRUSR = 0x100
const @"".S_IRWXG = 0x38
const @"".S_IRWXO = 0x7
const @"".S_IRWXU = 0x1c0
const @"".S_ISGID = 0x400
const @"".S_ISTXT = 0x200
const @"".S_ISUID = 0x800
const @"".S_ISVTX = 0x200
const @"".S_IWGRP = 0x10
const @"".S_IWOTH = 0x2
const @"".S_IWRITE = 0x80
const @"".S_IWUSR = 0x80
const @"".S_IXGRP = 0x8
const @"".S_IXOTH = 0x1
const @"".S_IXUSR = 0x40
func @"".Seek(@"".fd int, @"".offset int64, @"".whence int) (@"".newoffset int64, @"".err error)
func @"".Select(@"".n int, @"".r *@"".FdSet, @"".w *@"".FdSet, @"".e *@"".FdSet, @"".timeout *@"".Timeval) (@"".err error)
func @"".Sendfile(@"".outfd int, @"".infd int, @"".offset *int64, @"".count int) (@"".written int, @"".err error)
func @"".Sendmsg(@"".fd int, @"".p []byte, @"".oob []byte, @"".to @"".Sockaddr, @"".flags int) (@"".err error)
func @"".SendmsgN(@"".fd int, @"".p []byte, @"".oob []byte, @"".to @"".Sockaddr, @"".flags int) (@"".n int, @"".err error)
func @"".Sendto(@"".fd int, @"".p []byte, @"".flags int, @"".to @"".Sockaddr) (@"".err error)
func @"".SetBpf(@"".fd int, @"".i []@"".BpfInsn) (? error)
func @"".SetBpfBuflen(@"".fd int, @"".l int) (? int, ? error)
func @"".SetBpfDatalink(@"".fd int, @"".t int) (? int, ? error)
func @"".SetBpfHeadercmpl(@"".fd int, @"".f int) (? error)
func @"".SetBpfImmediate(@"".fd int, @"".m int) (? error)
func @"".SetBpfInterface(@"".fd int, @"".name string) (? error)
func @"".SetBpfPromisc(@"".fd int, @"".m int) (? error)
func @"".SetBpfTimeout(@"".fd int, @"".tv *@"".Timeval) (? error)
func @"".SetKevent(@"".k *@"".Kevent_t, @"".fd int, @"".mode int, @"".flags int) ()
func @"".SetNonblock(@"".fd int, @"".nonblocking bool) (@"".err error)
func @"".Setegid(@"".egid int) (@"".err error)
func @"".Setenv(@"".key string, @"".value string) (? error)
func @"".Seteuid(@"".euid int) (@"".err error)
func @"".Setgid(@"".gid int) (@"".err error)
func @"".Setgroups(@"".gids []int) (@"".err error)
func @"".Setlogin(@"".name string) (@"".err error)
func @"".Setpgid(@"".pid int, @"".pgid int) (@"".err error)
func @"".Setpriority(@"".which int, @"".who int, @"".prio int) (@"".err error)
func @"".Setprivexec(@"".flag int) (@"".err error)
func @"".Setregid(@"".rgid int, @"".egid int) (@"".err error)
func @"".Setreuid(@"".ruid int, @"".euid int) (@"".err error)
func @"".Setrlimit(@"".which int, @"".lim *@"".Rlimit) (@"".err error)
func @"".Setsid() (@"".pid int, @"".err error)
func @"".SetsockoptByte(@"".fd int, @"".level int, @"".opt int, @"".value byte) (@"".err error)
func @"".SetsockoptICMPv6Filter(@"".fd int, @"".level int, @"".opt int, @"".filter *@"".ICMPv6Filter) (? error)
func @"".SetsockoptIPMreq(@"".fd int, @"".level int, @"".opt int, @"".mreq *@"".IPMreq) (@"".err error)
func @"".SetsockoptIPv6Mreq(@"".fd int, @"".level int, @"".opt int, @"".mreq *@"".IPv6Mreq) (@"".err error)
func @"".SetsockoptInet4Addr(@"".fd int, @"".level int, @"".opt int, @"".value [4]byte) (@"".err error)
func @"".SetsockoptInt(@"".fd int, @"".level int, @"".opt int, @"".value int) (@"".err error)
func @"".SetsockoptLinger(@"".fd int, @"".level int, @"".opt int, @"".l *@"".Linger) (@"".err error)
func @"".SetsockoptString(@"".fd int, @"".level int, @"".opt int, @"".s string) (@"".err error)
func @"".SetsockoptTimeval(@"".fd int, @"".level int, @"".opt int, @"".tv *@"".Timeval) (@"".err error)
func @"".Settimeofday(@"".tp *@"".Timeval) (@"".err error)
func @"".Setuid(@"".uid int) (@"".err error)
func @"".Shutdown(@"".s int, @"".how int) (@"".err error)
type @"".Signal int
func (? @"".Signal) @"".Signal() ()
func (? @"".Signal) @"".String() (? string)
func (? *@"".Signal) @"".Signal() ()
func (? *@"".Signal) @"".String() (? string)
const @"".SizeofBpfHdr = 0x14
const @"".SizeofBpfInsn = 0x8
const @"".SizeofBpfProgram = 0x10
const @"".SizeofBpfStat = 0x8
const @"".SizeofBpfVersion = 0x4
const @"".SizeofCmsghdr = 0xc
const @"".SizeofICMPv6Filter = 0x20
const @"".SizeofIPMreq = 0x8
const @"".SizeofIPv6MTUInfo = 0x20
const @"".SizeofIPv6Mreq = 0x14
const @"".SizeofIfData = 0x60
const @"".SizeofIfMsghdr = 0x70
const @"".SizeofIfaMsghdr = 0x14
const @"".SizeofIfmaMsghdr = 0x10
const @"".SizeofIfmaMsghdr2 = 0x14
const @"".SizeofInet4Pktinfo = 0xc
const @"".SizeofInet6Pktinfo = 0x14
const @"".SizeofLinger = 0x8
const @"".SizeofMsghdr = 0x30
const @"".SizeofRtMetrics = 0x38
const @"".SizeofRtMsghdr = 0x5c
const @"".SizeofSockaddrAny = 0x6c
const @"".SizeofSockaddrDatalink = 0x14
const @"".SizeofSockaddrInet4 = 0x10
const @"".SizeofSockaddrInet6 = 0x1c
const @"".SizeofSockaddrUnix = 0x6a
func @"".SlicePtrFromStrings(@"".ss []string) (? []*byte, ? error)
type @"".Sockaddr interface { @"".sockaddr() (@"".ptr @"unsafe".Pointer, @"".len @""._Socklen, @"".err error) }
type @"".SockaddrDatalink struct { @"".Len uint8; @"".Family uint8; @"".Index uint16; @"".Type uint8; @"".Nlen uint8; @"".Alen uint8; @"".Slen uint8; @"".Data [12]int8; @"".raw @"".RawSockaddrDatalink }
func (? *@"".SockaddrDatalink) @"".sockaddr() (? @"unsafe".Pointer, ? @""._Socklen, ? error)
type @"".SockaddrInet4 struct { @"".Port int; @"".Addr [4]byte; @"".raw @"".RawSockaddrInet4 }
func (? *@"".SockaddrInet4) @"".sockaddr() (? @"unsafe".Pointer, ? @""._Socklen, ? error)
type @"".SockaddrInet6 struct { @"".Port int; @"".ZoneId uint32; @"".Addr [16]byte; @"".raw @"".RawSockaddrInet6 }
func (? *@"".SockaddrInet6) @"".sockaddr() (? @"unsafe".Pointer, ? @""._Socklen, ? error)
type @"".SockaddrUnix struct { @"".Name string; @"".raw @"".RawSockaddrUnix }
func (? *@"".SockaddrUnix) @"".sockaddr() (? @"unsafe".Pointer, ? @""._Socklen, ? error)
func @"".Socket(@"".domain int, @"".typ int, @"".proto int) (@"".fd int, @"".err error)
type @"".SocketControlMessage struct { @"".Header @"".Cmsghdr; @"".Data []byte }
var @"".SocketDisableIPv6 bool
func @"".Socketpair(@"".domain int, @"".typ int, @"".proto int) (@"".fd [2]int, @"".err error)
func @"".StartProcess(@"".argv0 string, @"".argv []string, @"".attr *@"".ProcAttr) (@"".pid int, @"".handle uintptr, @"".err error)
func @"".Stat(@"".path string, @"".stat *@"".Stat_t) (@"".err error)
type @"".Stat_t struct { @"".Dev int32; @"".Mode uint16; @"".Nlink uint16; @"".Ino uint64; @"".Uid uint32; @"".Gid uint32; @"".Rdev int32; @"".Pad_cgo_0 [4]byte; @"".Atimespec @"".Timespec; @"".Mtimespec @"".Timespec; @"".Ctimespec @"".Timespec; @"".Birthtimespec @"".Timespec; @"".Size int64; @"".Blocks int64; @"".Blksize int32; @"".Flags uint32; @"".Gen uint32; @"".Lspare int32; @"".Qspare [2]int64 }
func @"".Statfs(@"".path string, @"".stat *@"".Statfs_t) (@"".err error)
type @"".Statfs_t struct { @"".Bsize uint32; @"".Iosize int32; @"".Blocks uint64; @"".Bfree uint64; @"".Bavail uint64; @"".Files uint64; @"".Ffree uint64; @"".Fsid @"".Fsid; @"".Owner uint32; @"".Type uint32; @"".Flags uint32; @"".Fssubtype uint32; @"".Fstypename [16]int8; @"".Mntonname [1024]int8; @"".Mntfromname [1024]int8; @"".Reserved [8]uint32 }
var @"".Stderr int
var @"".Stdin int
var @"".Stdout int
func @"".StringBytePtr(@"".s string) (? *byte)
func @"".StringByteSlice(@"".s string) (? []byte)
func @"".StringSlicePtr(@"".ss []string) (? []*byte)
func @"".Symlink(@"".path string, @"".link string) (@"".err error)
func @"".Sync() (@"".err error)
type @"".SysProcAttr struct { @"".Chroot string; @"".Credential *@"".Credential; @"".Ptrace bool; @"".Setsid bool; @"".Setpgid bool; @"".Setctty bool; @"".Noctty bool }
func @"".Syscall(@"".trap uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".Syscall6(@"".trap uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr, @"".a4 uintptr, @"".a5 uintptr, @"".a6 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".Syscall9(@"".num uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr, @"".a4 uintptr, @"".a5 uintptr, @"".a6 uintptr, @"".a7 uintptr, @"".a8 uintptr, @"".a9 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".Sysctl(@"".name string) (@"".value string, @"".err error)
func @"".SysctlUint32(@"".name string) (@"".value uint32, @"".err error)
const @"".TCIFLUSH = 0x1
const @"".TCIOFLUSH = 0x3
const @"".TCOFLUSH = 0x2
const @"".TCP_CONNECTIONTIMEOUT = 0x20
const @"".TCP_KEEPALIVE = 0x10
const @"".TCP_MAXHLEN = 0x3c
const @"".TCP_MAXOLEN = 0x28
const @"".TCP_MAXSEG = 0x2
const @"".TCP_MAXWIN = 0xffff
const @"".TCP_MAX_SACK = 0x3
const @"".TCP_MAX_WINSHIFT = 0xe
const @"".TCP_MINMSS = 0xd8
const @"".TCP_MINMSSOVERLOAD = 0x3e8
const @"".TCP_MSS = 0x200
const @"".TCP_NODELAY = 0x1
const @"".TCP_NOOPT = 0x8
const @"".TCP_NOPUSH = 0x4
const @"".TCP_RXT_CONNDROPTIME = 0x80
const @"".TCP_RXT_FINDROP = 0x100
const @"".TCSAFLUSH = 0x2
const @"".TIOCCBRK = 0x2000747a
const @"".TIOCCDTR = 0x20007478
const @"".TIOCCONS = 0x80047462
const @"".TIOCDCDTIMESTAMP = 0x40107458
const @"".TIOCDRAIN = 0x2000745e
const @"".TIOCDSIMICROCODE = 0x20007455
const @"".TIOCEXCL = 0x2000740d
const @"".TIOCEXT = 0x80047460
const @"".TIOCFLUSH = 0x80047410
const @"".TIOCGDRAINWAIT = 0x40047456
const @"".TIOCGETA = 0x40487413
const @"".TIOCGETD = 0x4004741a
const @"".TIOCGPGRP = 0x40047477
const @"".TIOCGWINSZ = 0x40087468
const @"".TIOCIXOFF = 0x20007480
const @"".TIOCIXON = 0x20007481
const @"".TIOCMBIC = 0x8004746b
const @"".TIOCMBIS = 0x8004746c
const @"".TIOCMGDTRWAIT = 0x4004745a
const @"".TIOCMGET = 0x4004746a
const @"".TIOCMODG = 0x40047403
const @"".TIOCMODS = 0x80047404
const @"".TIOCMSDTRWAIT = 0x8004745b
const @"".TIOCMSET = 0x8004746d
const @"".TIOCM_CAR = 0x40
const @"".TIOCM_CD = 0x40
const @"".TIOCM_CTS = 0x20
const @"".TIOCM_DSR = 0x100
const @"".TIOCM_DTR = 0x2
const @"".TIOCM_LE = 0x1
const @"".TIOCM_RI = 0x80
const @"".TIOCM_RNG = 0x80
const @"".TIOCM_RTS = 0x4
const @"".TIOCM_SR = 0x10
const @"".TIOCM_ST = 0x8
const @"".TIOCNOTTY = 0x20007471
const @"".TIOCNXCL = 0x2000740e
const @"".TIOCOUTQ = 0x40047473
const @"".TIOCPKT = 0x80047470
const @"".TIOCPKT_DATA = 0x0
const @"".TIOCPKT_DOSTOP = 0x20
const @"".TIOCPKT_FLUSHREAD = 0x1
const @"".TIOCPKT_FLUSHWRITE = 0x2
const @"".TIOCPKT_IOCTL = 0x40
const @"".TIOCPKT_NOSTOP = 0x10
const @"".TIOCPKT_START = 0x8
const @"".TIOCPKT_STOP = 0x4
const @"".TIOCPTYGNAME = 0x40807453
const @"".TIOCPTYGRANT = 0x20007454
const @"".TIOCPTYUNLK = 0x20007452
const @"".TIOCREMOTE = 0x80047469
const @"".TIOCSBRK = 0x2000747b
const @"".TIOCSCONS = 0x20007463
const @"".TIOCSCTTY = 0x20007461
const @"".TIOCSDRAINWAIT = 0x80047457
const @"".TIOCSDTR = 0x20007479
const @"".TIOCSETA = 0x80487414
const @"".TIOCSETAF = 0x80487416
const @"".TIOCSETAW = 0x80487415
const @"".TIOCSETD = 0x8004741b
const @"".TIOCSIG = 0x2000745f
const @"".TIOCSPGRP = 0x80047476
const @"".TIOCSTART = 0x2000746e
const @"".TIOCSTAT = 0x20007465
const @"".TIOCSTI = 0x80017472
const @"".TIOCSTOP = 0x2000746f
const @"".TIOCSWINSZ = 0x80087467
const @"".TIOCTIMESTAMP = 0x40107459
const @"".TIOCUCNTL = 0x80047466
const @"".TOSTOP = 0x400000
type @"".Termios struct { @"".Iflag uint64; @"".Oflag uint64; @"".Cflag uint64; @"".Lflag uint64; @"".Cc [20]uint8; @"".Pad_cgo_0 [4]byte; @"".Ispeed uint64; @"".Ospeed uint64 }
type @"".Timespec struct { @"".Sec int64; @"".Nsec int64 }
func (? *@"".Timespec) @"".Nano() (? int64)
func (? *@"".Timespec) @"".Unix() (@"".sec int64, @"".nsec int64)
func @"".TimespecToNsec(@"".ts @"".Timespec) (? int64)
type @"".Timeval struct { @"".Sec int64; @"".Usec int32; @"".Pad_cgo_0 [4]byte }
func (? *@"".Timeval) @"".Nano() (? int64)
func (? *@"".Timeval) @"".Unix() (@"".sec int64, @"".nsec int64)
type @"".Timeval32 struct { @"".Sec int32; @"".Usec int32 }
func @"".TimevalToNsec(@"".tv @"".Timeval) (? int64)
func @"".Truncate(@"".path string, @"".length int64) (@"".err error)
func @"".Umask(@"".newmask int) (@"".oldmask int)
func @"".Undelete(@"".path string) (@"".err error)
func @"".UnixRights(@"".fds ...int) (? []byte)
func @"".Unlink(@"".path string) (@"".err error)
func @"".Unmount(@"".path string, @"".flags int) (@"".err error)
func @"".Utimes(@"".path string, @"".tv []@"".Timeval) (@"".err error)
func @"".UtimesNano(@"".path string, @"".ts []@"".Timespec) (? error)
const @"".VDISCARD = 0xf
const @"".VDSUSP = 0xb
const @"".VEOF = 0x0
const @"".VEOL = 0x1
const @"".VEOL2 = 0x2
const @"".VERASE = 0x3
const @"".VINTR = 0x8
const @"".VKILL = 0x5
const @"".VLNEXT = 0xe
const @"".VMIN = 0x10
const @"".VQUIT = 0x9
const @"".VREPRINT = 0x6
const @"".VSTART = 0xc
const @"".VSTATUS = 0x12
const @"".VSTOP = 0xd
const @"".VSUSP = 0xa
const @"".VT0 = 0x0
const @"".VT1 = 0x10000
const @"".VTDLY = 0x10000
const @"".VTIME = 0x11
const @"".VWERASE = 0x4
const @"".WCONTINUED = 0x10
const @"".WCOREFLAG = 0x80
const @"".WEXITED = 0x4
const @"".WNOHANG = 0x1
const @"".WNOWAIT = 0x20
const @"".WORDSIZE = 0x40
const @"".WSTOPPED = 0x8
const @"".WUNTRACED = 0x2
func @"".Wait4(@"".pid int, @"".wstatus *@"".WaitStatus, @"".options int, @"".rusage *@"".Rusage) (@"".wpid int, @"".err error)
type @"".WaitStatus uint32
func (? @"".WaitStatus) @"".Continued() (? bool)
func (? @"".WaitStatus) @"".CoreDump() (? bool)
func (? @"".WaitStatus) @"".ExitStatus() (? int)
func (? @"".WaitStatus) @"".Exited() (? bool)
func (? @"".WaitStatus) @"".Signal() (? @"".Signal)
func (? @"".WaitStatus) @"".Signaled() (? bool)
func (? @"".WaitStatus) @"".StopSignal() (? @"".Signal)
func (? @"".WaitStatus) @"".Stopped() (? bool)
func (? @"".WaitStatus) @"".TrapCause() (? int)
func (? *@"".WaitStatus) @"".Continued() (? bool)
func (? *@"".WaitStatus) @"".CoreDump() (? bool)
func (? *@"".WaitStatus) @"".ExitStatus() (? int)
func (? *@"".WaitStatus) @"".Exited() (? bool)
func (? *@"".WaitStatus) @"".Signal() (? @"".Signal)
func (? *@"".WaitStatus) @"".Signaled() (? bool)
func (? *@"".WaitStatus) @"".StopSignal() (? @"".Signal)
func (? *@"".WaitStatus) @"".Stopped() (? bool)
func (? *@"".WaitStatus) @"".TrapCause() (? int)
func @"".Write(@"".fd int, @"".p []byte) (@"".n int, @"".err error)
type @""._C_int int32
type @""._C_long int64
type @""._C_long_long int64
type @""._C_short int16
type @""._Gid_t uint32
type @""._Socklen uint32
type @"".anyMessage struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8 }
func (? *@"".anyMessage) @"".toRoutingMessage(@"".b []byte) (? @"".RoutingMessage)
type @"".attrList struct { @"".bitmapCount uint16; _ uint16; @"".CommonAttr uint32; @"".VolAttr uint32; @"".DirAttr uint32; @"".FileAttr uint32; @"".Forkattr uint32 }
type @"".ivalue struct { @"".name [16]byte; @"".value int16 }
type @"".mmapper struct { ? @"sync".Mutex; @"".active map[*byte][]byte; @"".mmap func (@"".addr uintptr, @"".length uintptr, @"".prot int, @"".flags int, @"".fd int, @"".offset int64) (? uintptr, ? error); @"".munmap func (@"".addr uintptr, @"".length uintptr) (? error) }
func (? *@"".mmapper) @"".Mmap(@"".fd int, @"".offset int64, @"".length int, @"".prot int, @"".flags int) (@"".data []byte, @"".err error)
func (? *@"".mmapper) @"".Munmap(@"".data []byte) (@"".err error)
type @"sync".RWMutex struct { @"sync".w @"sync".Mutex; @"sync".writerSem uint32; @"sync".readerSem uint32; @"sync".readerCount int32; @"sync".readerWait int32 }
func (? *@"sync".RWMutex) @"sync".Lock() ()
func (? *@"sync".RWMutex) @"sync".RLock() ()
func (? *@"sync".RWMutex) @"sync".RLocker() (? @"sync".Locker)
func (? *@"sync".RWMutex) @"sync".RUnlock() ()
func (? *@"sync".RWMutex) @"sync".Unlock() ()
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
$$
0ggithub.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytes0X0
bytesA0$github.com/gopherjs/gopherjs/jsB0	syncC0runtimeD0errorsE0��$0�Z 0AC��AC=$pkg.ivalue=$newType(0,"Struct","syscall.ivalue","ivalue","syscall",function(name_,value_){this.$val=this;this.name=name_!==undefined?name_:($arrayType($Uint8,16)).zero();this.value=value_!==undefined?value_:0;});fAC.init([["name","name","syscall",($arrayType($Uint8,16)),""],["value","value","syscall",$Int16,""]]);0ivalue0  0�H 0AW�AW=$pkg.SysProcAttr=$newType(0,"Struct","syscall.SysProcAttr","SysProcAttr","syscall",function(Chroot_,Credential_,Ptrace_,Setsid_,Setpgid_,Setctty_,Noctty_){this.$val=this;this.Chroot=Chroot_!==undefined?Chroot_:"";this.Credential=Credential_!==undefined?Credential_:($ptrType(BF)).nil;this.Ptrace=Ptrace_!==undefined?Ptrace_:false;this.Setsid=Setsid_!==undefined?Setsid_:false;this.Setpgid=Setpgid_!==undefined?Setpgid_:false;this.Setctty=Setctty_!==undefined?Setctty_:false;this.Noctty=Noctty_!==undefined?Noctty_:false;});�AW.init([["Chroot","Chroot","",$String,""],["Credential","Credential","",($ptrType(BF)),""],["Ptrace","Ptrace","",$Bool,""],["Setsid","Setsid","",$Bool,""],["Setpgid","Setpgid","",$Bool,""],["Setctty","Setctty","",$Bool,""],["Noctty","Noctty","",$Bool,""]]);0
Credential0  0�$ 0BG�LBG=$pkg.ProcAttr=$newType(0,"Struct","syscall.ProcAttr","ProcAttr","syscall",function(Dir_,Env_,Files_,Sys_){this.$val=this;this.Dir=Dir_!==undefined?Dir_:"";this.Env=Env_!==undefined?Env_:($sliceType($String)).nil;this.Files=Files_!==undefined?Files_:($sliceType($Uintptr)).nil;this.Sys=Sys_!==undefined?Sys_:($ptrType(AW)).nil;});��BG.init([["Dir","Dir","",$String,""],["Env","Env","",($sliceType($String)),""],["Files","Files","",($sliceType($Uintptr)),""],["Sys","Sys","",($ptrType(AW)),""]]);0
ProcAttr0syscall:SysProcAttr 0�� 0BVhBV=$pkg.RoutingMessage=$newType(8,"Interface","syscall.RoutingMessage","RoutingMessage","syscall",null);TBV.init([["sockaddr","sockaddr","syscall",$funcType([],[($sliceType(EQ))],false)]]);0RoutingMessage0syscall:Sockaddr 0�# 0BW�BW=$pkg.anyMessage=$newType(0,"Struct","syscall.anyMessage","anyMessage","syscall",function(Msglen_,Version_,Type_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;});��($ptrType(BW)).methods=[["toRoutingMessage","toRoutingMessage","syscall",$funcType([($sliceType($Uint8))],[BV],false),-1]];BW.init([["Msglen","Msglen","",$Uint16,""],["Version","Version","",$Uint8,""],["Type","Type","",$Uint8,""]]);0
anyMessage0syscall:RoutingMessage 0�� 0BX��BX=$pkg.RouteMessage=$newType(0,"Struct","syscall.RouteMessage","RouteMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LQ.Ptr();this.Data=Data_!==undefined?Data_:($sliceType($Uint8)).nil;});��($ptrType(BX)).methods=[["sockaddr","sockaddr","syscall",$funcType([],[($sliceType(EQ))],false),-1]];BX.init([["Header","Header","",LQ,""],["Data","Data","",($sliceType($Uint8)),""]]);0RouteMessage0$syscall:RtMsghdrsyscall:Sockaddr 0� 0BY��BY=$pkg.InterfaceMessage=$newType(0,"Struct","syscall.InterfaceMessage","InterfaceMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LL.Ptr();this.Data=Data_!==undefined?Data_:($sliceType($Uint8)).nil;});��($ptrType(BY)).methods=[["sockaddr","sockaddr","syscall",$funcType([],[($sliceType(EQ))],false),-1]];BY.init([["Header","Header","",LL,""],["Data","Data","",($sliceType($Uint8)),""]]);0InterfaceMessage0$syscall:IfMsghdrsyscall:Sockaddr 0� 0BZ�BZ=$pkg.InterfaceAddrMessage=$newType(0,"Struct","syscall.InterfaceAddrMessage","InterfaceAddrMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LN.Ptr();this.Data=Data_!==undefined?Data_:($sliceType($Uint8)).nil;});��($ptrType(BZ)).methods=[["sockaddr","sockaddr","syscall",$funcType([],[($sliceType(EQ))],false),-1]];BZ.init([["Header","Header","",LN,""],["Data","Data","",($sliceType($Uint8)),""]]);0InterfaceAddrMessage0%syscall:IfaMsghdrsyscall:Sockaddr 0�: 0CC�&CC=$pkg.InterfaceMulticastAddrMessage=$newType(0,"Struct","syscall.InterfaceMulticastAddrMessage","InterfaceMulticastAddrMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LP.Ptr();this.Data=Data_!==undefined?Data_:($sliceType($Uint8)).nil;});��($ptrType(CC)).methods=[["sockaddr","sockaddr","syscall",$funcType([],[($sliceType(EQ))],false),-1]];CC.init([["Header","Header","",LP,""],["Data","Data","",($sliceType($Uint8)),""]]);0InterfaceMulticastAddrMessage0'syscall:IfmaMsghdr2syscall:Sockaddr 0�� 0CH�CH=$pkg.SocketControlMessage=$newType(0,"Struct","syscall.SocketControlMessage","SocketControlMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LE.Ptr();this.Data=Data_!==undefined?Data_:($sliceType($Uint8)).nil;});SCH.init([["Header","Header","",LE,""],["Data","Data","",($sliceType($Uint8)),""]]);0SocketControlMessage0syscall:Cmsghdr 0�� 0CUYCU=$pkg.WaitStatus=$newType(4,"Uint32","syscall.WaitStatus","WaitStatus","syscall",null);�.CU.methods=[["Continued","Continued","",$funcType([],[$Bool],false),-1],["CoreDump","CoreDump","",$funcType([],[$Bool],false),-1],["ExitStatus","ExitStatus","",$funcType([],[$Int],false),-1],["Exited","Exited","",$funcType([],[$Bool],false),-1],["Signal","Signal","",$funcType([],[EN],false),-1],["Signaled","Signaled","",$funcType([],[$Bool],false),-1],["StopSignal","StopSignal","",$funcType([],[EN],false),-1],["Stopped","Stopped","",$funcType([],[$Bool],false),-1],["TrapCause","TrapCause","",$funcType([],[$Int],false),-1]];($ptrType(CU)).methods=[["Continued","Continued","",$funcType([],[$Bool],false),-1],["CoreDump","CoreDump","",$funcType([],[$Bool],false),-1],["ExitStatus","ExitStatus","",$funcType([],[$Int],false),-1],["Exited","Exited","",$funcType([],[$Bool],false),-1],["Signal","Signal","",$funcType([],[EN],false),-1],["Signaled","Signaled","",$funcType([],[$Bool],false),-1],["StopSignal","StopSignal","",$funcType([],[EN],false),-1],["Stopped","Stopped","",$funcType([],[$Bool],false),-1],["TrapCause","TrapCause","",$funcType([],[$Int],false),-1]];0
WaitStatus0syscall:Signal 0� 0DS�&DS=$pkg.SockaddrDatalink=$newType(0,"Struct","syscall.SockaddrDatalink","SockaddrDatalink","syscall",function(Len_,Family_,Index_,Type_,Nlen_,Alen_,Slen_,Data_,raw_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Family=Family_!==undefined?Family_:0;this.Index=Index_!==undefined?Index_:0;this.Type=Type_!==undefined?Type_:0;this.Nlen=Nlen_!==undefined?Nlen_:0;this.Alen=Alen_!==undefined?Alen_:0;this.Slen=Slen_!==undefined?Slen_:0;this.Data=Data_!==undefined?Data_:($arrayType($Int8,12)).zero();this.raw=raw_!==undefined?raw_:new KV.Ptr();});��($ptrType(DS)).methods=[["sockaddr","sockaddr","syscall",$funcType([],[$UnsafePointer,KY,$error],false),-1]];DS.init([["Len","Len","",$Uint8,""],["Family","Family","",$Uint8,""],["Index","Index","",$Uint16,""],["Type","Type","",$Uint8,""],["Nlen","Nlen","",$Uint8,""],["Alen","Alen","",$Uint8,""],["Slen","Slen","",$Uint8,""],["Data","Data","",($arrayType($Int8,12)),""],["raw","raw","syscall",KV,""]]);0SockaddrDatalink0/syscall:RawSockaddrDatalinksyscall:_Socklen 0�5 0DX��DX=$pkg.attrList=$newType(0,"Struct","syscall.attrList","attrList","syscall",function(bitmapCount_,_$1_,CommonAttr_,VolAttr_,DirAttr_,FileAttr_,Forkattr_){this.$val=this;this.bitmapCount=bitmapCount_!==undefined?bitmapCount_:0;this._$1=_$1_!==undefined?_$1_:0;this.CommonAttr=CommonAttr_!==undefined?CommonAttr_:0;this.VolAttr=VolAttr_!==undefined?VolAttr_:0;this.DirAttr=DirAttr_!==undefined?DirAttr_:0;this.FileAttr=FileAttr_!==undefined?FileAttr_:0;this.Forkattr=Forkattr_!==undefined?Forkattr_:0;});�DX.init([["bitmapCount","bitmapCount","syscall",$Uint16,""],["_$1","_","syscall",$Uint16,""],["CommonAttr","CommonAttr","",$Uint32,""],["VolAttr","VolAttr","",$Uint32,""],["DirAttr","DirAttr","",$Uint32,""],["FileAttr","FileAttr","",$Uint32,""],["Forkattr","Forkattr","",$Uint32,""]]);0
attrList0  0�� 0EL�^EL=$pkg.mmapper=$newType(0,"Struct","syscall.mmapper","mmapper","syscall",function(Mutex_,active_,mmap_,munmap_){this.$val=this;this.Mutex=Mutex_!==undefined?Mutex_:new C.Mutex.Ptr();this.active=active_!==undefined?active_:false;this.mmap=mmap_!==undefined?mmap_:$throwNilPointerError;this.munmap=munmap_!==undefined?munmap_:$throwNilPointerError;});�Z($ptrType(EL)).methods=[["Lock","Lock","",$funcType([],[],false),0],["Mmap","Mmap","",$funcType([$Int,$Int64,$Int,$Int,$Int],[($sliceType($Uint8)),$error],false),-1],["Munmap","Munmap","",$funcType([($sliceType($Uint8))],[$error],false),-1],["Unlock","Unlock","",$funcType([],[],false),0]];EL.init([["Mutex","","",C.Mutex,""],["active","active","syscall",($mapType(($ptrType($Uint8)),($sliceType($Uint8)))),""],["mmap","mmap","syscall",($funcType([$Uintptr,$Uintptr,$Int,$Int,$Int,$Int64],[$Uintptr,$error],false)),""],["munmap","munmap","syscall",($funcType([$Uintptr,$Uintptr],[$error],false)),""]]);0	mmapper0
sync:Mutex 0�� 0EMKEM=$pkg.Errno=$newType(4,"Uintptr","syscall.Errno","Errno","syscall",null);�zEM.methods=[["Error","Error","",$funcType([],[$String],false),-1],["Temporary","Temporary","",$funcType([],[$Bool],false),-1],["Timeout","Timeout","",$funcType([],[$Bool],false),-1]];($ptrType(EM)).methods=[["Error","Error","",$funcType([],[$String],false),-1],["Temporary","Temporary","",$funcType([],[$Bool],false),-1],["Timeout","Timeout","",$funcType([],[$Bool],false),-1]];0Errno0  0�^ 0ENJEN=$pkg.Signal=$newType(4,"Int","syscall.Signal","Signal","syscall",null);��EN.methods=[["Signal","Signal","",$funcType([],[],false),-1],["String","String","",$funcType([],[$String],false),-1]];($ptrType(EN)).methods=[["Signal","Signal","",$funcType([],[],false),-1],["String","String","",$funcType([],[$String],false),-1]];0Signal0  0�� 0EQVEQ=$pkg.Sockaddr=$newType(8,"Interface","syscall.Sockaddr","Sockaddr","syscall",null);\EQ.init([["sockaddr","sockaddr","syscall",$funcType([],[$UnsafePointer,KY,$error],false)]]);0
Sockaddr0syscall:_Socklen 0�H 0ER�ER=$pkg.SockaddrInet4=$newType(0,"Struct","syscall.SockaddrInet4","SockaddrInet4","syscall",function(Port_,Addr_,raw_){this.$val=this;this.Port=Port_!==undefined?Port_:0;this.Addr=Addr_!==undefined?Addr_:($arrayType($Uint8,4)).zero();this.raw=raw_!==undefined?raw_:new KS.Ptr();});��($ptrType(ER)).methods=[["sockaddr","sockaddr","syscall",$funcType([],[$UnsafePointer,KY,$error],false),-1]];ER.init([["Port","Port","",$Int,""],["Addr","Addr","",($arrayType($Uint8,4)),""],["raw","raw","syscall",KS,""]]);0
_C_short0  0g 0KALKA=$pkg._C_int=$newType(4,"Int32","syscall._C_int","_C_int","syscall",null); 0_C_int0  0k 0KBOKB=$pkg._C_long=$newType(8,"Int64","syscall._C_long","_C_long","syscall",null); 0	_C_long0  0 0KC^KC=$pkg._C_long_long=$newType(8,"Int64","syscall._C_long_long","_C_long_long","syscall",null); 0_C_long_long0  0�� 0KD��KD=$pkg.Timespec=$newType(0,"Struct","syscall.Timespec","Timespec","syscall",function(Sec_,Nsec_){this.$val=this;this.Sec=Sec_!==undefined?Sec_:new $Int64(0,0);this.Nsec=Nsec_!==undefined?Nsec_:new $Int64(0,0);});��($ptrType(KD)).methods=[["Nano","Nano","",$funcType([],[$Int64],false),-1],["Unix","Unix","",$funcType([],[$Int64,$Int64],false),-1]];KD.init([["Sec","Sec","",$Int64,""],["Nsec","Nsec","",$Int64,""]]);0
Timespec0  0�> 0KE�KE=$pkg.Timeval=$newType(0,"Struct","syscall.Timeval","Timeval","syscall",function(Sec_,Usec_,Pad_cgo_0_){this.$val=this;this.Sec=Sec_!==undefined?Sec_:new $Int64(0,0);this.Usec=Usec_!==undefined?Usec_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,4)).zero();});� ($ptrType(KE)).methods=[["Nano","Nano","",$funcType([],[$Int64],false),-1],["Unix","Unix","",$funcType([],[$Int64,$Int64],false),-1]];KE.init([["Sec","Sec","",$Int64,""],["Usec","Usec","",$Int32,""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,4)),""]]);0	Timeval0  0� 0KF��KF=$pkg.Timeval32=$newType(0,"Struct","syscall.Timeval32","Timeval32","syscall",function(Sec_,Usec_){this.$val=this;this.Sec=Sec_!==undefined?Sec_:0;this.Usec=Usec_!==undefined?Usec_:0;});CKF.init([["Sec","Sec","",$Int32,""],["Usec","Usec","",$Int32,""]]);0	Timeval320  0�� 0KG�QKG=$pkg.Rusage=$newType(0,"Struct","syscall.Rusage","Rusage","syscall",function(Utime_,Stime_,Maxrss_,Ixrss_,Idrss_,Isrss_,Minflt_,Majflt_,Nswap_,Inblock_,Oublock_,Msgsnd_,Msgrcv_,Nsignals_,Nvcsw_,Nivcsw_){this.$val=this;this.Utime=Utime_!==undefined?Utime_:new KE.Ptr();this.Stime=Stime_!==undefined?Stime_:new KE.Ptr();this.Maxrss=Maxrss_!==undefined?Maxrss_:new $Int64(0,0);this.Ixrss=Ixrss_!==undefined?Ixrss_:new $Int64(0,0);this.Idrss=Idrss_!==undefined?Idrss_:new $Int64(0,0);this.Isrss=Isrss_!==undefined?Isrss_:new $Int64(0,0);this.Minflt=Minflt_!==undefined?Minflt_:new $Int64(0,0);this.Majflt=Majflt_!==undefined?Majflt_:new $Int64(0,0);this.Nswap=Nswap_!==undefined?Nswap_:new $Int64(0,0);this.Inblock=Inblock_!==undefined?Inblock_:new $Int64(0,0);this.Oublock=Oublock_!==undefined?Oublock_:new $Int64(0,0);this.Msgsnd=Msgsnd_!==undefined?Msgsnd_:new $Int64(0,0);this.Msgrcv=Msgrcv_!==undefined?Msgrcv_:new $Int64(0,0);this.Nsignals=Nsignals_!==undefined?Nsignals_:new $Int64(0,0);this.Nvcsw=Nvcsw_!==undefined?Nvcsw_:new $Int64(0,0);this.Nivcsw=Nivcsw_!==undefined?Nivcsw_:new $Int64(0,0);});�
Statfs_t0syscall:Fsid 0� 0KL�XKL=$pkg.Flock_t=$newType(0,"Struct","syscall.Flock_t","Flock_t","syscall",function(Start_,Len_,Pid_,Type_,Whence_){this.$val=this;this.Start=Start_!==undefined?Start_:new $Int64(0,0);this.Len=Len_!==undefined?Len_:new $Int64(0,0);this.Pid=Pid_!==undefined?Pid_:0;this.Type=Type_!==undefined?Type_:0;this.Whence=Whence_!==undefined?Whence_:0;});��KL.init([["Start","Start","",$Int64,""],["Len","Len","",$Int64,""],["Pid","Pid","",$Int32,""],["Type","Type","",$Int16,""],["Whence","Whence","",$Int16,""]]);0	Flock_t0  0�v 0KM��KM=$pkg.Fstore_t=$newType(0,"Struct","syscall.Fstore_t","Fstore_t","syscall",function(Flags_,Posmode_,Offset_,Length_,Bytesalloc_){this.$val=this;this.Flags=Flags_!==undefined?Flags_:0;this.Posmode=Posmode_!==undefined?Posmode_:0;this.Offset=Offset_!==undefined?Offset_:new $Int64(0,0);this.Length=Length_!==undefined?Length_:new $Int64(0,0);this.Bytesalloc=Bytesalloc_!==undefined?Bytesalloc_:new $Int64(0,0);});��KM.init([["Flags","Flags","",$Uint32,""],["Posmode","Posmode","",$Int32,""],["Offset","Offset","",$Int64,""],["Length","Length","",$Int64,""],["Bytesalloc","Bytesalloc","",$Int64,""]]);0
Fstore_t0  0�� 0KN�:KN=$pkg.Radvisory_t=$newType(0,"Struct","syscall.Radvisory_t","Radvisory_t","syscall",function(Offset_,Count_,Pad_cgo_0_){this.$val=this;this.Offset=Offset_!==undefined?Offset_:new $Int64(0,0);this.Count=Count_!==undefined?Count_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,4)).zero();});��KN.init([["Offset","Offset","",$Int64,""],["Count","Count","",$Int32,""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,4)),""]]);0
Log2phys_t0  0�� 0KQ��KQ=$pkg.Fsid=$newType(0,"Struct","syscall.Fsid","Fsid","syscall",function(Val_){this.$val=this;this.Val=Val_!==undefined?Val_:($arrayType($Int32,2)).zero();});6KQ.init([["Val","Val","",($arrayType($Int32,2)),""]]);0Fsid0  0�> 0KR�
_Socklen0  0�* 0KZ��KZ=$pkg.Linger=$newType(0,"Struct","syscall.Linger","Linger","syscall",function(Onoff_,Linger_){this.$val=this;this.Onoff=Onoff_!==undefined?Onoff_:0;this.Linger=Linger_!==undefined?Linger_:0;});KKZ.init([["Onoff","Onoff","",$Int32,""],["Linger","Linger","",$Int32,""]]);0Linger0  0�� 0LA��LA=$pkg.Iovec=$newType(0,"Struct","syscall.Iovec","Iovec","syscall",function(Base_,Len_){this.$val=this;this.Base=Base_!==undefined?Base_:($ptrType($Uint8)).nil;this.Len=Len_!==undefined?Len_:new $Uint64(0,0);});��($ptrType(LA)).methods=[["SetLen","SetLen","",$funcType([$Int],[],false),-1]];LA.init([["Base","Base","",($ptrType($Uint8)),""],["Len","Len","",$Uint64,""]]);0Iovec0  0�� 0LB�LB=$pkg.IPMreq=$newType(0,"Struct","syscall.IPMreq","IPMreq","syscall",function(Multiaddr_,Interface_){this.$val=this;this.Multiaddr=Multiaddr_!==undefined?Multiaddr_:($arrayType($Uint8,4)).zero();this.Interface=Interface_!==undefined?Interface_:($arrayType($Uint8,4)).zero();});yLB.init([["Multiaddr","Multiaddr","",($arrayType($Uint8,4)),""],["Interface","Interface","",($arrayType($Uint8,4)),""]]);0IPMreq0  0�� 0LC�LC=$pkg.IPv6Mreq=$newType(0,"Struct","syscall.IPv6Mreq","IPv6Mreq","syscall",function(Multiaddr_,Interface_){this.$val=this;this.Multiaddr=Multiaddr_!==undefined?Multiaddr_:($arrayType($Uint8,16)).zero();this.Interface=Interface_!==undefined?Interface_:0;});kLC.init([["Multiaddr","Multiaddr","",($arrayType($Uint8,16)),""],["Interface","Interface","",$Uint32,""]]);0
IPv6Mreq0  0�� 0LD��LD=$pkg.Msghdr=$newType(0,"Struct","syscall.Msghdr","Msghdr","syscall",function(Name_,Namelen_,Pad_cgo_0_,Iov_,Iovlen_,Pad_cgo_1_,Control_,Controllen_,Flags_){this.$val=this;this.Name=Name_!==undefined?Name_:($ptrType($Uint8)).nil;this.Namelen=Namelen_!==undefined?Namelen_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,4)).zero();this.Iov=Iov_!==undefined?Iov_:($ptrType(LA)).nil;this.Iovlen=Iovlen_!==undefined?Iovlen_:0;this.Pad_cgo_1=Pad_cgo_1_!==undefined?Pad_cgo_1_:($arrayType($Uint8,4)).zero();this.Control=Control_!==undefined?Control_:($ptrType($Uint8)).nil;this.Controllen=Controllen_!==undefined?Controllen_:0;this.Flags=Flags_!==undefined?Flags_:0;});��($ptrType(LD)).methods=[["SetControllen","SetControllen","",$funcType([$Int],[],false),-1]];LD.init([["Name","Name","",($ptrType($Uint8)),""],["Namelen","Namelen","",$Uint32,""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,4)),""],["Iov","Iov","",($ptrType(LA)),""],["Iovlen","Iovlen","",$Int32,""],["Pad_cgo_1","Pad_cgo_1","",($arrayType($Uint8,4)),""],["Control","Control","",($ptrType($Uint8)),""],["Controllen","Controllen","",$Uint32,""],["Flags","Flags","",$Int32,""]]);0Msghdr0
Kevent_t0  0�� 0LK��LK=$pkg.FdSet=$newType(0,"Struct","syscall.FdSet","FdSet","syscall",function(Bits_){this.$val=this;this.Bits=Bits_!==undefined?Bits_:($arrayType($Int32,32)).zero();});9LK.init([["Bits","Bits","",($arrayType($Int32,32)),""]]);0FdSet0  0�` 0LL�LL=$pkg.IfMsghdr=$newType(0,"Struct","syscall.IfMsghdr","IfMsghdr","syscall",function(Msglen_,Version_,Type_,Addrs_,Flags_,Index_,Pad_cgo_0_,Data_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Addrs=Addrs_!==undefined?Addrs_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Index=Index_!==undefined?Index_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,2)).zero();this.Data=Data_!==undefined?Data_:new LM.Ptr();});�LL.init([["Msglen","Msglen","",$Uint16,""],["Version","Version","",$Uint8,""],["Type","Type","",$Uint8,""],["Addrs","Addrs","",$Int32,""],["Flags","Flags","",$Int32,""],["Index","Index","",$Uint16,""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,2)),""],["Data","Data","",LM,""]]);0
IfMsghdr0syscall:IfData 0�$ 0LM��LM=$pkg.IfData=$newType(0,"Struct","syscall.IfData","IfData","syscall",function(Type_,Typelen_,Physical_,Addrlen_,Hdrlen_,Recvquota_,Xmitquota_,Unused1_,Mtu_,Metric_,Baudrate_,Ipackets_,Ierrors_,Opackets_,Oerrors_,Collisions_,Ibytes_,Obytes_,Imcasts_,Omcasts_,Iqdrops_,Noproto_,Recvtiming_,Xmittiming_,Lastchange_,Unused2_,Hwassist_,Reserved1_,Reserved2_){this.$val=this;this.Type=Type_!==undefined?Type_:0;this.Typelen=Typelen_!==undefined?Typelen_:0;this.Physical=Physical_!==undefined?Physical_:0;this.Addrlen=Addrlen_!==undefined?Addrlen_:0;this.Hdrlen=Hdrlen_!==undefined?Hdrlen_:0;this.Recvquota=Recvquota_!==undefined?Recvquota_:0;this.Xmitquota=Xmitquota_!==undefined?Xmitquota_:0;this.Unused1=Unused1_!==undefined?Unused1_:0;this.Mtu=Mtu_!==undefined?Mtu_:0;this.Metric=Metric_!==undefined?Metric_:0;this.Baudrate=Baudrate_!==undefined?Baudrate_:0;this.Ipackets=Ipackets_!==undefined?Ipackets_:0;this.Ierrors=Ierrors_!==undefined?Ierrors_:0;this.Opackets=Opackets_!==undefined?Opackets_:0;this.Oerrors=Oerrors_!==undefined?Oerrors_:0;this.Collisions=Collisions_!==undefined?Collisions_:0;this.Ibytes=Ibytes_!==undefined?Ibytes_:0;this.Obytes=Obytes_!==undefined?Obytes_:0;this.Imcasts=Imcasts_!==undefined?Imcasts_:0;this.Omcasts=Omcasts_!==undefined?Omcasts_:0;this.Iqdrops=Iqdrops_!==undefined?Iqdrops_:0;this.Noproto=Noproto_!==undefined?Noproto_:0;this.Recvtiming=Recvtiming_!==undefined?Recvtiming_:0;this.Xmittiming=Xmittiming_!==undefined?Xmittiming_:0;this.Lastchange=Lastchange_!==undefined?Lastchange_:new KF.Ptr();this.Unused2=Unused2_!==undefined?Unused2_:0;this.Hwassist=Hwassist_!==undefined?Hwassist_:0;this.Reserved1=Reserved1_!==undefined?Reserved1_:0;this.Reserved2=Reserved2_!==undefined?Reserved2_:0;});�.LM.init([["Type","Type","",$Uint8,""],["Typelen","Typelen","",$Uint8,""],["Physical","Physical","",$Uint8,""],["Addrlen","Addrlen","",$Uint8,""],["Hdrlen","Hdrlen","",$Uint8,""],["Recvquota","Recvquota","",$Uint8,""],["Xmitquota","Xmitquota","",$Uint8,""],["Unused1","Unused1","",$Uint8,""],["Mtu","Mtu","",$Uint32,""],["Metric","Metric","",$Uint32,""],["Baudrate","Baudrate","",$Uint32,""],["Ipackets","Ipackets","",$Uint32,""],["Ierrors","Ierrors","",$Uint32,""],["Opackets","Opackets","",$Uint32,""],["Oerrors","Oerrors","",$Uint32,""],["Collisions","Collisions","",$Uint32,""],["Ibytes","Ibytes","",$Uint32,""],["Obytes","Obytes","",$Uint32,""],["Imcasts","Imcasts","",$Uint32,""],["Omcasts","Omcasts","",$Uint32,""],["Iqdrops","Iqdrops","",$Uint32,""],["Noproto","Noproto","",$Uint32,""],["Recvtiming","Recvtiming","",$Uint32,""],["Xmittiming","Xmittiming","",$Uint32,""],["Lastchange","Lastchange","",KF,""],["Unused2","Unused2","",$Uint32,""],["Hwassist","Hwassist","",$Uint32,""],["Reserved1","Reserved1","",$Uint32,""],["Reserved2","Reserved2","",$Uint32,""]]);0IfData0syscall:Timeval32 0�Y 0LN�LN=$pkg.IfaMsghdr=$newType(0,"Struct","syscall.IfaMsghdr","IfaMsghdr","syscall",function(Msglen_,Version_,Type_,Addrs_,Flags_,Index_,Pad_cgo_0_,Metric_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Addrs=Addrs_!==undefined?Addrs_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Index=Index_!==undefined?Index_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,2)).zero();this.Metric=Metric_!==undefined?Metric_:0;});�#LN.init([["Msglen","Msglen","",$Uint16,""],["Version","Version","",$Uint8,""],["Type","Type","",$Uint8,""],["Addrs","Addrs","",$Int32,""],["Flags","Flags","",$Int32,""],["Index","Index","",$Uint16,""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,2)),""],["Metric","Metric","",$Int32,""]]);0	IfaMsghdr0  0�
 0LO��LO=$pkg.IfmaMsghdr=$newType(0,"Struct","syscall.IfmaMsghdr","IfmaMsghdr","syscall",function(Msglen_,Version_,Type_,Addrs_,Flags_,Index_,Pad_cgo_0_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Addrs=Addrs_!==undefined?Addrs_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Index=Index_!==undefined?Index_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,2)).zero();});�LO.init([["Msglen","Msglen","",$Uint16,""],["Version","Version","",$Uint8,""],["Type","Type","",$Uint8,""],["Addrs","Addrs","",$Int32,""],["Flags","Flags","",$Int32,""],["Index","Index","",$Uint16,""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,2)),""]]);0
IfmaMsghdr0  0�m 0LP�"LP=$pkg.IfmaMsghdr2=$newType(0,"Struct","syscall.IfmaMsghdr2","IfmaMsghdr2","syscall",function(Msglen_,Version_,Type_,Addrs_,Flags_,Index_,Pad_cgo_0_,Refcount_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Addrs=Addrs_!==undefined?Addrs_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Index=Index_!==undefined?Index_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,2)).zero();this.Refcount=Refcount_!==undefined?Refcount_:0;});�'LP.init([["Msglen","Msglen","",$Uint16,""],["Version","Version","",$Uint8,""],["Type","Type","",$Uint8,""],["Addrs","Addrs","",$Int32,""],["Flags","Flags","",$Int32,""],["Index","Index","",$Uint16,""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,2)),""],["Refcount","Refcount","",$Int32,""]]);0
RtMsghdr0syscall:RtMetrics 0�g 0LR��LR=$pkg.RtMetrics=$newType(0,"Struct","syscall.RtMetrics","RtMetrics","syscall",function(Locks_,Mtu_,Hopcount_,Expire_,Recvpipe_,Sendpipe_,Ssthresh_,Rtt_,Rttvar_,Pksent_,Filler_){this.$val=this;this.Locks=Locks_!==undefined?Locks_:0;this.Mtu=Mtu_!==undefined?Mtu_:0;this.Hopcount=Hopcount_!==undefined?Hopcount_:0;this.Expire=Expire_!==undefined?Expire_:0;this.Recvpipe=Recvpipe_!==undefined?Recvpipe_:0;this.Sendpipe=Sendpipe_!==undefined?Sendpipe_:0;this.Ssthresh=Ssthresh_!==undefined?Ssthresh_:0;this.Rtt=Rtt_!==undefined?Rtt_:0;this.Rttvar=Rttvar_!==undefined?Rttvar_:0;this.Pksent=Pksent_!==undefined?Pksent_:0;this.Filler=Filler_!==undefined?Filler_:($arrayType($Uint32,4)).zero();});��LR.init([["Locks","Locks","",$Uint32,""],["Mtu","Mtu","",$Uint32,""],["Hopcount","Hopcount","",$Uint32,""],["Expire","Expire","",$Int32,""],["Recvpipe","Recvpipe","",$Uint32,""],["Sendpipe","Sendpipe","",$Uint32,""],["Ssthresh","Ssthresh","",$Uint32,""],["Rtt","Rtt","",$Uint32,""],["Rttvar","Rttvar","",$Uint32,""],["Pksent","Pksent","",$Uint32,""],["Filler","Filler","",($arrayType($Uint32,4)),""]]);0	RtMetrics0  0�6 0LS��LS=$pkg.BpfVersion=$newType(0,"Struct","syscall.BpfVersion","BpfVersion","syscall",function(Major_,Minor_){this.$val=this;this.Major=Major_!==undefined?Major_:0;this.Minor=Minor_!==undefined?Minor_:0;});KLS.init([["Major","Major","",$Uint16,""],["Minor","Minor","",$Uint16,""]]);0
BpfVersion0  0� 0LT��LT=$pkg.BpfStat=$newType(0,"Struct","syscall.BpfStat","BpfStat","syscall",function(Recv_,Drop_){this.$val=this;this.Recv=Recv_!==undefined?Recv_:0;this.Drop=Drop_!==undefined?Drop_:0;});GLT.init([["Recv","Recv","",$Uint32,""],["Drop","Drop","",$Uint32,""]]);0	BpfStat0  0�� 0LU�.LU=$pkg.BpfProgram=$newType(0,"Struct","syscall.BpfProgram","BpfProgram","syscall",function(Len_,Pad_cgo_0_,Insns_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,4)).zero();this.Insns=Insns_!==undefined?Insns_:($ptrType(LV)).nil;});��LU.init([["Len","Len","",$Uint32,""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,4)),""],["Insns","Insns","",($ptrType(LV)),""]]);0
BpfProgram0syscall:BpfInsn 0�� 0LV��LV=$pkg.BpfInsn=$newType(0,"Struct","syscall.BpfInsn","BpfInsn","syscall",function(Code_,Jt_,Jf_,K_){this.$val=this;this.Code=Code_!==undefined?Code_:0;this.Jt=Jt_!==undefined?Jt_:0;this.Jf=Jf_!==undefined?Jf_:0;this.K=K_!==undefined?K_:0;});sLV.init([["Code","Code","",$Uint16,""],["Jt","Jt","",$Uint8,""],["Jf","Jf","",$Uint8,""],["K","K","",$Uint32,""]]);0	BpfInsn0  0�� 0LW��LW=$pkg.BpfHdr=$newType(0,"Struct","syscall.BpfHdr","BpfHdr","syscall",function(Tstamp_,Caplen_,Datalen_,Hdrlen_,Pad_cgo_0_){this.$val=this;this.Tstamp=Tstamp_!==undefined?Tstamp_:new KF.Ptr();this.Caplen=Caplen_!==undefined?Caplen_:0;this.Datalen=Datalen_!==undefined?Datalen_:0;this.Hdrlen=Hdrlen_!==undefined?Hdrlen_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,2)).zero();});��LW.init([["Tstamp","Tstamp","",KF,""],["Caplen","Caplen","",$Uint32,""],["Datalen","Datalen","",$Uint32,""],["Hdrlen","Hdrlen","",$Uint16,""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,2)),""]]);0BpfHdr0syscall:Timeval32 0�� 0LX�uLX=$pkg.Termios=$newType(0,"Struct","syscall.Termios","Termios","syscall",function(Iflag_,Oflag_,Cflag_,Lflag_,Cc_,Pad_cgo_0_,Ispeed_,Ospeed_){this.$val=this;this.Iflag=Iflag_!==undefined?Iflag_:new $Uint64(0,0);this.Oflag=Oflag_!==undefined?Oflag_:new $Uint64(0,0);this.Cflag=Cflag_!==undefined?Cflag_:new $Uint64(0,0);this.Lflag=Lflag_!==undefined?Lflag_:new $Uint64(0,0);this.Cc=Cc_!==undefined?Cc_:($arrayType($Uint8,20)).zero();this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:($arrayType($Uint8,4)).zero();this.Ispeed=Ispeed_!==undefined?Ispeed_:new $Uint64(0,0);this.Ospeed=Ospeed_!==undefined?Ospeed_:new $Uint64(0,0);});�0LX.init([["Iflag","Iflag","",$Uint64,""],["Oflag","Oflag","",$Uint64,""],["Cflag","Cflag","",$Uint64,""],["Lflag","Lflag","",$Uint64,""],["Cc","Cc","",($arrayType($Uint8,20)),""],["Pad_cgo_0","Pad_cgo_0","",($arrayType($Uint8,4)),""],["Ispeed","Ispeed","",$Uint64,""],["Ospeed","Ospeed","",$Uint64,""]]);0	Termios0  0" 0F  0warningPrinted0  0M 0G G=($sliceType($Uint8)).nil;0
lineBuffer0syscall:lineBuffer 0D 0L L=$ifaceNil;0
minusOne0  0L 0AN AN=new C.Once.Ptr();0	envOnce0	sync:Oncesyscall:envOnce 0R 0AO AO=new C.RWMutex.Ptr();0	envLock0sync:RWMutexsyscall:envLock 0. 0AP 	AP=false;0env0
ForkLock0 sync:RWMutexsyscall:ForkLock 0Y 0BH BH=new BG.Ptr();0zeroProcAttr0(syscall:ProcAttrsyscall:zeroProcAttr 0b 0BI BI=new AW.Ptr();0zeroSysProcAttr0.syscall:SysProcAttrsyscall:zeroSysProcAttr 0# 0BN  0fcntl64Syscall0  0. 0CQ CQ=0;0_zero0
    N=-1;0
minusOne0syscall:minusOne 07 0      $pkg.Stdin=0;0Stdin0
� 0  �
]    FN=$toNativeArray("String",["","operation not permitted","no such file or directory","no such process","interrupted system call","input/output error","device not configured","argument list too long","exec format error","bad file descriptor","no child processes","resource deadlock avoided","cannot allocate memory","permission denied","bad address","block device required","resource busy","file exists","cross-device link","operation not supported by device","not a directory","is a directory","invalid argument","too many open files in system","too many open files","inappropriate ioctl for device","text file busy","file too large","no space left on device","illegal seek","read-only file system","too many links","broken pipe","numerical argument out of domain","result too large","resource temporarily unavailable","operation now in progress","operation already in progress","socket operation on non-socket","destination address required","message too long","protocol wrong type for socket","protocol not available","protocol not supported","socket type not supported","operation not supported","protocol family not supported","address family not supported by protocol family","address already in use","can't assign requested address","network is down","network is unreachable","network dropped connection on reset","software caused connection abort","connection reset by peer","no buffer space available","socket is already connected","socket is not connected","can't send after socket shutdown","too many references: can't splice","operation timed out","connection refused","too many levels of symbolic links","file name too long","host is down","no route to host","directory not empty","too many processes","too many users","disc quota exceeded","stale NFS file handle","too many levels of remote in path","RPC struct is bad","RPC version wrong","RPC prog. not avail","program version wrong","bad procedure for program","no locks available","function not implemented","inappropriate file type or format","authentication error","need authenticator","device power is off","device error","value too large to be stored in data type","bad executable (or shared library)","bad CPU type in executable","shared library version mismatch","malformed Mach-o file","operation canceled","identifier removed","no message of desired type","illegal byte sequence","attribute not found","bad message","EMULTIHOP (Reserved)","no message available on STREAM","ENOLINK (Reserved)","no STREAM resources","not a STREAM","protocol error","STREAM ioctl timeout","operation not supported on socket","policy not found","state not recoverable","previous owner died"]);0errors0syscall:errors 0�| 0  �Q    FO=$toNativeArray("String",["","hangup","interrupt","quit","illegal instruction","trace/BPT trap","abort trap","EMT trap","floating point exception","killed","bus error","segmentation fault","bad system call","broken pipe","alarm clock","terminated","urgent I/O condition","suspended (signal)","suspended","continued","child exited","stopped (tty input)","stopped (tty output)","I/O possible","cputime limit exceeded","filesize limit exceeded","virtual timer expired","profiling timer expired","window size changes","information request","user defined signal 1","user defined signal 2"]);0	signals0syscall:signals 0B 0      BN=92;0fcntl64Syscall0syscall:fcntl64Syscall 0�� 0  7    DO=new EL.Ptr(new C.Mutex.Ptr(),new $Map(),JU,JV);0 0K
sync:Mutexsyscall:mappersyscall:mmapsyscall:mmappersyscall:munmap 0�syscall.printWarning0H��H=function(){   �    if(!F){   �console.log("warning: system calls not available, see https://github.com/gopherjs/gopherjs/blob/master/doc/syscalls.md");    }  1F=true;    }; 0printWarning0syscall:warningPrinted 0��syscall.printToConsole0I�UI=function(g){var h,i;  kh=$global.goPrintToConsole;  �    if(!(h===undefined)){  �h(g);  �return;    }  G=$appendSlice(G,g);  ,while(true){  4i=A.IndexByte(G,10);  ]    if(i===-1){  mbreak;    }  y$global.console.log($externalize($bytesToString($subslice(G,0,i)),$String));  G=$subslice(G,(i+1>>0));    }    }; 0printToConsole0%bytes:IndexBytesyscall:lineBuffer 0��syscall.init0J��J=function(){var g,h,i,j,k;  �g=$global.process;  �    if(!(g===undefined)){  �h=g.env;  �i=$global.Object.keys(h);  /AQ=($sliceType($String)).make($parseInt(i.length));  Y  ]j=0;while(j<$parseInt(i.length)){  �k=$internalize(i[j],$String);  �(j<0||j>=AQ.$length)?$throwRuntimeError("index out of range"):AQ.$array[AQ.$offset+j]=k+"="+$internalize(h[$externalize(k,$String)],$String);      {  {j=j+(1)>>0;}    }    };	    J();0 0syscall:envs 0��syscall.setenv_c0K��K=function(g,h){var i;  �i=$global.process;      if(!(i===undefined)){  ;i.env[$externalize(g,$String)]=$externalize(h,$String);    }    }; 0
setenv_c0  0�Rsyscall.syscall0O��O=function(g){var $deferred=[],$err=null,h;try{$deferFrames.push($deferred);  �$deferred.push([(function(){  �$recover();    }),[]]);      if(L===$ifaceNil){  -    if(M){  Hreturn $ifaceNil;    }  YM=true;  uh=$global.require;  �    if(h===undefined){  �$panic(new $String(""));    }  �L=h($externalize("syscall",$String));    }  �return L[$externalize(g,$String)];    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}}; 0	syscall03syscall:alreadyTriedToLoadsyscall:syscallModule 0��syscall.Syscall0P�)P=$pkg.Syscall=function(g,h,i,j){var k=0,l=0,m=0,n,o,p,q,r,s,t,u,v,w,x,y,z;  _  bn=O("Syscall");    if(!(n===$ifaceNil)){  �o=n(g,h,i,j);  �    p=(($parseInt(o[0])>>0)>>>0);q=(($parseInt(o[1])>>0)>>>0);r=(($parseInt(o[2])>>0)>>>0);k=p;l=q;m=r;return[k,l,m];    }      if((g===4)&&((h===1)||(h===2))){  4s=i;  Ut=($sliceType($Uint8)).make($parseInt(s.length));  }t.$array=s;  �I(t);  �    u=($parseInt(s.length)>>>0);v=0;w=0;k=u;l=v;m=w;return[k,l,m];    }  �H();  �    x=(N>>>0);y=0;z=13;k=x;l=y;m=z;return[k,l,m];    }; 0	Syscall0Qsyscall:minusOnesyscall:printToConsolesyscall:printWarningsyscall:syscall 0��syscall.Syscall60Q�}Q=$pkg.Syscall6=function(g,h,i,j,k,l,m){var n=0,o=0,p=0,q,r,s,t,u,v,w,x;  	x  	{q=O("Syscall6");    if(!(q===$ifaceNil)){  	�r=q(g,h,i,j,k,l,m);  	�    s=(($parseInt(r[0])>>0)>>>0);t=(($parseInt(r[1])>>0)>>>0);u=(($parseInt(r[2])>>0)>>>0);n=s;o=t;p=u;return[n,o,p];    }  
)    if(!((g===202))){  
wH();    }  
�    v=(N>>>0);w=0;x=13;n=v;o=w;p=x;return[n,o,p];    }; 0
Syscall609syscall:minusOnesyscall:printWarningsyscall:syscall 0��syscall.RawSyscall0R�QR=$pkg.RawSyscall=function(g,h,i,j){var k=0,l=0,m=0,n,o,p,q,r,s,t,u;  
�  
�n=O("Syscall");    if(!(n===$ifaceNil)){  #o=n(g,h,i,j);  E    p=(($parseInt(o[0])>>0)>>>0);q=(($parseInt(o[1])>>0)>>>0);r=(($parseInt(o[2])>>0)>>>0);k=p;l=q;m=r;return[k,l,m];    }  �H();  �    s=(N>>>0);t=0;u=13;k=s;l=t;m=u;return[k,l,m];    }; 0
RawSyscall09syscall:minusOnesyscall:printWarningsyscall:syscall 0��syscall.RawSyscall60S�_S=$pkg.RawSyscall6=function(g,h,i,j,k,l,m){var n=0,o=0,p=0,q,r,s,t,u,v,w,x;  +  .q=O("Syscall6");    if(!(q===$ifaceNil)){  Ur=q(g,h,i,j,k,l,m);  �    s=(($parseInt(r[0])>>0)>>>0);t=(($parseInt(r[1])>>0)>>>0);u=(($parseInt(r[2])>>0)>>>0);n=s;o=t;p=u;return[n,o,p];    }  �H();  �    v=(N>>>0);w=0;x=13;n=v;o=w;p=x;return[n,o,p];    }; 0
FlushBpf0 
BpfTimeout01
BpfStats01syscall:BpfStat
Clearenv0Nsyscall:copyenvsyscall:envsyscall:envLocksyscall:envOncesyscall:envs 0��syscall.Environ0AV�tAV=$pkg.Environ=function(){var $deferred=[],$err=null,g;try{$deferFrames.push($deferred);  %%AN.Do(AR);  %:AO.RLock();  %K$deferred.push([$methodVal(AO,"RUnlock"),[]]);  %dg=($sliceType($String)).make(AQ.$length);  %�$copySlice(g,AQ);  %�return g;    }catch(err){$err=err;return($sliceType($String)).nil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}}; 0	Environ0Asyscall:copyenvsyscall:envLocksyscall:envOncesyscall:envs 0��syscall.runtime_BeforeFork0AXVAX=function(){$panic("Native function not implemented: syscall.runtime_BeforeFork");}; 0runtime_BeforeFork0  0��syscall.runtime_AfterFork0AYUAY=function(){$panic("Native function not implemented: syscall.runtime_AfterFork");}; 0runtime_AfterFork0  0�Wsyscall.forkAndExecInChild0AZ��AZ=function(g,h,i,j,k,l,m,n){var $this=this,$args=arguments,o=0,p=0,$s=0,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az;while(true){switch($s){case 0:  +�  +�q=0;r=0;s=q;t=r;  +�u=0;  +�v=0;  +�w=0;  ,�x=($sliceType($Int)).make(l.Files.$length);  ,�v=l.Files.$length;  ,�y=l.Files;z=0;while(z<y.$length){aa=z;ab=((z<0||z>=y.$length)?$throwRuntimeError("index out of range"):y.$array[y.$offset+z]);  ,�    if(v<(ab>>0)){  -v=(ab>>0);    }  --(aa<0||aa>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+aa]=(ab>>0);    z++;}  -B  -Bv=v+(1)>>0;  -Mac=true;  -�AX();  -�ad=R(2,0,0,0);s=ad[0];t=ad[1];u=ad[2];  .	    if(!((u===0))){  .AY();  .0    ae=0;af=u;o=ae;p=af;return[o,p];    }  .�    if(ac&&(t===1)){  .�s=0;    }  .�    if(!((s===0))){  /AY();  /0    ag=(s>>0);ah=0;o=ag;p=ah;return[o,p];    }  /�    if(m.Ptrace){}else{$s=2;continue;}  /�ai=R(26,0,0,0);u=ai[2];  /�    if(!((u===0))){}else{$s=3;continue;}  /�$s=1;continue;    case 3:    case 2:  0    if(m.Setsid){}else{$s=4;continue;}  0.aj=R(147,0,0,0);u=aj[2];  0]    if(!((u===0))){}else{$s=5;continue;}  0o$s=1;continue;    case 5:    case 4:  0�    if(m.Setpgid){}else{$s=6;continue;}  0�ak=R(82,0,0,0);u=ak[2];  0�    if(!((u===0))){}else{$s=7;continue;}  0�$s=1;continue;    case 7:    case 6:  1    if(!($pointerIsEqual(j,($ptrType($Uint8)).nil))){}else{$s=8;continue;}  1,al=R(61,j,0,0);u=al[2];  1y    if(!((u===0))){}else{$s=9;continue;}  1�$s=1;continue;    case 9:    case 8:  1�  1�am=m.Credential;    if(!(am===($ptrType(BF)).nil)){}else{$s=10;continue;}  1�an=(am.Groups.$length>>>0);  2
ao=0;  2!    if(an>0){  25ao=$sliceToArray(am.Groups);    }  2map=R(80,an,ao,0);u=ap[2];  2�    if(!((u===0))){}else{$s=11;continue;}  2�$s=1;continue;    case 11:  2�aq=R(181,(am.Gid>>>0),0,0);u=aq[2];  3    if(!((u===0))){}else{$s=12;continue;}  3#$s=1;continue;    case 12:  39ar=R(23,(am.Uid>>>0),0,0);u=ar[2];  3x    if(!((u===0))){}else{$s=13;continue;}  3�$s=1;continue;    case 13:    case 10:  3�    if(!($pointerIsEqual(k,($ptrType($Uint8)).nil))){}else{$s=14;continue;}  3�as=R(12,k,0,0);u=as[2];  4    if(!((u===0))){}else{$s=15;continue;}  4$s=1;continue;    case 15:    case 14:  4�    if(n<v){}else{$s=16;continue;}  4�at=R(90,(n>>>0),(v>>>0),0);u=at[2];  5    if(!((u===0))){}else{$s=17;continue;}  5$s=1;continue;    case 17:  5.R(92,(v>>>0),2,1);  5ln=v;  5|  5|v=v+(1)>>0;    case 16:  5�  5�w=0;case 18:if(!(w<x.$length)){$s=19;continue;}  5�    if(((w<0||w>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+w])>=0&&((w<0||w>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+w])<w){}else{$s=20;continue;}  5�au=R(90,(((w<0||w>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+w])>>>0),(v>>>0),0);u=au[2];  6    if(!((u===0))){}else{$s=21;continue;}  6*$s=1;continue;    case 21:  6BR(92,(v>>>0),2,1);  6�(w<0||w>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+w]=v;  6�  6�v=v+(1)>>0;  6�    if(v===n){  6�  6�v=v+(1)>>0;    }    case 20:      5�  5�w=w+(1)>>0;$s=18;continue;case 19:  7  7w=0;case 22:if(!(w<x.$length)){$s=23;continue;}  7(    if(((w<0||w>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+w])===-1){  7<R(6,(w>>>0),0,0);  7g  7   7 w=w+(1)>>0;$s=22;continue;    }  7v    if(((w<0||w>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+w])===w){}else{$s=24;continue;}  7�av=R(92,(((w<0||w>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+w])>>>0),2,0);u=av[2];  8/    if(!((u===0))){}else{$s=25;continue;}  8B$s=1;continue;    case 25:  8Z  7   7 w=w+(1)>>0;$s=22;continue;    case 24:  8�aw=R(90,(((w<0||w>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+w])>>>0),(w>>>0),0);u=aw[2];  8�    if(!((u===0))){}else{$s=26;continue;}  9$s=1;continue;    case 26:      7   7 w=w+(1)>>0;$s=22;continue;case 23:  9�  9�w=x.$length;while(w<3){  :R(6,(w>>>0),0,0);      :  :w=w+(1)>>0;}  :\    if(m.Noctty){}else{$s=27;continue;}  :nax=R(54,0,536900721,0);u=ax[2];  :�    if(!((u===0))){}else{$s=28;continue;}  :�$s=1;continue;    case 28:    case 27:  :�    if(m.Setctty){}else{$s=29;continue;}  ;ay=R(54,0,536900705,0);u=ay[2];  ;@    if(!((u===0))){}else{$s=30;continue;}  ;R$s=1;continue;    case 30:    case 29:  ;}az=R(59,g,$sliceToArray(h),$sliceToArray(i));u=az[2];  <  <7case 1:R(4,(n>>>0),new($ptrType(EM))(function(){return u;},function($v){u=$v;}),4);  <�while(true){  <�R(1,253,0,0);    }    case-1:}return;}}; 0forkAndExecInChild0nsyscall:Credential
�syscall.forkExec0BJ�	bBJ=function(g,h,i){var $this=this,$args=arguments,j=0,k=$ifaceNil,$s=0,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au;while(true){switch($s){case 0:  O-  O1l=($arrayType($Int,2)).zero();$copy(l,($arrayType($Int,2)).zero(),($arrayType($Int,2)));  O;  O?m=0;  OF  OJn=0;  OV  OZo=0;  Oo    if(i===($ptrType(BG)).nil){  O�i=BH;    }  O�p=i.Sys;  O�    if(p===($ptrType(AW)).nil){  O�p=BI;    }  O�l[0]=-1;  O�l[1]=-1;  P
forkExec0�4syscall:BytePtrFromString
ForkExec0syscall:forkExec 0��syscall.StartProcess0BL��BL=$pkg.StartProcess=function(g,h,i){var j=0,k=0,l=$ifaceNil,m,n,o,p;  W�m=BJ(g,h,i);j=m[0];l=m[1];  X    n=j;o=0;p=l;j=n;k=o;l=p;return[j,k,l];    }; 0StartProcess0syscall:forkExec 0�Tsyscall.Exec0BM��BM=$pkg.Exec=function(g,h,i){var j=$ifaceNil,k,l,m,n,o,p,q,r;  X�k=T(g);l=k[0];j=k[1];  X�    if(!($interfaceIsEqual(j,$ifaceNil))){  X�    j=j;return j;    }  X�m=BC(h);n=m[0];j=m[1];  X�    if(!($interfaceIsEqual(j,$ifaceNil))){  Y    j=j;return j;    }  Yo=BC(i);p=o[0];j=o[1];  Y?    if(!($interfaceIsEqual(j,$ifaceNil))){  YQ    j=j;return j;    }  Y`q=R(59,l,$sliceToArray(n),$sliceToArray(p));r=q[2];  Y�    j=new EM(r);return j;    }; 0Exec0[syscall:BytePtrFromString
FcntlFlock08
rsaAlignOf0  0�$syscall.RouteRIB0BU��BU=$pkg.RouteRIB=function(g,h){var i,j,k,l,m;  b1i=new($sliceType(KA))([4,17,0,0,(g>>0),(h>>0)]);  b�j=0;  b�  b�k=GH(i,($ptrType($Uint8)).nil,new($ptrType($Uintptr))(function(){return j;},function($v){j=$v;}),($ptrType($Uint8)).nil,0);    if(!($interfaceIsEqual(k,$ifaceNil))){  b�return[($sliceType($Uint8)).nil,k];    }  b�    if(j===0){  b�return[($sliceType($Uint8)).nil,$ifaceNil];    }  c	l=($sliceType($Uint8)).make(j);  c!  c$m=GH(i,new($ptrType($Uint8))(function(){return((0<0||0>=this.$target.$length)?$throwRuntimeError("index out of range"):this.$target.$array[this.$target.$offset+0]);},function($v){(0<0||0>=this.$target.$length)?$throwRuntimeError("index out of range"):this.$target.$array[this.$target.$offset+0]=$v;},l),new($ptrType($Uintptr))(function(){return j;},function($v){j=$v;}),($ptrType($Uint8)).nil,0);    if(!($interfaceIsEqual(m,$ifaceNil))){  c\return[($sliceType($Uint8)).nil,m];    }  cpreturn[$subslice(l,0,j),$ifaceNil];    }; 0
RouteRIB0 syscall:_C_intsyscall:sysctl 0�� (*syscall.RouteMessage).sockaddr0 ��BX.Ptr.prototype.sockaddr=function(){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq;  eHg=this;  er  ezh=0;  e�i=($arrayType(EQ,4)).zero();$copy(i,($arrayType(EQ,4)).zero(),($arrayType(EQ,4)));  e�j=g.Data;  e�  e�k=0;while(k<8){  e�    if(((g.Header.Addrs&15)&(((l=k,l<32?(1<<l):0)>>0)))===0){  e�  e�  e�k=k+(1)>>>0;continue;    }  fp=(m=$sliceToArray(j),n=new KW.Ptr(),o=new DataView(m.buffer,m.byteOffset),n.Len=o.getUint8(0,true),n.Family=o.getUint8(1,true),n.Data=new($nativeArray("Int8"))(m.buffer,$min(m.byteOffset+2,m.buffer.byteLength)),n);  f;q=k;  fHif(q===0||q===1){  fhv=new Uint8Array(16);r=CW((s=v,t=new KX.Ptr(),u=new DataView(s.buffer,s.byteOffset),t.Addr.Len=u.getUint8(0,true),t.Addr.Family=u.getUint8(1,true),t.Addr.Data=new($nativeArray("Int8"))(s.buffer,$min(s.byteOffset+2,s.buffer.byteLength)),t.Pad=new($nativeArray("Int8"))(s.buffer,$min(s.byteOffset+16,s.buffer.byteLength)),t));y=r[0];z=r[1];w=p,x=new DataView(v.buffer,v.byteOffset),w.Len=x.getUint8(0,true),w.Family=x.getUint8(1,true),w.Data=new($nativeArray("Int8"))(v.buffer,$min(v.byteOffset+2,v.buffer.byteLength));  f�    if(!($interfaceIsEqual(z,$ifaceNil))){  f�return($sliceType(EQ)).nil;    }  f�    if(k===0){  f�h=(p.Family>>0);    }  g(k<0||k>=i.length)?$throwRuntimeError("index out of range"):i[k]=y;      g}else if(q===2||q===3){  g9aa=h;  gHif(aa===2){  gZae=(ab=$sliceToArray(j),ac=new KS.Ptr(),ad=new DataView(ab.buffer,ab.byteOffset),ac.Len=ad.getUint8(0,true),ac.Family=ad.getUint8(1,true),ac.Port=ad.getUint16(2,true),ac.Addr=new($nativeArray("Uint8"))(ab.buffer,$min(ab.byteOffset+4,ab.buffer.byteLength)),ac.Zero=new($nativeArray("Int8"))(ab.buffer,$min(ab.byteOffset+8,ab.buffer.byteLength)),ac);  g�af=new ER.Ptr();  g�  g�ag=0;while(ae.Len>0&&ag<((ae.Len>>0)-4>>0)){  h(ai=af.Addr,(ag<0||ag>=ai.length)?$throwRuntimeError("index out of range"):ai[ag]=(ah=ae.Addr,((ag<0||ag>=ah.length)?$throwRuntimeError("index out of range"):ah[ag])));      g�  g�ag=ag+(1)>>0;}  h,(k<0||k>=i.length)?$throwRuntimeError("index out of range"):i[k]=af;      h;}else if(aa===30){  hNam=(aj=$sliceToArray(j),ak=new KT.Ptr(),al=new DataView(aj.buffer,aj.byteOffset),ak.Len=al.getUint8(0,true),ak.Family=al.getUint8(1,true),ak.Port=al.getUint16(2,true),ak.Flowinfo=al.getUint32(4,true),ak.Addr=new($nativeArray("Uint8"))(aj.buffer,$min(aj.byteOffset+8,aj.buffer.byteLength)),ak.Scope_id=al.getUint32(24,true),ak);  h�an=new ES.Ptr();  h�  h�ao=0;while(am.Len>0&&ao<((am.Len>>0)-8>>0)){  h�(aq=an.Addr,(ao<0||ao>=aq.length)?$throwRuntimeError("index out of range"):aq[ao]=(ap=am.Addr,((ao<0||ao>=ap.length)?$throwRuntimeError("index out of range"):ap[ao])));      h�  h�ao=ao+(1)>>0;}  i (k<0||k>=i.length)?$throwRuntimeError("index out of range"):i[k]=an;    }    }  i7j=$subslice(j,BT((p.Len>>0)));      e�  e�k=k+(1)>>>0;}  i\return new($sliceType(EQ))(i);    };BX.prototype.sockaddr=function(){return this.$val.sockaddr();}; 0RouteMessagesockaddr0��syscall:RawSockaddrsyscall:RawSockaddrAnysyscall:RawSockaddrInet4syscall:RawSockaddrInet6syscall:RouteMessagesyscall:Sockaddrsyscall:SockaddrInet4syscall:SockaddrInet6syscall:anyToSockaddrsyscall:rsaAlignOf 0�z$(*syscall.InterfaceMessage).sockaddr0 ��BY.Ptr.prototype.sockaddr=function(){var g=($sliceType(EQ)).nil,h,i,j,k,l,m,n;  jh=this;  jC    if((h.Header.Addrs&16)===0){  jf    g=($sliceType(EQ)).nil;return g;    }  jui=CW((j=$sliceToArray(h.Data),k=new KX.Ptr(),l=new DataView(j.buffer,j.byteOffset),k.Addr.Len=l.getUint8(0,true),k.Addr.Family=l.getUint8(1,true),k.Addr.Data=new($nativeArray("Int8"))(j.buffer,$min(j.byteOffset+2,j.buffer.byteLength)),k.Pad=new($nativeArray("Int8"))(j.buffer,$min(j.byteOffset+16,j.buffer.byteLength)),k));m=i[0];n=i[1];  j�    if(!($interfaceIsEqual(n,$ifaceNil))){  j�    g=($sliceType(EQ)).nil;return g;    }  j�    g=$append(g,m);return g;    };BY.prototype.sockaddr=function(){return this.$val.sockaddr();}; 0InterfaceMessagesockaddr0[syscall:InterfaceMessagesyscall:RawSockaddrAnysyscall:Sockaddrsyscall:anyToSockaddr 0�
{((*syscall.InterfaceAddrMessage).sockaddr0 �	�BZ.Ptr.prototype.sockaddr=function(){var g=($sliceType(EQ)).nil,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak;  k�h=this;  l    if((h.Header.Addrs&164)===0){  l>    g=($sliceType(EQ)).nil;return g;    }  lMi=h.Data;  m�j=0;  m�  m�k=0;while(k<8){  m�    if(((h.Header.Addrs&164)&(((l=k,l<32?(1<<l):0)>>0)))===0){  m�  m�  m�k=k+(1)>>>0;continue;    }  n
anyMessagetoRoutingMessage0��syscall:IfMsghdrsyscall:IfaMsghdrsyscall:IfmaMsghdr2syscall:InterfaceAddrMessagesyscall:InterfaceMessage%syscall:InterfaceMulticastAddrMessagesyscall:RouteMessagesyscall:RtMsghdrsyscall:anyMessage 0�k1(*syscall.InterfaceMulticastAddrMessage).sockaddr0 �nCC.Ptr.prototype.sockaddr=function(){var g=($sliceType(EQ)).nil,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;  y�h=this;  z0    if((h.Header.Addrs&50)===0){  zW    g=($sliceType(EQ)).nil;return g;    }  zfi=h.Data;  zv  zzj=0;while(j<8){  z�    if(((h.Header.Addrs&50)&(((k=j,k<32?(1<<k):0)>>0)))===0){  z�  z�  z�j=j+(1)>>>0;continue;    }  z�o=(l=$sliceToArray(i),m=new KW.Ptr(),n=new DataView(l.buffer,l.byteOffset),m.Len=n.getUint8(0,true),m.Family=n.getUint8(1,true),m.Data=new($nativeArray("Int8"))(l.buffer,$min(l.byteOffset+2,l.buffer.byteLength)),m);  {p=j;  {if(p===5){  {*u=new Uint8Array(16);q=CW((r=u,s=new KX.Ptr(),t=new DataView(r.buffer,r.byteOffset),s.Addr.Len=t.getUint8(0,true),s.Addr.Family=t.getUint8(1,true),s.Addr.Data=new($nativeArray("Int8"))(r.buffer,$min(r.byteOffset+2,r.buffer.byteLength)),s.Pad=new($nativeArray("Int8"))(r.buffer,$min(r.byteOffset+16,r.buffer.byteLength)),s));x=q[0];y=q[1];v=o,w=new DataView(u.buffer,u.byteOffset),v.Len=w.getUint8(0,true),v.Family=w.getUint8(1,true),v.Data=new($nativeArray("Int8"))(u.buffer,$min(u.byteOffset+2,u.buffer.byteLength));  {l    if(!($interfaceIsEqual(y,$ifaceNil))){  {~    g=($sliceType(EQ)).nil;return g;    }  {�g=$append(g,x);    }  {�i=$subslice(i,BT((o.Len>>0)));      z�  z�j=j+(1)>>>0;}  |    g=g;return g;    };CC.prototype.sockaddr=function(){return this.$val.sockaddr();}; 0)InterfaceMulticastAddrMessagesockaddr0��%syscall:InterfaceMulticastAddrMessagesyscall:RawSockaddrsyscall:RawSockaddrAnysyscall:Sockaddrsyscall:anyToSockaddrsyscall:rsaAlignOf 0��syscall.cmsgAlignOf0CDfCD=function(g){var h;  }�h=8;  ~(  ~Mh=4;      ~\return(((g+h>>0)-1>>0))&(~((h-1>>0))>>0);    }; 0
cmsgData0syscall:cmsgAlignOf 0�b!syscall.ParseSocketControlMessage0CI��CI=$pkg.ParseSocketControlMessage=function(g){var h,i,j,k,l,m,n;  ��  ��h=($sliceType(CH)).nil;  ��i=0;  ��while((i+CE(0)>>0)<=g.$length){  �j=CJ($subslice(g,i));k=j[0];l=j[1];m=j[2];  �V    if(!($interfaceIsEqual(m,$ifaceNil))){  �ireturn[($sliceType(CH)).nil,m];    }  �n=new CH.Ptr($clone(k,LE),l);  ��h=$append(h,n);  ��i=i+(CD((k.Len>>0)))>>0;    }  ��return[h,$ifaceNil];    }; 0ParseSocketControlMessage0��syscall:CmsgLensyscall:Cmsghdrsyscall:SocketControlMessagesyscall:cmsgAlignOf)syscall:socketControlMessageHeaderAndData 0�)syscall.socketControlMessageHeaderAndData0CJ�nCJ=function(g){var h,i,j,k;  �Ok=(h=$sliceToArray(g),i=new LE.Ptr(),j=new DataView(h.buffer,h.byteOffset),i.Len=j.getUint32(0,true),i.Level=j.getInt32(4,true),i.Type=j.getInt32(8,true),i);  �w    if(k.Len<12||(k.Len>>0)>g.$length){  ��return[($ptrType(LE)).nil,($sliceType($Uint8)).nil,new EM(22)];    }  ��return[k,$subslice(g,CD(12),k.Len),$ifaceNil];    }; 0#!socketControlMessageHeaderAndData05syscall:Cmsghdr
UnixRights0Gsyscall:CmsgLensyscall:CmsgSpacesyscall:Cmsghdrsyscall:cmsgData 0��syscall.ParseUnixRights0CL�^CL=$pkg.ParseUnixRights=function(g){var h,i,j,k,l,m;  ��    if(!((g.Header.Level===65535))){  ��return[($sliceType($Int)).nil,new EM(22)];    }  ��    if(!((g.Header.Type===1))){  ��return[($sliceType($Int)).nil,new EM(22)];    }  �h=($sliceType($Int)).make((g.Data.$length>>2>>0));  �'  �+i=0;j=0;k=i;l=j;while(k<g.Data.$length){  �U(l<0||l>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+l]=((m=g.Data,((k<0||k>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+k]))>>0);  ��  ��l=l+(1)>>0;      �Jk=k+(4)>>0;}  ��return[h,$ifaceNil];    }; 0ParseUnixRights0
Timespec0syscall:Timespec 0�2(*syscall.Timeval).Unix0 ��KE.Ptr.prototype.Unix=function(){var g=new $Int64(0,0),h=new $Int64(0,0),i,j,k;  ��i=this;  ��    j=i.Sec;k=$mul64(new $Int64(0,i.Usec),new $Int64(0,1000));g=j;h=k;return[g,h];    };KE.prototype.Unix=function(){return this.$val.Unix();}; 0	Timeval0syscall:Timeval 0�"(*syscall.Timespec).Nano0 ��KD.Ptr.prototype.Nano=function(){var g,h,i;  ��g=this;  �return(h=$mul64(g.Sec,new $Int64(0,1000000000)),i=g.Nsec,new $Int64(h.$high+i.$high,h.$low+i.$low));    };KD.prototype.Nano=function(){return this.$val.Nano();}; 0
Timespec0syscall:Timespec 0�I(*syscall.Timeval).Nano0 �KE.Ptr.prototype.Nano=function(){var g,h,i;  �Pg=this;  �mreturn(h=$mul64(g.Sec,new $Int64(0,1000000000)),i=$mul64(new $Int64(0,g.Usec),new $Int64(0,1000)),new $Int64(h.$high+i.$high,h.$low+i.$low));    };KE.prototype.Nano=function(){return this.$val.Nano();}; 0	Timeval0syscall:Timeval 0�&syscall.Getgroups0CR��CR=$pkg.Getgroups=function(){var g=($sliceType($Int)).nil,h=$ifaceNil,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;  �_i=FP(0,($ptrType(KI)).nil);j=i[0];h=i[1];  �|    if(!($interfaceIsEqual(h,$ifaceNil))){  ��    k=($sliceType($Int)).nil;l=h;g=k;h=l;return[g,h];    }  ��    if(j===0){  ��    m=($sliceType($Int)).nil;n=$ifaceNil;g=m;h=n;return[g,h];    }  ��    if(j<0||j>1000){  �    o=($sliceType($Int)).nil;p=new EM(22);g=o;h=p;return[g,h];    }  �'q=($sliceType(KI)).make(j);  �?r=FP(j,new($ptrType(KI))(function(){return((0<0||0>=this.$target.$length)?$throwRuntimeError("index out of range"):this.$target.$array[this.$target.$offset+0]);},function($v){(0<0||0>=this.$target.$length)?$throwRuntimeError("index out of range"):this.$target.$array[this.$target.$offset+0]=$v;},q));j=r[0];h=r[1];  �]    if(!($interfaceIsEqual(h,$ifaceNil))){  �o    s=($sliceType($Int)).nil;t=h;g=s;h=t;return[g,h];    }  ��g=($sliceType($Int)).make(j);  ��u=$subslice(q,0,j);v=0;while(v<u.$length){w=v;x=((v<0||v>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+v]);  ��(w<0||w>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+w]=(x>>0);    v++;}  ��return[g,h];    }; 0	Getgroups02
ReadDirent0syscall:Getdirentries 0�(syscall.WaitStatus).Exited0 ��CU.prototype.Exited=function(){var g;  ��g=this.$val!==undefined?this.$val:this;  ��return((g&127)>>>0)===0;    };$ptrType(CU).prototype.Exited=function(){return new CU(this.$get()).Exited();}; 0
WaitStatus0syscall:WaitStatus 0�X(syscall.WaitStatus).ExitStatus0 �CU.prototype.ExitStatus=function(){var g;  ��g=this.$val!==undefined?this.$val:this;  �
    if(!((((g&127)>>>0)===0))){  �"return-1;    }  �0return((g>>>8>>>0)>>0);    };$ptrType(CU).prototype.ExitStatus=function(){return new CU(this.$get()).ExitStatus();}; 0
WaitStatus0syscall:WaitStatus 0�6(syscall.WaitStatus).Signaled0 ��CU.prototype.Signaled=function(){var g;  �Pg=this.$val!==undefined?this.$val:this;  �preturn!((((g&127)>>>0)===127))&&!((((g&127)>>>0)===0));    };$ptrType(CU).prototype.Signaled=function(){return new CU(this.$get()).Signaled();}; 0
WaitStatus0syscall:WaitStatus 0�R(syscall.WaitStatus).Signal0 �CU.prototype.Signal=function(){var g,h;  ��g=this.$val!==undefined?this.$val:this;  ��h=(((g&127)>>>0)>>0);  ��    if((h===127)||(h===0)){  ��return-1;    }  �return h;    };$ptrType(CU).prototype.Signal=function(){return new CU(this.$get()).Signal();}; 0
WaitStatus0syscall:WaitStatus 0�4(syscall.WaitStatus).CoreDump0 ��CU.prototype.CoreDump=function(){var g;  �g=this.$val!==undefined?this.$val:this;  �?return(new CU(g)).Signaled()&&!((((g&128)>>>0)===0));    };$ptrType(CU).prototype.CoreDump=function(){return new CU(this.$get()).CoreDump();}; 0
WaitStatus0syscall:WaitStatus 0�3(syscall.WaitStatus).Stopped0 ��CU.prototype.Stopped=function(){var g;  �kg=this.$val!==undefined?this.$val:this;  ��return(((g&127)>>>0)===127)&&!((((g>>>8>>>0)>>0)===17));    };$ptrType(CU).prototype.Stopped=function(){return new CU(this.$get()).Stopped();}; 0
WaitStatus0syscall:WaitStatus 0�8(syscall.WaitStatus).Continued0 ��CU.prototype.Continued=function(){var g;  ��g=this.$val!==undefined?this.$val:this;  ��return(((g&127)>>>0)===127)&&(((g>>>8>>>0)>>0)===17);    };$ptrType(CU).prototype.Continued=function(){return new CU(this.$get()).Continued();}; 0
WaitStatus0syscall:WaitStatus 0�\(syscall.WaitStatus).StopSignal0 �CU.prototype.StopSignal=function(){var g;  �-g=this.$val!==undefined?this.$val:this;  �R    if(!(new CU(g)).Stopped()){  �freturn-1;    }  �treturn((g>>>8>>>0)>>0)&255;    };$ptrType(CU).prototype.StopSignal=function(){return new CU(this.$get()).StopSignal();}; 0
WaitStatus0syscall:WaitStatus 0�(syscall.WaitStatus).TrapCause0 ��CU.prototype.TrapCause=function(){var g;  ��g=this.$val!==undefined?this.$val:this;  ��return-1;    };$ptrType(CU).prototype.TrapCause=function(){return new CU(this.$get()).TrapCause();}; 0
WaitStatus0syscall:WaitStatus 0�h
SendmsgN0B
UtimesNano0q
errors:Newsyscall:BytePtrFromString
sendfile0!
Syscall90  0��(*syscall.mmapper).Mmap0 �4EL.Ptr.prototype.Mmap=function(g,h,i,j,k){var l=($sliceType($Uint8)).nil,m=$ifaceNil,$deferred=[],$err=null,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac;try{$deferFrames.push($deferred); In=this; �    if(i<=0){ �    o=($sliceType($Uint8)).nil;p=new EM(22);l=o;m=p;return[l,m];    } �q=n.mmap(0,(i>>>0),j,k,g,h);r=q[0];s=q[1]; 
Recvfrom0Ssyscall:RawSockaddrAnysyscall:_Socklensyscall:anyToSockaddrsyscall:recvfrom 0�#syscall.Sendto0EZ��EZ=$pkg.Sendto=function(g,h,i,j){var k=$ifaceNil,l,m,n; �l=j.sockaddr();m=l[0];n=l[1];k=l[2]; �    if(!($interfaceIsEqual(k,$ifaceNil))){ �    k=k;return k;    }      k=GD(g,h,i,m,n);return k;    }; 0Sendto0"syscall:sendtosyscall:sockaddr 0��syscall.SetsockoptByte0FA��FA=$pkg.SetsockoptByte=function(g,h,i,j){var k=$ifaceNil; j    k=FX(g,h,i,new($ptrType($Uint8))(function(){return j;},function($v){j=$v;}),1);return k;    }; 0SetsockoptByte0syscall:setsockopt 0�syscall.SetsockoptInt0FB��FB=$pkg.SetsockoptInt=function(g,h,i,j){var k=$ifaceNil,l; � �l=(j>>0);     k=FX(g,h,i,new($ptrType($Int32))(function(){return l;},function($v){l=$v;}),4);return k;    }; 0
Socketpair0syscall:socketpair 0��syscall.Sendfile0FLwFL=$pkg.Sendfile=function(g,h,i,j){var k=0,l=$ifaceNil,m; #  #a    m=EJ(g,h,i,j);k=m[0];l=m[1];return[k,l];    }; 0
Sendfile0syscall:sendfile 0��syscall.getgroups0FP��FP=function(g,h){var i=0,j=$ifaceNil,k,l,m; �k=R(79,(g>>>0),h,0);l=k[0];m=k[2]; i=(l>>0); ,    if(!((m===0))){ ;j=new EM(m);    } Hreturn[i,j];    }; 0	getgroups0#
	    if(!((n===0))){ 
l=new EM(n);    } 
%return l;    }; 0
getsockopt0!
�m=Q(105,(g>>>0),(h>>>0),(i>>>0),j,k,0);n=m[2]; C    if(!((n===0))){ Rl=new EM(n);    } _return l;    }; 0
setsockopt0!
Shutdown0 
socketpair0$
recvfrom0!
l=new EM(o);    } return l;    }; 0sysctl0!
GI=function(g,h){var i=$ifaceNil,j,k,l,m; � �j=($ptrType($Uint8)).nil; �k=T(g);j=k[0];i=k[1]; �    if(!($interfaceIsEqual(i,$ifaceNil))){ �return i;    } �l=P(138,j,h,0);m=l[2]; T    if(!((m===0))){ ci=new EM(m);    } preturn i;    }; 0utimes0;syscall:BytePtrFromString
Fchflags0 
h=R(47,0,0,0);i=h[0]; 97g=(i>>0); 9Freturn g;    }; 0Getgid0syscall:RawSyscall 0�syscall.Getpgid0HP��HP=$pkg.Getpgid=function(g){var h=0,i=$ifaceNil,j,k,l; 9�j=R(151,(g>>>0),0,0);k=j[0];l=j[2]; 9�h=(k>>0); :    if(!((l===0))){ :i=new EM(l);    } :'return[h,i];    }; 0	Getpgid0#
Mlockall0 
Mprotect0 
IK=$pkg.Munlock=function(g){var h=$ifaceNil,i,j,k; N� N�i=0; N�    if(g.$length>0){ N�i=$sliceToArray(g);    }else{ Oi=new Uint8Array(0);    } O&j=P(204,i,(g.$length>>>0),0);k=j[2]; Oj    if(!((k===0))){ Oyh=new EM(k);    } O�return h;    }; 0	Munlock0 
Munlockall0 
Pathconf0;syscall:BytePtrFromString
Readlink0;syscall:BytePtrFromString
return h;    }; 0Setgid0#
Setlogin0;syscall:BytePtrFromString
Setregid0#
Setreuid0#
Truncate0;syscall:BytePtrFromString
Undelete0;syscall:BytePtrFromString
l=P(159,j,(h>>>0),0);m=l[2]; u]    if(!((m===0))){ uli=new EM(m);    } uyreturn i;    }; 0	Unmount0;syscall:BytePtrFromString
    if(!((k===0))){ yi=new EM(k);    } y&return i;    }; 0munmap0 
writelen0 
 �