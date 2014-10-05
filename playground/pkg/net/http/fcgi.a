0ÉLMnet/http/fcgiÇÿgpackage fcgi
import errors "errors"
import fmt "fmt"
import io "io"
import ioutil "io/ioutil"
import net "net"
import http "net/http"
import cgi "net/http/cgi"
import os "os"
import strings "strings"
import sync "sync"
import time "time"
import bufio "bufio"
import bytes "bytes"
import binary "encoding/binary"
func @"".Serve(@"".l @"net".Listener, @"".handler @"net/http".Handler) (? error)
type @"".beginRequest struct { @"".role uint16; @"".flags uint8; @"".reserved [5]uint8 }
func (? *@"".beginRequest) @"".read(@"".content []byte) (? error)
type @"".bufWriter struct { @"".closer @"io".Closer; ? *@"bufio".Writer }
func (? *@"".bufWriter) @"".Close() (? error)
type @"".child struct { @"".conn *@"".conn; @"".handler @"net/http".Handler; @"".mu @"sync".Mutex; @"".requests map[uint16]*@"".request }
func (? *@"".child) @"".handleRecord(@"".rec *@"".record) (? error)
func (? *@"".child) @"".serve() ()
func (? *@"".child) @"".serveRequest(@"".req *@"".request, @"".body @"io".ReadCloser) ()
type @"".conn struct { @"".mutex @"sync".Mutex; @"".rwc @"io".ReadWriteCloser; @"".buf @"bytes".Buffer; @"".h @"".header }
func (? *@"".conn) @"".Close() (? error)
func (? *@"".conn) @"".writeBeginRequest(@"".reqId uint16, @"".role uint16, @"".flags uint8) (? error)
func (? *@"".conn) @"".writeEndRequest(@"".reqId uint16, @"".appStatus int, @"".protocolStatus uint8) (? error)
func (? *@"".conn) @"".writePairs(@"".recType @"".recType, @"".reqId uint16, @"".pairs map[string]string) (? error)
func (? *@"".conn) @"".writeRecord(@"".recType @"".recType, @"".reqId uint16, @"".b []byte) (? error)
type @"".header struct { @"".Version uint8; @"".Type @"".recType; @"".Id uint16; @"".ContentLength uint16; @"".PaddingLength uint8; @"".Reserved uint8 }
func (? *@"".header) @"".init(@"".recType @"".recType, @"".reqId uint16, @"".contentLength int) ()
type @"".recType uint8
type @"".record struct { @"".h @"".header; @"".buf [65790]byte }
func (? *@"".record) @"".content() (? []byte)
func (? *@"".record) @"".read(@"".r @"io".Reader) (@"".err error)
type @"".request struct { @"".pw *@"io".PipeWriter; @"".reqId uint16; @"".params map[string]string; @"".buf [1024]byte; @"".rawParams []byte; @"".keepConn bool }
func (? *@"".request) @"".parseParams() ()
type @"".response struct { @"".req *@"".request; @"".header @"net/http".Header; @"".w *@"".bufWriter; @"".wroteHeader bool }
func (? *@"".response) @"".Close() (? error)
func (? *@"".response) @"".Flush() ()
func (? *@"".response) @"".Header() (? @"net/http".Header)
func (? *@"".response) @"".Write(@"".data []byte) (? int, ? error)
func (? *@"".response) @"".WriteHeader(@"".code int) ()
type @"".streamWriter struct { @"".c *@"".conn; @"".recType @"".recType; @"".reqId uint16 }
func (? *@"".streamWriter) @"".Close() (? error)
func (? *@"".streamWriter) @"".Write(@"".p []byte) (? int, ? error)
type @"net".Listener interface { @"net".Accept() (@"net".c @"net".Conn, @"net".err error); @"net".Addr() (? @"net".Addr); @"net".Close() (? error) }
type @"net/http".Handler interface { @"net/http".ServeHTTP(? @"net/http".ResponseWriter, ? *@"net/http".Request) () }
type @"io".Closer interface { @"io".Close() (? error) }
type @"bufio".Writer struct { @"bufio".err error; @"bufio".buf []byte; @"bufio".n int; @"bufio".wr @"io".Writer }
func (? *@"bufio".Writer) @"bufio".Available() (? int)
func (? *@"bufio".Writer) @"bufio".Buffered() (? int)
func (? *@"bufio".Writer) @"bufio".Flush() (? error)
func (? *@"bufio".Writer) @"bufio".ReadFrom(@"bufio".r @"io".Reader) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".Reset(@"bufio".w @"io".Writer) ()
func (? *@"bufio".Writer) @"bufio".Write(@"bufio".p []byte) (@"bufio".nn int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteByte(@"bufio".c byte) (? error)
func (? *@"bufio".Writer) @"bufio".WriteRune(@"bufio".r rune) (@"bufio".size int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteString(@"bufio".s string) (? int, ? error)
func (? *@"bufio".Writer) @"bufio".flush() (? error)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".ReadWriteCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"bytes".Buffer struct { @"bytes".buf []byte; @"bytes".off int; @"bytes".runeBytes [4]byte; @"bytes".bootstrap [64]byte; @"bytes".lastRead @"bytes".readOp }
func (? *@"bytes".Buffer) @"bytes".Bytes() (? []byte)
func (? *@"bytes".Buffer) @"bytes".Grow(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".Len() (? int)
func (? *@"bytes".Buffer) @"bytes".Next(@"bytes".n int) (? []byte)
func (? *@"bytes".Buffer) @"bytes".Read(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadByte() (@"bytes".c byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadBytes(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadFrom(@"bytes".r @"io".Reader) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadRune() (@"bytes".r rune, @"bytes".size int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadString(@"bytes".delim byte) (@"bytes".line string, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".Reset() ()
func (? *@"bytes".Buffer) @"bytes".String() (? string)
func (? *@"bytes".Buffer) @"bytes".Truncate(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".UnreadByte() (? error)
func (? *@"bytes".Buffer) @"bytes".UnreadRune() (? error)
func (? *@"bytes".Buffer) @"bytes".Write(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteByte(@"bytes".c byte) (? error)
func (? *@"bytes".Buffer) @"bytes".WriteRune(@"bytes".r rune) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteString(@"bytes".s string) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteTo(@"bytes".w @"io".Writer) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".grow(@"bytes".n int) (? int)
func (? *@"bytes".Buffer) @"bytes".readSlice(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".PipeWriter struct { @"io".p *@"io".pipe }
func (? *@"io".PipeWriter) @"io".Close() (? error)
func (? *@"io".PipeWriter) @"io".CloseWithError(@"io".err error) (? error)
func (? *@"io".PipeWriter) @"io".Write(@"io".data []byte) (@"io".n int, @"io".err error)
type @"net/http".Header map[string][]string
func (? @"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? @"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? @"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
func (? @"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? @"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? @"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? @"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
func (? *@"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? *@"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? *@"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? *@"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
type @"net".Addr interface { @"net".Network() (? string); @"net".String() (? string) }
type @"net/http".ResponseWriter interface { @"net/http".Header() (? @"net/http".Header); @"net/http".Write(? []byte) (? int, ? error); @"net/http".WriteHeader(? int) () }
import url "net/url"
import multipart "mime/multipart"
import tls "crypto/tls"
type @"net/http".Request struct { @"net/http".Method string; @"net/http".URL *@"net/url".URL; @"net/http".Proto string; @"net/http".ProtoMajor int; @"net/http".ProtoMinor int; @"net/http".Header @"net/http".Header; @"net/http".Body @"io".ReadCloser; @"net/http".ContentLength int64; @"net/http".TransferEncoding []string; @"net/http".Close bool; @"net/http".Host string; @"net/http".Form @"net/url".Values; @"net/http".PostForm @"net/url".Values; @"net/http".MultipartForm *@"mime/multipart".Form; @"net/http".Trailer @"net/http".Header; @"net/http".RemoteAddr string; @"net/http".RequestURI string; @"net/http".TLS *@"crypto/tls".ConnectionState }
func (? *@"net/http".Request) @"net/http".AddCookie(@"net/http".c *@"net/http".Cookie) ()
func (? *@"net/http".Request) @"net/http".Cookie(@"net/http".name string) (? *@"net/http".Cookie, ? error)
func (? *@"net/http".Request) @"net/http".Cookies() (? []*@"net/http".Cookie)
func (? *@"net/http".Request) @"net/http".FormFile(@"net/http".key string) (? @"mime/multipart".File, ? *@"mime/multipart".FileHeader, ? error)
func (? *@"net/http".Request) @"net/http".FormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".MultipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".ParseForm() (? error)
func (? *@"net/http".Request) @"net/http".ParseMultipartForm(@"net/http".maxMemory int64) (? error)
func (? *@"net/http".Request) @"net/http".PostFormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".ProtoAtLeast(@"net/http".major int, @"net/http".minor int) (? bool)
func (? *@"net/http".Request) @"net/http".Referer() (? string)
func (? *@"net/http".Request) @"net/http".SetBasicAuth(@"net/http".username string, @"net/http".password string) ()
func (? *@"net/http".Request) @"net/http".UserAgent() (? string)
func (? *@"net/http".Request) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".WriteProxy(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".closeBody() ()
func (? *@"net/http".Request) @"net/http".expectsContinue() (? bool)
func (? *@"net/http".Request) @"net/http".multipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".wantsClose() (? bool)
func (? *@"net/http".Request) @"net/http".wantsHttp10KeepAlive() (? bool)
func (? *@"net/http".Request) @"net/http".write(@"net/http".w @"io".Writer, @"net/http".usingProxy bool, @"net/http".extraHeaders @"net/http".Header) (? error)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"bytes".readOp int
type @"io".pipe struct { @"io".rl @"sync".Mutex; @"io".wl @"sync".Mutex; @"io".l @"sync".Mutex; @"io".data []byte; @"io".rwait @"sync".Cond; @"io".wwait @"sync".Cond; @"io".rerr error; @"io".werr error }
func (? *@"io".pipe) @"io".rclose(@"io".err error) ()
func (? *@"io".pipe) @"io".read(@"io".b []byte) (@"io".n int, @"io".err error)
func (? *@"io".pipe) @"io".wclose(@"io".err error) ()
func (? *@"io".pipe) @"io".write(@"io".b []byte) (@"io".n int, @"io".err error)
type @"net/http".keyValues struct { @"net/http".key string; @"net/http".values []string }
type @"net/http".headerSorter struct { @"net/http".kvs []@"net/http".keyValues }
func (? *@"net/http".headerSorter) @"net/http".Len() (? int)
func (? *@"net/http".headerSorter) @"net/http".Less(@"net/http".i int, @"net/http".j int) (? bool)
func (? *@"net/http".headerSorter) @"net/http".Swap(@"net/http".i int, @"net/http".j int) ()
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
type @"net/url".URL struct { @"net/url".Scheme string; @"net/url".Opaque string; @"net/url".User *@"net/url".Userinfo; @"net/url".Host string; @"net/url".Path string; @"net/url".RawQuery string; @"net/url".Fragment string }
func (? *@"net/url".URL) @"net/url".IsAbs() (? bool)
func (? *@"net/url".URL) @"net/url".Parse(@"net/url".ref string) (? *@"net/url".URL, ? error)
func (? *@"net/url".URL) @"net/url".Query() (? @"net/url".Values)
func (? *@"net/url".URL) @"net/url".RequestURI() (? string)
func (? *@"net/url".URL) @"net/url".ResolveReference(@"net/url".ref *@"net/url".URL) (? *@"net/url".URL)
func (? *@"net/url".URL) @"net/url".String() (? string)
type @"net/url".Values map[string][]string
func (? @"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? @"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? @"net/url".Values) @"net/url".Encode() (? string)
func (? @"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? @"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? *@"net/url".Values) @"net/url".Encode() (? string)
func (? *@"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? *@"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
type @"mime/multipart".Form struct { @"mime/multipart".Value map[string][]string; @"mime/multipart".File map[string][]*@"mime/multipart".FileHeader }
func (? *@"mime/multipart".Form) @"mime/multipart".RemoveAll() (? error)
import x509 "crypto/x509"
type @"crypto/tls".ConnectionState struct { @"crypto/tls".Version uint16; @"crypto/tls".HandshakeComplete bool; @"crypto/tls".DidResume bool; @"crypto/tls".CipherSuite uint16; @"crypto/tls".NegotiatedProtocol string; @"crypto/tls".NegotiatedProtocolIsMutual bool; @"crypto/tls".ServerName string; @"crypto/tls".PeerCertificates []*@"crypto/x509".Certificate; @"crypto/tls".VerifiedChains [][]*@"crypto/x509".Certificate }
type @"net/http".Cookie struct { @"net/http".Name string; @"net/http".Value string; @"net/http".Path string; @"net/http".Domain string; @"net/http".Expires @"time".Time; @"net/http".RawExpires string; @"net/http".MaxAge int; @"net/http".Secure bool; @"net/http".HttpOnly bool; @"net/http".Raw string; @"net/http".Unparsed []string }
func (? *@"net/http".Cookie) @"net/http".String() (? string)
type @"mime/multipart".File interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".ReadAt(@"io".p []byte, @"io".off int64) (@"io".n int, @"io".err error); @"io".Seek(@"io".offset int64, @"io".whence int) (? int64, ? error) }
import textproto "net/textproto"
type @"mime/multipart".FileHeader struct { @"mime/multipart".Filename string; @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".content []byte; @"mime/multipart".tmpfile string }
func (? *@"mime/multipart".FileHeader) @"mime/multipart".Open() (? @"mime/multipart".File, ? error)
type @"mime/multipart".Reader struct { @"mime/multipart".bufReader *@"bufio".Reader; @"mime/multipart".currentPart *@"mime/multipart".Part; @"mime/multipart".partsRead int; @"mime/multipart".nl []byte; @"mime/multipart".nlDashBoundary []byte; @"mime/multipart".dashBoundaryDash []byte; @"mime/multipart".dashBoundary []byte }
func (? *@"mime/multipart".Reader) @"mime/multipart".NextPart() (? *@"mime/multipart".Part, ? error)
func (? *@"mime/multipart".Reader) @"mime/multipart".ReadForm(@"mime/multipart".maxMemory int64) (@"mime/multipart".f *@"mime/multipart".Form, @"mime/multipart".err error)
func (? *@"mime/multipart".Reader) @"mime/multipart".isBoundaryDelimiterLine(@"mime/multipart".line []byte) (@"mime/multipart".ret bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".isFinalBoundary(@"mime/multipart".line []byte) (? bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".peekBufferIsEmptyPart(@"mime/multipart".peek []byte) (? bool)
type @"sync".Cond struct { @"sync".L @"sync".Locker; @"sync".sema @"sync".syncSema; @"sync".waiters uint32; @"sync".checker @"sync".copyChecker }
func (? *@"sync".Cond) @"sync".Broadcast() ()
func (? *@"sync".Cond) @"sync".Signal() ()
func (? *@"sync".Cond) @"sync".Wait() ()
func (? *@"sync".Cond) @"sync".signalImpl(@"sync".all bool) ()
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
type @"net/url".Userinfo struct { @"net/url".username string; @"net/url".password string; @"net/url".passwordSet bool }
func (? *@"net/url".Userinfo) @"net/url".Password() (? string, ? bool)
func (? *@"net/url".Userinfo) @"net/url".String() (? string)
func (? *@"net/url".Userinfo) @"net/url".Username() (? string)
import big "math/big"
import pkix "crypto/x509/pkix"
import asn1 "encoding/asn1"
type @"crypto/x509".Certificate struct { @"crypto/x509".Raw []byte; @"crypto/x509".RawTBSCertificate []byte; @"crypto/x509".RawSubjectPublicKeyInfo []byte; @"crypto/x509".RawSubject []byte; @"crypto/x509".RawIssuer []byte; @"crypto/x509".Signature []byte; @"crypto/x509".SignatureAlgorithm @"crypto/x509".SignatureAlgorithm; @"crypto/x509".PublicKeyAlgorithm @"crypto/x509".PublicKeyAlgorithm; @"crypto/x509".PublicKey interface {  }; @"crypto/x509".Version int; @"crypto/x509".SerialNumber *@"math/big".Int; @"crypto/x509".Issuer @"crypto/x509/pkix".Name; @"crypto/x509".Subject @"crypto/x509/pkix".Name; @"crypto/x509".NotBefore @"time".Time; @"crypto/x509".NotAfter @"time".Time; @"crypto/x509".KeyUsage @"crypto/x509".KeyUsage; @"crypto/x509".Extensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtraExtensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtKeyUsage []@"crypto/x509".ExtKeyUsage; @"crypto/x509".UnknownExtKeyUsage []@"encoding/asn1".ObjectIdentifier; @"crypto/x509".BasicConstraintsValid bool; @"crypto/x509".IsCA bool; @"crypto/x509".MaxPathLen int; @"crypto/x509".SubjectKeyId []byte; @"crypto/x509".AuthorityKeyId []byte; @"crypto/x509".OCSPServer []string; @"crypto/x509".IssuingCertificateURL []string; @"crypto/x509".DNSNames []string; @"crypto/x509".EmailAddresses []string; @"crypto/x509".IPAddresses []@"net".IP; @"crypto/x509".PermittedDNSDomainsCritical bool; @"crypto/x509".PermittedDNSDomains []string; @"crypto/x509".CRLDistributionPoints []string; @"crypto/x509".PolicyIdentifiers []@"encoding/asn1".ObjectIdentifier }
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckCRLSignature(@"crypto/x509".crl *@"crypto/x509/pkix".CertificateList) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignature(@"crypto/x509".algo @"crypto/x509".SignatureAlgorithm, @"crypto/x509".signed []byte, @"crypto/x509".signature []byte) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignatureFrom(@"crypto/x509".parent *@"crypto/x509".Certificate) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CreateCRL(@"crypto/x509".rand @"io".Reader, @"crypto/x509".priv interface {  }, @"crypto/x509".revokedCerts []@"crypto/x509/pkix".RevokedCertificate, @"crypto/x509".now @"time".Time, @"crypto/x509".expiry @"time".Time) (@"crypto/x509".crlBytes []byte, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Equal(@"crypto/x509".other *@"crypto/x509".Certificate) (? bool)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Verify(@"crypto/x509".opts @"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".VerifyHostname(@"crypto/x509".h string) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".buildChains(@"crypto/x509".cache map[int][][]*@"crypto/x509".Certificate, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".isValid(@"crypto/x509".certType int, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".systemVerify(@"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"net/textproto".MIMEHeader map[string][]string
func (? @"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? @"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
type @"bufio".Reader struct { @"bufio".buf []byte; @"bufio".rd @"io".Reader; @"bufio".r int; @"bufio".w int; @"bufio".err error; @"bufio".lastByte int; @"bufio".lastRuneSize int }
func (? *@"bufio".Reader) @"bufio".Buffered() (? int)
func (? *@"bufio".Reader) @"bufio".Peek(@"bufio".n int) (? []byte, ? error)
func (? *@"bufio".Reader) @"bufio".Read(@"bufio".p []byte) (@"bufio".n int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadByte() (@"bufio".c byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadBytes(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadLine() (@"bufio".line []byte, @"bufio".isPrefix bool, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadRune() (@"bufio".r rune, @"bufio".size int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadSlice(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadString(@"bufio".delim byte) (@"bufio".line string, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".Reset(@"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".UnreadByte() (? error)
func (? *@"bufio".Reader) @"bufio".UnreadRune() (? error)
func (? *@"bufio".Reader) @"bufio".WriteTo(@"bufio".w @"io".Writer) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".fill() ()
func (? *@"bufio".Reader) @"bufio".readErr() (? error)
func (? *@"bufio".Reader) @"bufio".reset(@"bufio".buf []byte, @"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".writeBuf(@"bufio".w @"io".Writer) (? int64, ? error)
type @"mime/multipart".Part struct { @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".buffer *@"bytes".Buffer; @"mime/multipart".mr *@"mime/multipart".Reader; @"mime/multipart".bytesRead int; @"mime/multipart".disposition string; @"mime/multipart".dispositionParams map[string]string; @"mime/multipart".r @"io".Reader }
func (? *@"mime/multipart".Part) @"mime/multipart".Close() (? error)
func (? *@"mime/multipart".Part) @"mime/multipart".FileName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".FormName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".Read(@"mime/multipart".d []byte) (@"mime/multipart".n int, @"mime/multipart".err error)
func (? *@"mime/multipart".Part) @"mime/multipart".parseContentDisposition() ()
func (? *@"mime/multipart".Part) @"mime/multipart".populateHeaders() (? error)
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
type @"sync".syncSema [3]uintptr
type @"sync".copyChecker uintptr
func (? *@"sync".copyChecker) @"sync".check() ()
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
type @"crypto/x509".SignatureAlgorithm int
type @"crypto/x509".PublicKeyAlgorithm int
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"math/big".n int64, @"math/big".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"math/big".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"math/big".y *@"math/big".Int) (@"math/big".r int)
func (? *@"math/big".Int) @"math/big".Div(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Format(@"math/big".s @"fmt".State, @"math/big".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"math/big".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"math/big".text []byte, @"math/big".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"math/big".g *@"math/big".Int, @"math/big".p *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"math/big".a int64, @"math/big".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"math/big".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"math/big".rnd *@"math/rand".Rand, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"math/big".s @"fmt".ScanState, @"math/big".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"math/big".x *@"math/big".Int, @"math/big".i int, @"math/big".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"math/big".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"math/big".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"math/big".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"math/big".s string, @"math/big".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"math/big".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? *@"math/big".Int, ? int, ? error)
type @"crypto/x509/pkix".Name struct { @"crypto/x509/pkix".Country []string; @"crypto/x509/pkix".Organization []string; @"crypto/x509/pkix".OrganizationalUnit []string; @"crypto/x509/pkix".Locality []string; @"crypto/x509/pkix".Province []string; @"crypto/x509/pkix".StreetAddress []string; @"crypto/x509/pkix".PostalCode []string; @"crypto/x509/pkix".SerialNumber string; @"crypto/x509/pkix".CommonName string; @"crypto/x509/pkix".Names []@"crypto/x509/pkix".AttributeTypeAndValue }
func (? @"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".FillFromRDNSequence(@"crypto/x509/pkix".rdns *@"crypto/x509/pkix".RDNSequence) ()
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
type @"crypto/x509".KeyUsage int
type @"crypto/x509/pkix".Extension struct { @"crypto/x509/pkix".Id @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Critical bool "asn1:\"optional\""; @"crypto/x509/pkix".Value []byte }
type @"crypto/x509".ExtKeyUsage int
type @"encoding/asn1".ObjectIdentifier []int
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
type @"net".IP []byte
func (? @"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? @"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? @"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? @"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? @"net".IP) @"net".IsLoopback() (? bool)
func (? @"net".IP) @"net".IsMulticast() (? bool)
func (? @"net".IP) @"net".IsUnspecified() (? bool)
func (? @"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? @"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? @"net".IP) @"net".String() (? string)
func (? @"net".IP) @"net".To16() (? @"net".IP)
func (? @"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? *@"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? *@"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? *@"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? *@"net".IP) @"net".IsLoopback() (? bool)
func (? *@"net".IP) @"net".IsMulticast() (? bool)
func (? *@"net".IP) @"net".IsUnspecified() (? bool)
func (? *@"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? *@"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? *@"net".IP) @"net".String() (? string)
func (? *@"net".IP) @"net".To16() (? @"net".IP)
func (? *@"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".UnmarshalText(@"net".text []byte) (? error)
type @"crypto/x509/pkix".CertificateList struct { @"crypto/x509/pkix".TBSCertList @"crypto/x509/pkix".TBSCertificateList; @"crypto/x509/pkix".SignatureAlgorithm @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".SignatureValue @"encoding/asn1".BitString }
func (? *@"crypto/x509/pkix".CertificateList) @"crypto/x509/pkix".HasExpired(@"crypto/x509/pkix".now @"time".Time) (? bool)
type @"crypto/x509/pkix".RevokedCertificate struct { @"crypto/x509/pkix".SerialNumber *@"math/big".Int; @"crypto/x509/pkix".RevocationTime @"time".Time; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"optional\"" }
type @"crypto/x509".VerifyOptions struct { @"crypto/x509".DNSName string; @"crypto/x509".Intermediates *@"crypto/x509".CertPool; @"crypto/x509".Roots *@"crypto/x509".CertPool; @"crypto/x509".CurrentTime @"time".Time; @"crypto/x509".KeyUsages []@"crypto/x509".ExtKeyUsage }
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"fmt".c int) (? bool); @"fmt".Precision() (@"fmt".prec int, @"fmt".ok bool); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool); @"fmt".Write(@"fmt".b []byte) (@"fmt".ret int, @"fmt".err error) }
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
type @"fmt".ScanState interface { @"fmt".Read(@"fmt".buf []byte) (@"fmt".n int, @"fmt".err error); @"fmt".ReadRune() (@"fmt".r rune, @"fmt".size int, @"fmt".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"fmt".skipSpace bool, @"fmt".f func (? rune) (? bool)) (@"fmt".token []byte, @"fmt".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error); @"io".UnreadRune() (? error) }
type @"crypto/x509/pkix".AttributeTypeAndValue struct { @"crypto/x509/pkix".Type @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Value interface {  } }
type @"crypto/x509/pkix".RDNSequence []@"crypto/x509/pkix".RelativeDistinguishedNameSET
type @"net".IPMask []byte
func (? @"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? @"net".IPMask) @"net".String() (? string)
func (? *@"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? *@"net".IPMask) @"net".String() (? string)
type @"crypto/x509/pkix".TBSCertificateList struct { @"crypto/x509/pkix".Raw @"encoding/asn1".RawContent; @"crypto/x509/pkix".Version int "asn1:\"optional,default:2\""; @"crypto/x509/pkix".Signature @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".Issuer @"crypto/x509/pkix".RDNSequence; @"crypto/x509/pkix".ThisUpdate @"time".Time; @"crypto/x509/pkix".NextUpdate @"time".Time; @"crypto/x509/pkix".RevokedCertificates []@"crypto/x509/pkix".RevokedCertificate "asn1:\"optional\""; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"tag:0,optional,explicit\"" }
type @"crypto/x509/pkix".AlgorithmIdentifier struct { @"crypto/x509/pkix".Algorithm @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Parameters @"encoding/asn1".RawValue "asn1:\"optional\"" }
type @"encoding/asn1".BitString struct { @"encoding/asn1".Bytes []byte; @"encoding/asn1".BitLength int }
func (? @"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? @"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
type @"crypto/x509".CertPool struct { @"crypto/x509".bySubjectKeyId map[string][]int; @"crypto/x509".byName map[string][]int; @"crypto/x509".certs []*@"crypto/x509".Certificate }
func (? *@"crypto/x509".CertPool) @"crypto/x509".AddCert(@"crypto/x509".cert *@"crypto/x509".Certificate) ()
func (? *@"crypto/x509".CertPool) @"crypto/x509".AppendCertsFromPEM(@"crypto/x509".pemCerts []byte) (@"crypto/x509".ok bool)
func (? *@"crypto/x509".CertPool) @"crypto/x509".Subjects() (@"crypto/x509".res [][]byte)
func (? *@"crypto/x509".CertPool) @"crypto/x509".findVerifiedParents(@"crypto/x509".cert *@"crypto/x509".Certificate) (@"crypto/x509".parents []int, @"crypto/x509".errCert *@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
$$
0Çgithub.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesbufiomathstrconvreflectencoding/binarysyscallstringstimeosfmtsortpath/filepath	io/ioutil	math/randnetcompress/flatehash
hash/crc32compress/gzipcontainer/listcryptocrypto/subtlecrypto/cipher
crypto/aes
crypto/desmath/bigcrypto/ellipticcrypto/ecdsacrypto/hmac
crypto/md5crypto/rand
crypto/rc4
crypto/rsacrypto/sha1crypto/sha256
crypto/dsacrypto/sha512encoding/asn1crypto/x509/pkixencoding/hexflagtext/tabwriterruntime/pproftestingencoding/base64encoding/pemos/execcrypto/x509
crypto/tlslogmimenet/textprotomime/multipartnet/urlpathnet/httpregexp/syntaxregexpnet/http/cgi0Å∑0errorsA0fmtB0ioC0	io/ioutilD0netE0net/httpF0net/http/cgiG0osH0stringsI0	syncJ0	timeK0
bufioL0
bytesM0encoding/binaryN0Çd$0Çœ 0OÇ·O=$pkg.request=$newType(0,"Struct","fcgi.request","request","net/http/fcgi",function(pw_,reqId_,params_,buf_,rawParams_,keepConn_){this.$val=this;this.pw=pw_!==undefined?pw_:($ptrType(C.PipeWriter)).nil;this.reqId=reqId_!==undefined?reqId_:0;this.params=params_!==undefined?params_:false;this.buf=buf_!==undefined?buf_:($arrayType($Uint8,1024)).zero();this.rawParams=rawParams_!==undefined?rawParams_:($sliceType($Uint8)).nil;this.keepConn=keepConn_!==undefined?keepConn_:false;});Ç¿($ptrType(O)).methods=[["parseParams","parseParams","net/http/fcgi",$funcType([],[],false),-1]];O.init([["pw","pw","net/http/fcgi",($ptrType(C.PipeWriter)),""],["reqId","reqId","net/http/fcgi",$Uint16,""],["params","params","net/http/fcgi",($mapType($String,$String)),""],["buf","buf","net/http/fcgi",($arrayType($Uint8,1024)),""],["rawParams","rawParams","net/http/fcgi",($sliceType($Uint8)),""],["keepConn","keepConn","net/http/fcgi",$Bool,""]]);0	request0io:PipeWriter 0Çø 0QÇPQ=$pkg.response=$newType(0,"Struct","fcgi.response","response","net/http/fcgi",function(req_,header_,w_,wroteHeader_){this.$val=this;this.req=req_!==undefined?req_:($ptrType(O)).nil;this.header=header_!==undefined?header_:false;this.w=w_!==undefined?w_:($ptrType(AH)).nil;this.wroteHeader=wroteHeader_!==undefined?wroteHeader_:false;});Ç($ptrType(Q)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Flush","Flush","",$funcType([],[],false),-1],["Header","Header","",$funcType([],[F.Header],false),-1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["WriteHeader","WriteHeader","",$funcType([$Int],[],false),-1]];Q.init([["req","req","net/http/fcgi",($ptrType(O)),""],["header","header","net/http/fcgi",F.Header,""],["w","w","net/http/fcgi",($ptrType(AH)),""],["wroteHeader","wroteHeader","net/http/fcgi",$Bool,""]]);0
response0Anet/http/fcgi:bufWriternet/http/fcgi:requestnet/http:Header 0Çœ 0SÇKS=$pkg.child=$newType(0,"Struct","fcgi.child","child","net/http/fcgi",function(conn_,handler_,mu_,requests_){this.$val=this;this.conn=conn_!==undefined?conn_:($ptrType(AB)).nil;this.handler=handler_!==undefined?handler_:$ifaceNil;this.mu=mu_!==undefined?mu_:new J.Mutex.Ptr();this.requests=requests_!==undefined?requests_:false;});Ç˘($ptrType(S)).methods=[["handleRecord","handleRecord","net/http/fcgi",$funcType([($ptrType(AD))],[$error],false),-1],["serve","serve","net/http/fcgi",$funcType([],[],false),-1],["serveRequest","serveRequest","net/http/fcgi",$funcType([($ptrType(O)),C.ReadCloser],[],false),-1]];S.init([["conn","conn","net/http/fcgi",($ptrType(AB)),""],["handler","handler","net/http/fcgi",F.Handler,""],["mu","mu","net/http/fcgi",J.Mutex,""],["requests","requests","net/http/fcgi",($mapType($Uint16,($ptrType(O)))),""]]);0child0nio:ReadClosernet/http/fcgi:connnet/http/fcgi:recordnet/http/fcgi:requestnet/http:Handler
sync:Mutex 0l 0XQX=$pkg.recType=$newType(1,"Uint8","fcgi.recType","recType","net/http/fcgi",null); 0	recType0  0Ç5 0YÇΩY=$pkg.header=$newType(0,"Struct","fcgi.header","header","net/http/fcgi",function(Version_,Type_,Id_,ContentLength_,PaddingLength_,Reserved_){this.$val=this;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Id=Id_!==undefined?Id_:0;this.ContentLength=ContentLength_!==undefined?ContentLength_:0;this.PaddingLength=PaddingLength_!==undefined?PaddingLength_:0;this.Reserved=Reserved_!==undefined?Reserved_:0;});ÇC($ptrType(Y)).methods=[["init","init","net/http/fcgi",$funcType([X,$Uint16,$Int],[],false),-1]];Y.init([["Version","Version","",$Uint8,""],["Type","Type","",X,""],["Id","Id","",$Uint16,""],["ContentLength","ContentLength","",$Uint16,""],["PaddingLength","PaddingLength","",$Uint8,""],["Reserved","Reserved","",$Uint8,""]]);0header0net/http/fcgi:recType 0ÇX 0ZÇ%Z=$pkg.beginRequest=$newType(0,"Struct","fcgi.beginRequest","beginRequest","net/http/fcgi",function(role_,flags_,reserved_){this.$val=this;this.role=role_!==undefined?role_:0;this.flags=flags_!==undefined?flags_:0;this.reserved=reserved_!==undefined?reserved_:($arrayType($Uint8,5)).zero();});Ç($ptrType(Z)).methods=[["read","read","net/http/fcgi",$funcType([($sliceType($Uint8))],[$error],false),-1]];Z.init([["role","role","net/http/fcgi",$Uint16,""],["flags","flags","net/http/fcgi",$Uint8,""],["reserved","reserved","net/http/fcgi",($arrayType($Uint8,5)),""]]);0beginRequest0  0Ç[ 0ABÇ+AB=$pkg.conn=$newType(0,"Struct","fcgi.conn","conn","net/http/fcgi",function(mutex_,rwc_,buf_,h_){this.$val=this;this.mutex=mutex_!==undefined?mutex_:new J.Mutex.Ptr();this.rwc=rwc_!==undefined?rwc_:$ifaceNil;this.buf=buf_!==undefined?buf_:new M.Buffer.Ptr();this.h=h_!==undefined?h_:new Y.Ptr();});Ç∏($ptrType(AB)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["writeBeginRequest","writeBeginRequest","net/http/fcgi",$funcType([$Uint16,$Uint16,$Uint8],[$error],false),-1],["writeEndRequest","writeEndRequest","net/http/fcgi",$funcType([$Uint16,$Int,$Uint8],[$error],false),-1],["writePairs","writePairs","net/http/fcgi",$funcType([X,$Uint16,($mapType($String,$String))],[$error],false),-1],["writeRecord","writeRecord","net/http/fcgi",$funcType([X,$Uint16,($sliceType($Uint8))],[$error],false),-1]];AB.init([["mutex","mutex","net/http/fcgi",J.Mutex,""],["rwc","rwc","net/http/fcgi",C.ReadWriteCloser,""],["buf","buf","net/http/fcgi",M.Buffer,""],["h","h","net/http/fcgi",Y,""]]);0conn0[bytes:Bufferio:ReadWriteClosernet/http/fcgi:headernet/http/fcgi:recType
sync:Mutex 0Ç. 0ADÅ‘AD=$pkg.record=$newType(0,"Struct","fcgi.record","record","net/http/fcgi",function(h_,buf_){this.$val=this;this.h=h_!==undefined?h_:new Y.Ptr();this.buf=buf_!==undefined?buf_:($arrayType($Uint8,65790)).zero();});Ç($ptrType(AD)).methods=[["content","content","net/http/fcgi",$funcType([],[($sliceType($Uint8))],false),-1],["read","read","net/http/fcgi",$funcType([C.Reader],[$error],false),-1]];AD.init([["h","h","net/http/fcgi",Y,""],["buf","buf","net/http/fcgi",($arrayType($Uint8,65790)),""]]);0record0!	io:Readernet/http/fcgi:header 0Ç 0AHÅÚAH=$pkg.bufWriter=$newType(0,"Struct","fcgi.bufWriter","bufWriter","net/http/fcgi",function(closer_,Writer_){this.$val=this;this.closer=closer_!==undefined?closer_:$ifaceNil;this.Writer=Writer_!==undefined?Writer_:($ptrType(L.Writer)).nil;});ÇøAH.methods=[["Available","Available","",$funcType([],[$Int],false),1],["Buffered","Buffered","",$funcType([],[$Int],false),1],["Flush","Flush","",$funcType([],[$error],false),1],["ReadFrom","ReadFrom","",$funcType([C.Reader],[$Int64,$error],false),1],["Reset","Reset","",$funcType([C.Writer],[],false),1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),1],["WriteByte","WriteByte","",$funcType([$Uint8],[$error],false),1],["WriteRune","WriteRune","",$funcType([$Int32],[$Int,$error],false),1],["WriteString","WriteString","",$funcType([$String],[$Int,$error],false),1],["flush","flush","bufio",$funcType([],[$error],false),1]];($ptrType(AH)).methods=[["Available","Available","",$funcType([],[$Int],false),1],["Buffered","Buffered","",$funcType([],[$Int],false),1],["Close","Close","",$funcType([],[$error],false),-1],["Flush","Flush","",$funcType([],[$error],false),1],["ReadFrom","ReadFrom","",$funcType([C.Reader],[$Int64,$error],false),1],["Reset","Reset","",$funcType([C.Writer],[],false),1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),1],["WriteByte","WriteByte","",$funcType([$Uint8],[$error],false),1],["WriteRune","WriteRune","",$funcType([$Int32],[$Int,$error],false),1],["WriteString","WriteString","",$funcType([$String],[$Int,$error],false),1],["flush","flush","bufio",$funcType([],[$error],false),1]];AH.init([["closer","closer","net/http/fcgi",C.Closer,""],["Writer","","",($ptrType(L.Writer)),""]]);0	bufWriter0/bufio:Writer	io:Closer	io:Reader	io:Writer 0ÇÜ 0AJÇAJ=$pkg.streamWriter=$newType(0,"Struct","fcgi.streamWriter","streamWriter","net/http/fcgi",function(c_,recType_,reqId_){this.$val=this;this.c=c_!==undefined?c_:($ptrType(AB)).nil;this.recType=recType_!==undefined?recType_:0;this.reqId=reqId_!==undefined?reqId_:0;});Ç+($ptrType(AJ)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];AJ.init([["c","c","net/http/fcgi",($ptrType(AB)),""],["recType","recType","net/http/fcgi",X,""],["reqId","reqId","net/http/fcgi",$Uint16,""]]);0streamWriter0+net/http/fcgi:connnet/http/fcgi:recType 0  0U  0errCloseConn0  0 0V  0	emptyBody0  0N 0AA #AA=($arrayType($Uint8,255)).zero();0pad0net/http/fcgi:pad 0i 0  2    U=A.New("fcgi: connection should be closed");0 0(
errors:Newnet/http/fcgi:errCloseConn 0t 0  $    V=D.NopCloser(I.NewReader(""));0 0Aio/ioutil:NopClosernet/http/fcgi:emptyBodystrings:NewReader 0Ç\net/http/fcgi.newRequest0PÅˇP=function(a,b){var c,d,e;  µe=new O.Ptr(($ptrType(C.PipeWriter)).nil,a,(c=new $Map(),c),($arrayType($Uint8,1024)).zero(),($sliceType($Uint8)).nil,!((((b&1)>>>0)===0)));  !e.rawParams=$subslice(new($sliceType($Uint8))(e.buf),0,0);  :return e;    }; 0
newRequest0&io:PipeWriternet/http/fcgi:request 0Ç‘$(*net/http/fcgi.request).parseParams0 Ç@O.Ptr.prototype.parseParams=function(){var a,b,c,d,e,f,g,h,i,j;  Äa=this;  ùb=a.rawParams;  ≤a.rawParams=($sliceType($Uint8)).nil;  ≈while(b.$length>0){  €c=AE(b);d=c[0];e=c[1];  ˘    if(e===0){  return;    }  b=$subslice(b,e);  'f=AE(b);g=f[0];e=f[1];  E    if(e===0){  Treturn;    }  ab=$subslice(b,e);  sh=AF(b,d);  ïb=$subslice(b,d);  ¨i=AF(b,g);  Œb=$subslice(b,g);  Âj=h;(a.params||$throwRuntimeError("assignment to entry in nil map"))[j]={k:j,v:i};    }    };O.prototype.parseParams=function(){return this.$val.parseParams();}; 0requestparseParams0Inet/http/fcgi:readSizenet/http/fcgi:readStringnet/http/fcgi:request 0Å˝net/http/fcgi.newResponse0RdR=function(a,b){var c,d;  ‘return new Q.Ptr(b,(c=new $Map(),c),AI(a.conn,6,b.reqId),false);    }; 0newResponse0anet/http/fcgi:bufWriternet/http/fcgi:newWriternet/http/fcgi:requestnet/http/fcgi:response 0Å‹ (*net/http/fcgi.response).Header0 ÅäQ.Ptr.prototype.Header=function(){var a;  Na=this;  sreturn a.header;    };Q.prototype.Header=function(){return this.$val.Header();}; 0
response0net/http/fcgi:response 0Ç!(*net/http/fcgi.response).Write0 Å–Q.Ptr.prototype.Write=function(a){var b;  åb=this;  º    if(!b.wroteHeader){  “b.WriteHeader(200);    }  Ûreturn b.w.Writer.Write(a);    };Q.prototype.Write=function(a){return this.$val.Write(a);}; 0
response0net/http/fcgi:response 0Ç%(*net/http/fcgi.response).WriteHeader0 ÇyQ.Ptr.prototype.WriteHeader=function(a){var b;  b=this;  9    if(b.wroteHeader){  Nreturn;    }  Yb.wroteHeader=true;  o    if(a===304){  Æ(new F.Header(b.header)).Del("Content-Type");  Õ(new F.Header(b.header)).Del("Content-Length");  Ó(new F.Header(b.header)).Del("Transfer-Encoding");        }else if((new F.Header(b.header)).Get("Content-Type")===""){  B(new F.Header(b.header)).Set("Content-Type","text/html; charset=utf-8");    }  Ä    if((new F.Header(b.header)).Get("Date")===""){  ¢(new F.Header(b.header)).Set("Date",K.Now().UTC().Format("Mon, 02 Jan 2006 15:04:05 GMT"));    }  ÊB.Fprintf(b.w,"Status: %d %s\r\n",new($sliceType($emptyInterface))([new $Int(a),new $String(F.StatusText(a))]));  	*(new F.Header(b.header)).Write(b.w);  	?b.w.Writer.WriteString("\r\n");    };Q.prototype.WriteHeader=function(a){return this.$val.WriteHeader(a);}; 0
response0Ufmt:Fprintfnet/http/fcgi:responsenet/http:Headernet/http:StatusTexttime:Now 0Ç(*net/http/fcgi.response).Flush0 Å≈Q.Ptr.prototype.Flush=function(){var a;  	`a=this;  	x    if(!a.wroteHeader){  	éa.WriteHeader(200);    }  	Øa.w.Writer.Flush();    };Q.prototype.Flush=function(){return this.$val.Flush();}; 0
response0net/http/fcgi:response 0ÅÍ(*net/http/fcgi.response).Close0 ÅôQ.Ptr.prototype.Close=function(){var a;  	ƒa=this;  	‚a.Flush();  	Ìreturn a.w.Close();    };Q.prototype.Close=function(){return this.$val.Close();}; 0
response0net/http/fcgi:response 0Å—net/http/fcgi.newChild0TST=function(a,b){  
Ôreturn new S.Ptr(AC(a),b,new J.Mutex.Ptr(),new $Map());    }; 0
newChild0Lnet/http/fcgi:childnet/http/fcgi:connnet/http/fcgi:newConn
sync:Mutex 0ÇÀ(*net/http/fcgi.child).serve0 Ç5S.Ptr.prototype.serve=function(){var $deferred=[],$err=null,a,b,c,d;try{$deferFrames.push($deferred);  `a=this;  u$deferred.push([$methodVal(a.conn,"Close"),[]]);  ã  èb=new AD.Ptr();$copy(b,new AD.Ptr(),AD);  õwhile(true){  £  ¶c=b.read(a.conn.rwc);    if(!($interfaceIsEqual(c,$ifaceNil))){  ”return;    }  ‡  „d=a.handleRecord(b);    if(!($interfaceIsEqual(d,$ifaceNil))){  return;    }    }    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.serve=function(){return this.$val.serve();}; 0childserve0[net/http/fcgi:childnet/http/fcgi:handleRecordnet/http/fcgi:readnet/http/fcgi:record 0Ç
-#(*net/http/fcgi.child).handleRecord0 ÇqS.Ptr.prototype.handleRecord=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  §b=this;  —b.mu.Lock();  ﬁc=(d=b.requests[a.h.Id],d!==undefined?[d.v,true]:[($ptrType(O)).nil,false]);e=c[0];f=c[1];  ˇb.mu.Unlock();      if(!f&&!((a.h.Type===1))&&!((a.h.Type===9))){  åreturn $ifaceNil;    }  úg=a.h.Type;  ±if(g===1){       if(!(e===($ptrType(O)).nil)){  Oreturn A.New("fcgi: received ID that is already in-flight");    }  ó  õh=new Z.Ptr();$copy(h,new Z.Ptr(),Z);  ≠  ∞i=h.read(a.content());    if(!($interfaceIsEqual(i,$ifaceNil))){  ﬂreturn i;    }      if(!((h.role===1))){  b.conn.writeEndRequest(a.h.Id,0,3);  Kreturn $ifaceNil;    }  \e=P(a.h.Id,h.flags);  Éb.mu.Lock();  ëj=a.h.Id;(b.requests||$throwRuntimeError("assignment to entry in nil map"))[j]={k:j,v:e};  Æb.mu.Unlock();  æreturn $ifaceNil;       }else if(g===4){  m    if(a.content().$length>0){  åe.rawParams=$appendSlice(e.rawParams,a.content());  «return $ifaceNil;    }  ÿe.parseParams();  Ïreturn $ifaceNil;      ¯}else if(g===5){  
k=a.content();  %    if(e.pw===($ptrType(C.PipeWriter)).nil){  ;  ?l=$ifaceNil;  U    if(k.$length>0){  ⁄m=C.Pipe();l=m[0];e.pw=m[1];    }else{  l=V;    }  $go($methodVal(b,"serveRequest"),[e,l]);    }  ?    if(k.$length>0){  €e.pw.Write(k);        }else if(!(e.pw===($ptrType(C.PipeWriter)).nil)){  e.pw.Close();    }  %return $ifaceNil;      1}else if(g===9){  Gn=(o=new $Map(),p="FCGI_MPXS_CONNS",o[p]={k:p,v:"1"},o);  }b.conn.writePairs(10,0,n);  ±return $ifaceNil;      Ω}else if(g===8){  return $ifaceNil;      }else if(g===2){  6console.log("abort");  Ib.mu.Lock();  Wdelete b.requests[a.h.Id];  vb.mu.Unlock();  Üb.conn.writeEndRequest(a.h.Id,0,0);  √    if(!e.keepConn){  return U;    }  return $ifaceNil;    }else{  2q=($sliceType($Uint8)).make(8);  I(0<0||0>=q.$length)?$throwRuntimeError("index out of range"):q.$array[q.$offset+0]=(a.h.Type<<24>>>24);  cb.conn.writeRecord(11,0,q);  èreturn $ifaceNil;    }    };S.prototype.handleRecord=function(a){return this.$val.handleRecord(a);}; 0childhandleRecord0Çq
errors:Newio:Pipeio:PipeWriternet/http/fcgi:beginRequestnet/http/fcgi:childnet/http/fcgi:contentnet/http/fcgi:emptyBodynet/http/fcgi:errCloseConnnet/http/fcgi:newRequestnet/http/fcgi:parseParamsnet/http/fcgi:readnet/http/fcgi:requestnet/http/fcgi:serveRequestnet/http/fcgi:writeEndRequestnet/http/fcgi:writePairsnet/http/fcgi:writeRecord 0Çê#(*net/http/fcgi.child).serveRequest0 Ç¢S.Ptr.prototype.serveRequest=function(a,b){var c,d,e,f,g;  ¶c=this;  ‚d=R(c,a);  ¸e=G.RequestFromMap(a.params);f=e[0];g=e[1];  ,    if(!($interfaceIsEqual(g,$ifaceNil))){  jd.WriteHeader(500);  öc.conn.writeRecord(7,a.reqId,new($sliceType($Uint8))($stringToBytes(g.Error())));    }else{  Âf.Body=b;  ˚c.handler.ServeHTTP(d,f);    }  d.Close();  *c.mu.Lock();  7delete c.requests[a.reqId];  Vc.mu.Unlock();  ec.conn.writeEndRequest(a.reqId,0,0);  *C.CopyN(D.Discard,b,new $Int64(0,104857600));  Sb.Close();  b    if(!a.keepConn){  wc.conn.Close();    }    };S.prototype.serveRequest=function(a,b){return this.$val.serveRequest(a,b);}; 0childserveRequest0Å§io/ioutil:Discardio:CopyNnet/http/cgi:RequestFromMapnet/http/fcgi:childnet/http/fcgi:newResponsenet/http/fcgi:writeEndRequestnet/http/fcgi:writeRecord 0Ç>net/http/fcgi.Serve0WÇ≠W=$pkg.Serve=function(a,b){var $deferred=[],$err=null,c,d,e,f,g,h;try{$deferFrames.push($deferred);  „    if($interfaceIsEqual(a,$ifaceNil)){  Û  ˜c=$ifaceNil;  d=E.FileListener(H.Stdin);a=d[0];c=d[1];  )    if(!($interfaceIsEqual(c,$ifaceNil))){  <return c;    }  M$deferred.push([$methodVal(a,"Close"),[]]);    }  a    if($interfaceIsEqual(b,$ifaceNil)){  wb=F.DefaultServeMux;    }  öwhile(true){  ¢e=a.Accept();f=e[0];g=e[1];  ∫    if(!($interfaceIsEqual(g,$ifaceNil))){  Õreturn g;    }  ﬁh=T(f,b);  ˚$go($methodVal(h,"serve"),[]);    }    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}}; 0Serve0cnet/http/fcgi:newChildnet/http/fcgi:servenet/http:DefaultServeMuxnet:FileListeneros:Stdin 0Çı"(*net/http/fcgi.beginRequest).read0 ÇkZ.Ptr.prototype.read=function(a){var b;  "wb=this;  "ß    if(!((a.$length===8))){  "¿return A.New("fcgi: invalid begin request record");    }  "¸b.role=N.BigEndian.Uint16(a);  #(b.flags=((2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]);  #?return $ifaceNil;    };Z.prototype.read=function(a){return this.$val.read(a);}; 0beginRequestread0Cencoding/binary:BigEndian
errors:Newnet/http/fcgi:beginRequest 0ÇB(*net/http/fcgi.header).init0 ÅÚY.Ptr.prototype.init=function(a,b,c){var d;  #‚d=this;  $'d.Version=1;  $6d.Type=a;  $Hd.Id=b;  $Vd.ContentLength=(c<<16>>>16);  $d.PaddingLength=((-c&7)<<24>>>24);    };Y.prototype.init=function(a,b,c){return this.$val.init(a,b,c);}; 0headerinit0net/http/fcgi:header 0Å÷net/http/fcgi.newConn0ACaAC=function(a){  %ureturn new AB.Ptr(new J.Mutex.Ptr(),a,new M.Buffer.Ptr(),new Y.Ptr());    }; 0	newConn0Dbytes:Buffernet/http/fcgi:connnet/http/fcgi:header
sync:Mutex 0Ç∏(*net/http/fcgi.conn).Close0 ÇrAB.Ptr.prototype.Close=function(){var $deferred=[],$err=null,a;try{$deferFrames.push($deferred);  %ïa=this;  %Øa.mutex.Lock();  %ø$deferred.push([$methodVal(a.mutex,"Unlock"),[]]);  %◊return a.rwc.Close();    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AB.prototype.Close=function(){return this.$val.Close();}; 0conn0net/http/fcgi:conn 0Ç(*net/http/fcgi.record).read0 ÇfAD.Ptr.prototype.read=function(a){var b=$ifaceNil,c,d,e,f;  &6c=this;  &d  &gb=N.Read(a,(d=N.BigEndian,new d.constructor.Struct(d)),c.h);    if(!($interfaceIsEqual(b,$ifaceNil))){  &¶    b=b;return b;    }  &µ    if(!((c.h.Version===1))){  &œ    b=A.New("fcgi: invalid header version");return b;    }  'e=(c.h.ContentLength>>0)+(c.h.PaddingLength>>0)>>0;  '?  'Bf=C.ReadFull(a,$subslice(new($sliceType($Uint8))(c.buf),0,e));b=f[1];    if(!($interfaceIsEqual(b,$ifaceNil))){  'w    b=b;return b;    }  'Ü    b=$ifaceNil;return b;    };AD.prototype.read=function(a){return this.$val.read(a);}; 0recordread0`encoding/binary:BigEndianencoding/binary:Read
errors:Newio:ReadFullnet/http/fcgi:record 0Ç(*net/http/fcgi.record).content0 ÅƒAD.Ptr.prototype.content=function(){var a;  'öa=this;  'πreturn $subslice(new($sliceType($Uint8))(a.buf),0,a.h.ContentLength);    };AD.prototype.content=function(){return this.$val.content();}; 0recordcontent0net/http/fcgi:record 0ÇI!(*net/http/fcgi.conn).writeRecord0 ÇóAB.Ptr.prototype.writeRecord=function(a,b,c){var $deferred=[],$err=null,d,e,f,g,h,i,j,k,l,m;try{$deferFrames.push($deferred);  (d=this;  ([d.mutex.Lock();  (k$deferred.push([$methodVal(d.mutex,"Unlock"),[]]);  (Éd.buf.Reset();  (íd.h.init(a,b,c.$length);  (¥  (∑g=N.Write(d.buf,(e=N.BigEndian,new e.constructor.Struct(e)),(f=d.h,new f.constructor.Struct(f)));    if(!($interfaceIsEqual(g,$ifaceNil))){  (˙return g;    }  )	  )h=d.buf.Write(c);i=h[1];    if(!($interfaceIsEqual(i,$ifaceNil))){  )5return i;    }  )D  )Gj=d.buf.Write($subslice(new($sliceType($Uint8))(AA),0,d.h.PaddingLength));k=j[1];    if(!($interfaceIsEqual(k,$ifaceNil))){  )Üreturn k;    }  )ïl=d.rwc.Write(d.buf.Bytes());m=l[1];  )ªreturn m;    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AB.prototype.writeRecord=function(a,b,c){return this.$val.writeRecord(a,b,c);}; 0connwriteRecord0mencoding/binary:BigEndianencoding/binary:Writenet/http/fcgi:connnet/http/fcgi:initnet/http/fcgi:pad 0Çπ'(*net/http/fcgi.conn).writeBeginRequest0 Ç9AB.Ptr.prototype.writeBeginRequest=function(a,b,c){var d,e;  )œd=this;  *e=$toNativeArray("Uint8",[((b>>>8<<16>>>16)<<24>>>24),(b<<24>>>24),c,0,0,0,0,0]);  *Mreturn d.writeRecord(1,a,new($sliceType($Uint8))(e));    };AB.prototype.writeBeginRequest=function(a,b,c){return this.$val.writeBeginRequest(a,b,c);}; 0connwriteBeginRequest0/net/http/fcgi:connnet/http/fcgi:writeRecord 0Çˇ%(*net/http/fcgi.conn).writeEndRequest0 ÇhAB.Ptr.prototype.writeEndRequest=function(a,b,c){var d,e;  *äd=this;  *ﬂe=($sliceType($Uint8)).make(8);  *ıN.BigEndian.PutUint32(e,(b>>>0));  +'(4<0||4>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+4]=c;  +>return d.writeRecord(3,a,e);    };AB.prototype.writeEndRequest=function(a,b,c){return this.$val.writeEndRequest(a,b,c);}; 0connwriteEndRequest0Jencoding/binary:BigEndiannet/http/fcgi:connnet/http/fcgi:writeRecord 0Ç• (*net/http/fcgi.conn).writePairs0 ÇAB.Ptr.prototype.writePairs=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  +vd=this;  +Àe=AI(d,a,b);  +Óf=($sliceType($Uint8)).make(8);  ,g=c;h=0;i=$keys(g);while(h<i.length){j=g[i[h]];        if(j===undefined){    h++;continue;    }k=j.k;l=j.v;  , m=AG(f,(k.length>>>0));  ,Em=m+(AG($subslice(f,m),(l.length>>>0)))>>0;  ,n  ,qn=e.Writer.Write($subslice(f,0,m));o=n[1];    if(!($interfaceIsEqual(o,$ifaceNil))){  ,õreturn o;    }  ,¨  ,Øp=e.Writer.WriteString(k);q=p[1];    if(!($interfaceIsEqual(q,$ifaceNil))){  ,€return q;    }  ,Ï  ,Ôr=e.Writer.WriteString(l);s=r[1];    if(!($interfaceIsEqual(s,$ifaceNil))){  -return s;    }    h++;}  -.e.Close();  -9return $ifaceNil;    };AB.prototype.writePairs=function(a,b,c){return this.$val.writePairs(a,b,c);}; 0conn
writePairs0Gnet/http/fcgi:connnet/http/fcgi:encodeSizenet/http/fcgi:newWriter 0ÇΩnet/http/fcgi.readSize0AEÇmAE=function(a){var b,c,d,e;  -p    if(a.$length===0){  -Éreturn[0,0];    }  -ìb=(((0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])>>>0);c=1;d=b;e=c;  -Ø    if(!((((d&128)>>>0)===0))){  -«    if(a.$length<4){  -⁄return[0,0];    }  -Ïe=4;  -Ùd=N.BigEndian.Uint32(a);  .d=d&~(2147483648);    }  .-return[d,e];    }; 0
readSize0encoding/binary:BigEndian 0Å∞net/http/fcgi.readString0AFyAF=function(a,b){  .p    if(b>(a.$length>>>0)){  .çreturn"";    }  .õreturn $bytesToString($subslice(a,0,b));    }; 0
readString0  0ÇBnet/http/fcgi.encodeSize0AGÅÔAG=function(a,b){  .‰    if(b>127){  .ˆb=(b|(2147483648))>>>0;  /N.BigEndian.PutUint32(a,b);  /.return 4;    }  /;(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(b<<24>>>24);  /Nreturn 1;    }; 0
encodeSize0encoding/binary:BigEndian 0ÇZ (*net/http/fcgi.bufWriter).Close0 ÇAH.Ptr.prototype.Close=function(){var a,b;  /˘a=this;  0  0b=a.Writer.Flush();    if(!($interfaceIsEqual(b,$ifaceNil))){  0Ca.closer.Close();  0Vreturn b;    }  0ereturn a.closer.Close();    };AH.prototype.Close=function(){return this.$val.Close();}; 0	bufWriter0net/http/fcgi:bufWriter 0Ç
net/http/fcgi.newWriter0AIwAI=function(a,b,c){var d,e;  0≈d=new AJ.Ptr(a,b,c);  0ˇe=L.NewWriterSize(d,65535);  1&return new AH.Ptr(d,e);    }; 0	newWriter0^bufio:NewWriterSizenet/http/fcgi:bufWriternet/http/fcgi:connnet/http/fcgi:streamWriter 0Ç#(*net/http/fcgi.streamWriter).Write0 ÇüAJ.Ptr.prototype.Write=function(a){var b,c,d,e;  2b=this;  2Bc=0;  2Kwhile(a.$length>0){  2^d=a.$length;  2l    if(d>65535){  2Åd=65535;    }  2î  2óe=b.c.writeRecord(b.recType,b.reqId,$subslice(a,0,d));    if(!($interfaceIsEqual(e,$ifaceNil))){  2⁄return[c,e];    }  2Ôc=c+(d)>>0;  2˘a=$subslice(a,d);    }  3return[c,$ifaceNil];    };AJ.prototype.Write=function(a){return this.$val.Write(a);}; 0streamWriter07net/http/fcgi:streamWriternet/http/fcgi:writeRecord 0Ç4#(*net/http/fcgi.streamWriter).Close0 ÅºAJ.Ptr.prototype.Close=function(){var a;  3a=this;  3kreturn a.c.writeRecord(a.recType,a.reqId,($sliceType($Uint8)).nil);    };AJ.prototype.Close=function(){return this.$val.Close();}; 0streamWriter07net/http/fcgi:streamWriternet/http/fcgi:writeRecord 0 Ç÷{"Base":13214,"Files":[{"Name":"/usr/local/go/src/pkg/net/http/fcgi/child.go","Base":1,"Size":7180,"Lines":[0,55,109,159,160,173,174,247,248,257,267,274,280,293,300,312,328,334,345,353,361,363,364,445,483,505,531,549,578,600,618,634,636,637,691,707,726,759,796,799,824,834,836,837,889,923,944,963,984,1014,1028,1038,1042,1060,1090,1104,1114,1118,1136,1170,1193,1227,1250,1272,1275,1277,1278,1322,1345,1367,1392,1416,1434,1436,1437,1490,1509,1524,1549,1601,1604,1606,1607,1649,1666,1668,1669,1722,1743,1774,1777,1801,1803,1804,1847,1867,1876,1879,1901,1938,1963,1994,2027,2063,2111,2170,2173,2174,2207,2272,2275,2276,2344,2365,2390,2392,2393,2422,2443,2474,2477,2490,2492,2493,2528,2539,2559,2561,2562,2582,2597,2619,2620,2672,2725,2727,2728,2797,2813,2839,2860,2899,2902,2904,2905,2931,2953,2969,2976,3023,3033,3037,3084,3094,3098,3101,3103,3104,3171,3172,3228,3229,3279,3292,3325,3340,3415,3465,3478,3481,3482,3503,3527,3545,3608,3659,3727,3731,3732,3754,3803,3817,3821,3853,3911,3925,3929,3968,3982,4011,4027,4040,4058,4129,4202,4232,4291,4305,4309,4329,4342,4359,4386,4407,4433,4458,4522,4565,4594,4606,4627,4632,4664,4668,4692,4760,4823,4848,4876,4894,4898,4911,4932,4986,5038,5051,5067,5134,5147,5171,5190,5204,5235,5251,5312,5333,5373,5396,5400,5413,5423,5446,5472,5516,5529,5532,5534,5535,5600,5626,5674,5691,5735,5783,5848,5858,5880,5914,5917,5928,5941,5972,5987,6048,6049,6113,6174,6229,6287,6343,6401,6440,6481,6495,6496,6516,6533,6536,6538,6539,6619,6694,6715,6772,6824,6881,6896,6912,6950,6968,6982,6986,7004,7007,7028,7061,7064,7071,7095,7113,7127,7131,7160,7175,7178],"Infos":null},{"Name":"/usr/local/go/src/pkg/net/http/fcgi/fcgi.go","Base":7182,"Size":6031,"Lines":[0,55,109,159,160,209,260,337,350,351,430,443,444,453,462,471,490,500,506,514,516,517,560,615,634,635,643,676,709,742,775,808,841,874,907,940,974,1008,1010,1011,1086,1109,1110,1118,1159,1175,1177,1178,1186,1248,1264,1276,1278,1279,1287,1317,1338,1356,1375,1377,1378,1398,1399,1420,1441,1464,1486,1508,1529,1550,1552,1553,1580,1597,1613,1632,1634,1635,1688,1712,1770,1773,1817,1840,1852,1854,1855,1912,1976,1997,1998,2072,2087,2105,2119,2160,2205,2207,2208,2239,2258,2276,2302,2303,2328,2346,2358,2360,2361,2406,2430,2432,2433,2464,2480,2504,2526,2528,2529,2550,2562,2591,2593,2594,2645,2710,2723,2726,2751,2803,2806,2864,2919,2932,2935,2947,2949,2950,2986,3020,3022,3023,3072,3148,3164,3188,3203,3237,3306,3319,3322,3365,3378,3381,3446,3459,3462,3500,3512,3514,3515,3596,3646,3699,3701,3702,3792,3814,3864,3887,3935,3937,3938,4028,4063,4085,4112,4149,4190,4234,4248,4252,4298,4312,4316,4362,4376,4380,4383,4394,4406,4408,4409,4449,4467,4481,4484,4512,4535,4553,4568,4572,4580,4616,4635,4638,4654,4656,4657,4705,4733,4745,4748,4773,4775,4776,4821,4838,4856,4894,4905,4908,4927,4937,4939,4940,5022,5033,5057,5075,5090,5092,5093,5129,5171,5190,5203,5206,5231,5233,5234,5302,5360,5399,5424,5426,5427,5507,5551,5578,5593,5610,5626,5628,5629,5683,5692,5710,5724,5744,5760,5764,5833,5851,5855,5865,5877,5880,5896,5898,5899,5938,5980,6029],"Infos":null}]}
 ˇ