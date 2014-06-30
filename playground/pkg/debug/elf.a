0É	debug/elfÇïpackage elf
import strconv "strconv"
import bytes "bytes"
import dwarf "debug/dwarf"
import binary "encoding/binary"
import errors "errors"
import fmt "fmt"
import io "io"
import os "os"
const @"".ARM_MAGIC_TRAMP_NUMBER = 0x5c000003
type @"".Class byte
func (? @"".Class) @"".GoString() (? string)
func (? @"".Class) @"".String() (? string)
func (? *@"".Class) @"".GoString() (? string)
func (? *@"".Class) @"".String() (? string)
const @"".DF_BIND_NOW @"".DynFlag = 0x8
const @"".DF_ORIGIN @"".DynFlag = 0x1
const @"".DF_STATIC_TLS @"".DynFlag = 0x10
const @"".DF_SYMBOLIC @"".DynFlag = 0x2
const @"".DF_TEXTREL @"".DynFlag = 0x4
const @"".DT_BIND_NOW @"".DynTag = 0x18
const @"".DT_DEBUG @"".DynTag = 0x15
const @"".DT_ENCODING @"".DynTag = 0x20
const @"".DT_FINI @"".DynTag = 0xd
const @"".DT_FINI_ARRAY @"".DynTag = 0x1a
const @"".DT_FINI_ARRAYSZ @"".DynTag = 0x1c
const @"".DT_FLAGS @"".DynTag = 0x1e
const @"".DT_HASH @"".DynTag = 0x4
const @"".DT_HIOS @"".DynTag = 0x6ffff000
const @"".DT_HIPROC @"".DynTag = 0x7fffffff
const @"".DT_INIT @"".DynTag = 0xc
const @"".DT_INIT_ARRAY @"".DynTag = 0x19
const @"".DT_INIT_ARRAYSZ @"".DynTag = 0x1b
const @"".DT_JMPREL @"".DynTag = 0x17
const @"".DT_LOOS @"".DynTag = 0x6000000d
const @"".DT_LOPROC @"".DynTag = 0x70000000
const @"".DT_NEEDED @"".DynTag = 0x1
const @"".DT_NULL @"".DynTag = 0x0
const @"".DT_PLTGOT @"".DynTag = 0x3
const @"".DT_PLTREL @"".DynTag = 0x14
const @"".DT_PLTRELSZ @"".DynTag = 0x2
const @"".DT_PREINIT_ARRAY @"".DynTag = 0x20
const @"".DT_PREINIT_ARRAYSZ @"".DynTag = 0x21
const @"".DT_REL @"".DynTag = 0x11
const @"".DT_RELA @"".DynTag = 0x7
const @"".DT_RELAENT @"".DynTag = 0x9
const @"".DT_RELASZ @"".DynTag = 0x8
const @"".DT_RELENT @"".DynTag = 0x13
const @"".DT_RELSZ @"".DynTag = 0x12
const @"".DT_RPATH @"".DynTag = 0xf
const @"".DT_RUNPATH @"".DynTag = 0x1d
const @"".DT_SONAME @"".DynTag = 0xe
const @"".DT_STRSZ @"".DynTag = 0xa
const @"".DT_STRTAB @"".DynTag = 0x5
const @"".DT_SYMBOLIC @"".DynTag = 0x10
const @"".DT_SYMENT @"".DynTag = 0xb
const @"".DT_SYMTAB @"".DynTag = 0x6
const @"".DT_TEXTREL @"".DynTag = 0x16
const @"".DT_VERNEED @"".DynTag = 0x6ffffffe
const @"".DT_VERNEEDNUM @"".DynTag = 0x6fffffff
const @"".DT_VERSYM @"".DynTag = 0x6ffffff0
type @"".Data byte
func (? @"".Data) @"".GoString() (? string)
func (? @"".Data) @"".String() (? string)
func (? *@"".Data) @"".GoString() (? string)
func (? *@"".Data) @"".String() (? string)
type @"".Dyn32 struct { @"".Tag int32; @"".Val uint32 }
type @"".Dyn64 struct { @"".Tag int64; @"".Val uint64 }
type @"".DynFlag int
func (? @"".DynFlag) @"".GoString() (? string)
func (? @"".DynFlag) @"".String() (? string)
func (? *@"".DynFlag) @"".GoString() (? string)
func (? *@"".DynFlag) @"".String() (? string)
type @"".DynTag int
func (? @"".DynTag) @"".GoString() (? string)
func (? @"".DynTag) @"".String() (? string)
func (? *@"".DynTag) @"".GoString() (? string)
func (? *@"".DynTag) @"".String() (? string)
const @"".EI_ABIVERSION = 0x8
const @"".EI_CLASS = 0x4
const @"".EI_DATA = 0x5
const @"".EI_NIDENT = 0x10
const @"".EI_OSABI = 0x7
const @"".EI_PAD = 0x9
const @"".EI_VERSION = 0x6
const @"".ELFCLASS32 @"".Class = 0x1
const @"".ELFCLASS64 @"".Class = 0x2
const @"".ELFCLASSNONE @"".Class = 0x0
const @"".ELFDATA2LSB @"".Data = 0x1
const @"".ELFDATA2MSB @"".Data = 0x2
const @"".ELFDATANONE @"".Data = 0x0
const @"".ELFMAG = "\u007fELF"
const @"".ELFOSABI_86OPEN @"".OSABI = 0x5
const @"".ELFOSABI_AIX @"".OSABI = 0x7
const @"".ELFOSABI_ARM @"".OSABI = 0x61
const @"".ELFOSABI_FREEBSD @"".OSABI = 0x9
const @"".ELFOSABI_HPUX @"".OSABI = 0x1
const @"".ELFOSABI_HURD @"".OSABI = 0x4
const @"".ELFOSABI_IRIX @"".OSABI = 0x8
const @"".ELFOSABI_LINUX @"".OSABI = 0x3
const @"".ELFOSABI_MODESTO @"".OSABI = 0xb
const @"".ELFOSABI_NETBSD @"".OSABI = 0x2
const @"".ELFOSABI_NONE @"".OSABI = 0x0
const @"".ELFOSABI_NSK @"".OSABI = 0xe
const @"".ELFOSABI_OPENBSD @"".OSABI = 0xc
const @"".ELFOSABI_OPENVMS @"".OSABI = 0xd
const @"".ELFOSABI_SOLARIS @"".OSABI = 0x6
const @"".ELFOSABI_STANDALONE @"".OSABI = 0xff
const @"".ELFOSABI_TRU64 @"".OSABI = 0xa
const @"".EM_386 @"".Machine = 0x3
const @"".EM_486 @"".Machine = 0x6
const @"".EM_68HC12 @"".Machine = 0x35
const @"".EM_68K @"".Machine = 0x4
const @"".EM_860 @"".Machine = 0x7
const @"".EM_88K @"".Machine = 0x5
const @"".EM_960 @"".Machine = 0x13
const @"".EM_ALPHA @"".Machine = 0x9026
const @"".EM_ALPHA_STD @"".Machine = 0x29
const @"".EM_ARC @"".Machine = 0x2d
const @"".EM_ARM @"".Machine = 0x28
const @"".EM_COLDFIRE @"".Machine = 0x34
const @"".EM_FR20 @"".Machine = 0x25
const @"".EM_H8S @"".Machine = 0x30
const @"".EM_H8_300 @"".Machine = 0x2e
const @"".EM_H8_300H @"".Machine = 0x2f
const @"".EM_H8_500 @"".Machine = 0x31
const @"".EM_IA_64 @"".Machine = 0x32
const @"".EM_M32 @"".Machine = 0x1
const @"".EM_ME16 @"".Machine = 0x3b
const @"".EM_MIPS @"".Machine = 0x8
const @"".EM_MIPS_RS3_LE @"".Machine = 0xa
const @"".EM_MIPS_RS4_BE @"".Machine = 0xa
const @"".EM_MIPS_X @"".Machine = 0x33
const @"".EM_MMA @"".Machine = 0x36
const @"".EM_NCPU @"".Machine = 0x38
const @"".EM_NDR1 @"".Machine = 0x39
const @"".EM_NONE @"".Machine = 0x0
const @"".EM_PARISC @"".Machine = 0xf
const @"".EM_PCP @"".Machine = 0x37
const @"".EM_PPC @"".Machine = 0x14
const @"".EM_PPC64 @"".Machine = 0x15
const @"".EM_RCE @"".Machine = 0x27
const @"".EM_RH32 @"".Machine = 0x26
const @"".EM_S370 @"".Machine = 0x9
const @"".EM_S390 @"".Machine = 0x16
const @"".EM_SH @"".Machine = 0x2a
const @"".EM_SPARC @"".Machine = 0x2
const @"".EM_SPARC32PLUS @"".Machine = 0x12
const @"".EM_SPARCV9 @"".Machine = 0x2b
const @"".EM_ST100 @"".Machine = 0x3c
const @"".EM_STARCORE @"".Machine = 0x3a
const @"".EM_TINYJ @"".Machine = 0x3d
const @"".EM_TRICORE @"".Machine = 0x2c
const @"".EM_V800 @"".Machine = 0x24
const @"".EM_VPP500 @"".Machine = 0x11
const @"".EM_X86_64 @"".Machine = 0x3e
const @"".ET_CORE @"".Type = 0x4
const @"".ET_DYN @"".Type = 0x3
const @"".ET_EXEC @"".Type = 0x2
const @"".ET_HIOS @"".Type = 0xfeff
const @"".ET_HIPROC @"".Type = 0xffff
const @"".ET_LOOS @"".Type = 0xfe00
const @"".ET_LOPROC @"".Type = 0xff00
const @"".ET_NONE @"".Type = 0x0
const @"".ET_REL @"".Type = 0x1
const @"".EV_CURRENT @"".Version = 0x1
const @"".EV_NONE @"".Version = 0x0
type @"".File struct { ? @"".FileHeader; @"".Sections []*@"".Section; @"".Progs []*@"".Prog; @"".closer @"io".Closer; @"".gnuNeed []@"".verneed; @"".gnuVersym []byte }
func (? *@"".File) @"".Close() (? error)
func (? *@"".File) @"".DWARF() (? *@"debug/dwarf".Data, ? error)
func (? *@"".File) @"".DynString(@"".tag @"".DynTag) (? []string, ? error)
func (? *@"".File) @"".ImportedLibraries() (? []string, ? error)
func (? *@"".File) @"".ImportedSymbols() (? []@"".ImportedSymbol, ? error)
func (? *@"".File) @"".Section(@"".name string) (? *@"".Section)
func (? *@"".File) @"".SectionByType(@"".typ @"".SectionType) (? *@"".Section)
func (? *@"".File) @"".Symbols() (? []@"".Symbol, ? error)
func (? *@"".File) @"".applyRelocations(@"".dst []byte, @"".rels []byte) (? error)
func (? *@"".File) @"".applyRelocations386(@"".dst []byte, @"".rels []byte) (? error)
func (? *@"".File) @"".applyRelocationsAMD64(@"".dst []byte, @"".rels []byte) (? error)
func (? *@"".File) @"".getSymbols(@"".typ @"".SectionType) (? []@"".Symbol, ? []byte, ? error)
func (? *@"".File) @"".getSymbols32(@"".typ @"".SectionType) (? []@"".Symbol, ? []byte, ? error)
func (? *@"".File) @"".getSymbols64(@"".typ @"".SectionType) (? []@"".Symbol, ? []byte, ? error)
func (? *@"".File) @"".gnuVersion(@"".i int, @"".sym *@"".ImportedSymbol) ()
func (? *@"".File) @"".gnuVersionInit(@"".str []byte) ()
func (? *@"".File) @"".stringTable(@"".link uint32) (? []byte, ? error)
type @"".FileHeader struct { @"".Class @"".Class; @"".Data @"".Data; @"".Version @"".Version; @"".OSABI @"".OSABI; @"".ABIVersion uint8; @"".ByteOrder @"encoding/binary".ByteOrder; @"".Type @"".Type; @"".Machine @"".Machine; @"".Entry uint64 }
type @"".FormatError struct { @"".off int64; @"".msg string; @"".val interface {  } }
func (? *@"".FormatError) @"".Error() (? string)
type @"".Header32 struct { @"".Ident [16]byte; @"".Type uint16; @"".Machine uint16; @"".Version uint32; @"".Entry uint32; @"".Phoff uint32; @"".Shoff uint32; @"".Flags uint32; @"".Ehsize uint16; @"".Phentsize uint16; @"".Phnum uint16; @"".Shentsize uint16; @"".Shnum uint16; @"".Shstrndx uint16 }
type @"".Header64 struct { @"".Ident [16]byte; @"".Type uint16; @"".Machine uint16; @"".Version uint32; @"".Entry uint64; @"".Phoff uint64; @"".Shoff uint64; @"".Flags uint32; @"".Ehsize uint16; @"".Phentsize uint16; @"".Phnum uint16; @"".Shentsize uint16; @"".Shnum uint16; @"".Shstrndx uint16 }
type @"".ImportedSymbol struct { @"".Name string; @"".Version string; @"".Library string }
type @"".Machine uint16
func (? @"".Machine) @"".GoString() (? string)
func (? @"".Machine) @"".String() (? string)
func (? *@"".Machine) @"".GoString() (? string)
func (? *@"".Machine) @"".String() (? string)
const @"".NT_FPREGSET @"".NType = 0x2
const @"".NT_PRPSINFO @"".NType = 0x3
const @"".NT_PRSTATUS @"".NType = 0x1
type @"".NType int
func (? @"".NType) @"".GoString() (? string)
func (? @"".NType) @"".String() (? string)
func (? *@"".NType) @"".GoString() (? string)
func (? *@"".NType) @"".String() (? string)
func @"".NewFile(@"".r @"io".ReaderAt) (? *@"".File, ? error)
type @"".OSABI byte
func (? @"".OSABI) @"".GoString() (? string)
func (? @"".OSABI) @"".String() (? string)
func (? *@"".OSABI) @"".GoString() (? string)
func (? *@"".OSABI) @"".String() (? string)
func @"".Open(@"".name string) (? *@"".File, ? error)
const @"".PF_MASKOS @"".ProgFlag = 0xff00000
const @"".PF_MASKPROC @"".ProgFlag = 0xf0000000
const @"".PF_R @"".ProgFlag = 0x4
const @"".PF_W @"".ProgFlag = 0x2
const @"".PF_X @"".ProgFlag = 0x1
const @"".PT_DYNAMIC @"".ProgType = 0x2
const @"".PT_HIOS @"".ProgType = 0x6fffffff
const @"".PT_HIPROC @"".ProgType = 0x7fffffff
const @"".PT_INTERP @"".ProgType = 0x3
const @"".PT_LOAD @"".ProgType = 0x1
const @"".PT_LOOS @"".ProgType = 0x60000000
const @"".PT_LOPROC @"".ProgType = 0x70000000
const @"".PT_NOTE @"".ProgType = 0x4
const @"".PT_NULL @"".ProgType = 0x0
const @"".PT_PHDR @"".ProgType = 0x6
const @"".PT_SHLIB @"".ProgType = 0x5
const @"".PT_TLS @"".ProgType = 0x7
type @"".Prog struct { ? @"".ProgHeader; ? @"io".ReaderAt; @"".sr *@"io".SectionReader }
func (? *@"".Prog) @"".Open() (? @"io".ReadSeeker)
type @"".Prog32 struct { @"".Type uint32; @"".Off uint32; @"".Vaddr uint32; @"".Paddr uint32; @"".Filesz uint32; @"".Memsz uint32; @"".Flags uint32; @"".Align uint32 }
type @"".Prog64 struct { @"".Type uint32; @"".Flags uint32; @"".Off uint64; @"".Vaddr uint64; @"".Paddr uint64; @"".Filesz uint64; @"".Memsz uint64; @"".Align uint64 }
type @"".ProgFlag uint32
func (? @"".ProgFlag) @"".GoString() (? string)
func (? @"".ProgFlag) @"".String() (? string)
func (? *@"".ProgFlag) @"".GoString() (? string)
func (? *@"".ProgFlag) @"".String() (? string)
type @"".ProgHeader struct { @"".Type @"".ProgType; @"".Flags @"".ProgFlag; @"".Off uint64; @"".Vaddr uint64; @"".Paddr uint64; @"".Filesz uint64; @"".Memsz uint64; @"".Align uint64 }
type @"".ProgType int
func (? @"".ProgType) @"".GoString() (? string)
func (? @"".ProgType) @"".String() (? string)
func (? *@"".ProgType) @"".GoString() (? string)
func (? *@"".ProgType) @"".String() (? string)
type @"".R_386 int
func (? @"".R_386) @"".GoString() (? string)
func (? @"".R_386) @"".String() (? string)
func (? *@"".R_386) @"".GoString() (? string)
func (? *@"".R_386) @"".String() (? string)
const @"".R_386_32 @"".R_386 = 0x1
const @"".R_386_COPY @"".R_386 = 0x5
const @"".R_386_GLOB_DAT @"".R_386 = 0x6
const @"".R_386_GOT32 @"".R_386 = 0x3
const @"".R_386_GOTOFF @"".R_386 = 0x9
const @"".R_386_GOTPC @"".R_386 = 0xa
const @"".R_386_JMP_SLOT @"".R_386 = 0x7
const @"".R_386_NONE @"".R_386 = 0x0
const @"".R_386_PC32 @"".R_386 = 0x2
const @"".R_386_PLT32 @"".R_386 = 0x4
const @"".R_386_RELATIVE @"".R_386 = 0x8
const @"".R_386_TLS_DTPMOD32 @"".R_386 = 0x23
const @"".R_386_TLS_DTPOFF32 @"".R_386 = 0x24
const @"".R_386_TLS_GD @"".R_386 = 0x12
const @"".R_386_TLS_GD_32 @"".R_386 = 0x18
const @"".R_386_TLS_GD_CALL @"".R_386 = 0x1a
const @"".R_386_TLS_GD_POP @"".R_386 = 0x1b
const @"".R_386_TLS_GD_PUSH @"".R_386 = 0x19
const @"".R_386_TLS_GOTIE @"".R_386 = 0x10
const @"".R_386_TLS_IE @"".R_386 = 0xf
const @"".R_386_TLS_IE_32 @"".R_386 = 0x21
const @"".R_386_TLS_LDM @"".R_386 = 0x13
const @"".R_386_TLS_LDM_32 @"".R_386 = 0x1c
const @"".R_386_TLS_LDM_CALL @"".R_386 = 0x1e
const @"".R_386_TLS_LDM_POP @"".R_386 = 0x1f
const @"".R_386_TLS_LDM_PUSH @"".R_386 = 0x1d
const @"".R_386_TLS_LDO_32 @"".R_386 = 0x20
const @"".R_386_TLS_LE @"".R_386 = 0x11
const @"".R_386_TLS_LE_32 @"".R_386 = 0x22
const @"".R_386_TLS_TPOFF @"".R_386 = 0xe
const @"".R_386_TLS_TPOFF32 @"".R_386 = 0x25
type @"".R_ALPHA int
func (? @"".R_ALPHA) @"".GoString() (? string)
func (? @"".R_ALPHA) @"".String() (? string)
func (? *@"".R_ALPHA) @"".GoString() (? string)
func (? *@"".R_ALPHA) @"".String() (? string)
const @"".R_ALPHA_BRADDR @"".R_ALPHA = 0x7
const @"".R_ALPHA_COPY @"".R_ALPHA = 0x18
const @"".R_ALPHA_GLOB_DAT @"".R_ALPHA = 0x19
const @"".R_ALPHA_GPDISP @"".R_ALPHA = 0x6
const @"".R_ALPHA_GPREL32 @"".R_ALPHA = 0x3
const @"".R_ALPHA_GPRELHIGH @"".R_ALPHA = 0x11
const @"".R_ALPHA_GPRELLOW @"".R_ALPHA = 0x12
const @"".R_ALPHA_GPVALUE @"".R_ALPHA = 0x10
const @"".R_ALPHA_HINT @"".R_ALPHA = 0x8
const @"".R_ALPHA_IMMED_BR_HI32 @"".R_ALPHA = 0x16
const @"".R_ALPHA_IMMED_GP_16 @"".R_ALPHA = 0x13
const @"".R_ALPHA_IMMED_GP_HI32 @"".R_ALPHA = 0x14
const @"".R_ALPHA_IMMED_LO32 @"".R_ALPHA = 0x17
const @"".R_ALPHA_IMMED_SCN_HI32 @"".R_ALPHA = 0x15
const @"".R_ALPHA_JMP_SLOT @"".R_ALPHA = 0x1a
const @"".R_ALPHA_LITERAL @"".R_ALPHA = 0x4
const @"".R_ALPHA_LITUSE @"".R_ALPHA = 0x5
const @"".R_ALPHA_NONE @"".R_ALPHA = 0x0
const @"".R_ALPHA_OP_PRSHIFT @"".R_ALPHA = 0xf
const @"".R_ALPHA_OP_PSUB @"".R_ALPHA = 0xe
const @"".R_ALPHA_OP_PUSH @"".R_ALPHA = 0xc
const @"".R_ALPHA_OP_STORE @"".R_ALPHA = 0xd
const @"".R_ALPHA_REFLONG @"".R_ALPHA = 0x1
const @"".R_ALPHA_REFQUAD @"".R_ALPHA = 0x2
const @"".R_ALPHA_RELATIVE @"".R_ALPHA = 0x1b
const @"".R_ALPHA_SREL16 @"".R_ALPHA = 0x9
const @"".R_ALPHA_SREL32 @"".R_ALPHA = 0xa
const @"".R_ALPHA_SREL64 @"".R_ALPHA = 0xb
type @"".R_ARM int
func (? @"".R_ARM) @"".GoString() (? string)
func (? @"".R_ARM) @"".String() (? string)
func (? *@"".R_ARM) @"".GoString() (? string)
func (? *@"".R_ARM) @"".String() (? string)
const @"".R_ARM_ABS12 @"".R_ARM = 0x6
const @"".R_ARM_ABS16 @"".R_ARM = 0x5
const @"".R_ARM_ABS32 @"".R_ARM = 0x2
const @"".R_ARM_ABS8 @"".R_ARM = 0x8
const @"".R_ARM_AMP_VCALL9 @"".R_ARM = 0xc
const @"".R_ARM_COPY @"".R_ARM = 0x14
const @"".R_ARM_GLOB_DAT @"".R_ARM = 0x15
const @"".R_ARM_GNU_VTENTRY @"".R_ARM = 0x64
const @"".R_ARM_GNU_VTINHERIT @"".R_ARM = 0x65
const @"".R_ARM_GOT32 @"".R_ARM = 0x1a
const @"".R_ARM_GOTOFF @"".R_ARM = 0x18
const @"".R_ARM_GOTPC @"".R_ARM = 0x19
const @"".R_ARM_JUMP_SLOT @"".R_ARM = 0x16
const @"".R_ARM_NONE @"".R_ARM = 0x0
const @"".R_ARM_PC13 @"".R_ARM = 0x4
const @"".R_ARM_PC24 @"".R_ARM = 0x1
const @"".R_ARM_PLT32 @"".R_ARM = 0x1b
const @"".R_ARM_RABS32 @"".R_ARM = 0xfd
const @"".R_ARM_RBASE @"".R_ARM = 0xff
const @"".R_ARM_REL32 @"".R_ARM = 0x3
const @"".R_ARM_RELATIVE @"".R_ARM = 0x17
const @"".R_ARM_RPC24 @"".R_ARM = 0xfe
const @"".R_ARM_RREL32 @"".R_ARM = 0xfc
const @"".R_ARM_RSBREL32 @"".R_ARM = 0xfa
const @"".R_ARM_SBREL32 @"".R_ARM = 0x9
const @"".R_ARM_SWI24 @"".R_ARM = 0xd
const @"".R_ARM_THM_ABS5 @"".R_ARM = 0x7
const @"".R_ARM_THM_PC22 @"".R_ARM = 0xa
const @"".R_ARM_THM_PC8 @"".R_ARM = 0xb
const @"".R_ARM_THM_RPC22 @"".R_ARM = 0xfb
const @"".R_ARM_THM_SWI8 @"".R_ARM = 0xe
const @"".R_ARM_THM_XPC22 @"".R_ARM = 0x10
const @"".R_ARM_XPC25 @"".R_ARM = 0xf
func @"".R_INFO(@"".sym uint32, @"".typ uint32) (? uint64)
func @"".R_INFO32(@"".sym uint32, @"".typ uint32) (? uint32)
type @"".R_PPC int
func (? @"".R_PPC) @"".GoString() (? string)
func (? @"".R_PPC) @"".String() (? string)
func (? *@"".R_PPC) @"".GoString() (? string)
func (? *@"".R_PPC) @"".String() (? string)
const @"".R_PPC_ADDR14 @"".R_PPC = 0x7
const @"".R_PPC_ADDR14_BRNTAKEN @"".R_PPC = 0x9
const @"".R_PPC_ADDR14_BRTAKEN @"".R_PPC = 0x8
const @"".R_PPC_ADDR16 @"".R_PPC = 0x3
const @"".R_PPC_ADDR16_HA @"".R_PPC = 0x6
const @"".R_PPC_ADDR16_HI @"".R_PPC = 0x5
const @"".R_PPC_ADDR16_LO @"".R_PPC = 0x4
const @"".R_PPC_ADDR24 @"".R_PPC = 0x2
const @"".R_PPC_ADDR32 @"".R_PPC = 0x1
const @"".R_PPC_COPY @"".R_PPC = 0x13
const @"".R_PPC_DTPMOD32 @"".R_PPC = 0x44
const @"".R_PPC_DTPREL16 @"".R_PPC = 0x4a
const @"".R_PPC_DTPREL16_HA @"".R_PPC = 0x4d
const @"".R_PPC_DTPREL16_HI @"".R_PPC = 0x4c
const @"".R_PPC_DTPREL16_LO @"".R_PPC = 0x4b
const @"".R_PPC_DTPREL32 @"".R_PPC = 0x4e
const @"".R_PPC_EMB_BIT_FLD @"".R_PPC = 0x73
const @"".R_PPC_EMB_MRKREF @"".R_PPC = 0x6e
const @"".R_PPC_EMB_NADDR16 @"".R_PPC = 0x66
const @"".R_PPC_EMB_NADDR16_HA @"".R_PPC = 0x69
const @"".R_PPC_EMB_NADDR16_HI @"".R_PPC = 0x68
const @"".R_PPC_EMB_NADDR16_LO @"".R_PPC = 0x67
const @"".R_PPC_EMB_NADDR32 @"".R_PPC = 0x65
const @"".R_PPC_EMB_RELSDA @"".R_PPC = 0x74
const @"".R_PPC_EMB_RELSEC16 @"".R_PPC = 0x6f
const @"".R_PPC_EMB_RELST_HA @"".R_PPC = 0x72
const @"".R_PPC_EMB_RELST_HI @"".R_PPC = 0x71
const @"".R_PPC_EMB_RELST_LO @"".R_PPC = 0x70
const @"".R_PPC_EMB_SDA21 @"".R_PPC = 0x6d
const @"".R_PPC_EMB_SDA2I16 @"".R_PPC = 0x6b
const @"".R_PPC_EMB_SDA2REL @"".R_PPC = 0x6c
const @"".R_PPC_EMB_SDAI16 @"".R_PPC = 0x6a
const @"".R_PPC_GLOB_DAT @"".R_PPC = 0x14
const @"".R_PPC_GOT16 @"".R_PPC = 0xe
const @"".R_PPC_GOT16_HA @"".R_PPC = 0x11
const @"".R_PPC_GOT16_HI @"".R_PPC = 0x10
const @"".R_PPC_GOT16_LO @"".R_PPC = 0xf
const @"".R_PPC_GOT_TLSGD16 @"".R_PPC = 0x4f
const @"".R_PPC_GOT_TLSGD16_HA @"".R_PPC = 0x52
const @"".R_PPC_GOT_TLSGD16_HI @"".R_PPC = 0x51
const @"".R_PPC_GOT_TLSGD16_LO @"".R_PPC = 0x50
const @"".R_PPC_GOT_TLSLD16 @"".R_PPC = 0x53
const @"".R_PPC_GOT_TLSLD16_HA @"".R_PPC = 0x56
const @"".R_PPC_GOT_TLSLD16_HI @"".R_PPC = 0x55
const @"".R_PPC_GOT_TLSLD16_LO @"".R_PPC = 0x54
const @"".R_PPC_GOT_TPREL16 @"".R_PPC = 0x57
const @"".R_PPC_GOT_TPREL16_HA @"".R_PPC = 0x5a
const @"".R_PPC_GOT_TPREL16_HI @"".R_PPC = 0x59
const @"".R_PPC_GOT_TPREL16_LO @"".R_PPC = 0x58
const @"".R_PPC_JMP_SLOT @"".R_PPC = 0x15
const @"".R_PPC_LOCAL24PC @"".R_PPC = 0x17
const @"".R_PPC_NONE @"".R_PPC = 0x0
const @"".R_PPC_PLT16_HA @"".R_PPC = 0x1f
const @"".R_PPC_PLT16_HI @"".R_PPC = 0x1e
const @"".R_PPC_PLT16_LO @"".R_PPC = 0x1d
const @"".R_PPC_PLT32 @"".R_PPC = 0x1b
const @"".R_PPC_PLTREL24 @"".R_PPC = 0x12
const @"".R_PPC_PLTREL32 @"".R_PPC = 0x1c
const @"".R_PPC_REL14 @"".R_PPC = 0xb
const @"".R_PPC_REL14_BRNTAKEN @"".R_PPC = 0xd
const @"".R_PPC_REL14_BRTAKEN @"".R_PPC = 0xc
const @"".R_PPC_REL24 @"".R_PPC = 0xa
const @"".R_PPC_REL32 @"".R_PPC = 0x1a
const @"".R_PPC_RELATIVE @"".R_PPC = 0x16
const @"".R_PPC_SDAREL16 @"".R_PPC = 0x20
const @"".R_PPC_SECTOFF @"".R_PPC = 0x21
const @"".R_PPC_SECTOFF_HA @"".R_PPC = 0x24
const @"".R_PPC_SECTOFF_HI @"".R_PPC = 0x23
const @"".R_PPC_SECTOFF_LO @"".R_PPC = 0x22
const @"".R_PPC_TLS @"".R_PPC = 0x43
const @"".R_PPC_TPREL16 @"".R_PPC = 0x45
const @"".R_PPC_TPREL16_HA @"".R_PPC = 0x48
const @"".R_PPC_TPREL16_HI @"".R_PPC = 0x47
const @"".R_PPC_TPREL16_LO @"".R_PPC = 0x46
const @"".R_PPC_TPREL32 @"".R_PPC = 0x49
const @"".R_PPC_UADDR16 @"".R_PPC = 0x19
const @"".R_PPC_UADDR32 @"".R_PPC = 0x18
type @"".R_SPARC int
func (? @"".R_SPARC) @"".GoString() (? string)
func (? @"".R_SPARC) @"".String() (? string)
func (? *@"".R_SPARC) @"".GoString() (? string)
func (? *@"".R_SPARC) @"".String() (? string)
const @"".R_SPARC_10 @"".R_SPARC = 0x1e
const @"".R_SPARC_11 @"".R_SPARC = 0x1f
const @"".R_SPARC_13 @"".R_SPARC = 0xb
const @"".R_SPARC_16 @"".R_SPARC = 0x2
const @"".R_SPARC_22 @"".R_SPARC = 0xa
const @"".R_SPARC_32 @"".R_SPARC = 0x3
const @"".R_SPARC_5 @"".R_SPARC = 0x2c
const @"".R_SPARC_6 @"".R_SPARC = 0x2d
const @"".R_SPARC_64 @"".R_SPARC = 0x20
const @"".R_SPARC_7 @"".R_SPARC = 0x2b
const @"".R_SPARC_8 @"".R_SPARC = 0x1
const @"".R_SPARC_COPY @"".R_SPARC = 0x13
const @"".R_SPARC_DISP16 @"".R_SPARC = 0x5
const @"".R_SPARC_DISP32 @"".R_SPARC = 0x6
const @"".R_SPARC_DISP64 @"".R_SPARC = 0x2e
const @"".R_SPARC_DISP8 @"".R_SPARC = 0x4
const @"".R_SPARC_GLOB_DAT @"".R_SPARC = 0x14
const @"".R_SPARC_GLOB_JMP @"".R_SPARC = 0x2a
const @"".R_SPARC_GOT10 @"".R_SPARC = 0xd
const @"".R_SPARC_GOT13 @"".R_SPARC = 0xe
const @"".R_SPARC_GOT22 @"".R_SPARC = 0xf
const @"".R_SPARC_H44 @"".R_SPARC = 0x32
const @"".R_SPARC_HH22 @"".R_SPARC = 0x22
const @"".R_SPARC_HI22 @"".R_SPARC = 0x9
const @"".R_SPARC_HIPLT22 @"".R_SPARC = 0x19
const @"".R_SPARC_HIX22 @"".R_SPARC = 0x30
const @"".R_SPARC_HM10 @"".R_SPARC = 0x23
const @"".R_SPARC_JMP_SLOT @"".R_SPARC = 0x15
const @"".R_SPARC_L44 @"".R_SPARC = 0x34
const @"".R_SPARC_LM22 @"".R_SPARC = 0x24
const @"".R_SPARC_LO10 @"".R_SPARC = 0xc
const @"".R_SPARC_LOPLT10 @"".R_SPARC = 0x1a
const @"".R_SPARC_LOX10 @"".R_SPARC = 0x31
const @"".R_SPARC_M44 @"".R_SPARC = 0x33
const @"".R_SPARC_NONE @"".R_SPARC = 0x0
const @"".R_SPARC_OLO10 @"".R_SPARC = 0x21
const @"".R_SPARC_PC10 @"".R_SPARC = 0x10
const @"".R_SPARC_PC22 @"".R_SPARC = 0x11
const @"".R_SPARC_PCPLT10 @"".R_SPARC = 0x1d
const @"".R_SPARC_PCPLT22 @"".R_SPARC = 0x1c
const @"".R_SPARC_PCPLT32 @"".R_SPARC = 0x1b
const @"".R_SPARC_PC_HH22 @"".R_SPARC = 0x25
const @"".R_SPARC_PC_HM10 @"".R_SPARC = 0x26
const @"".R_SPARC_PC_LM22 @"".R_SPARC = 0x27
const @"".R_SPARC_PLT32 @"".R_SPARC = 0x18
const @"".R_SPARC_PLT64 @"".R_SPARC = 0x2f
const @"".R_SPARC_REGISTER @"".R_SPARC = 0x35
const @"".R_SPARC_RELATIVE @"".R_SPARC = 0x16
const @"".R_SPARC_UA16 @"".R_SPARC = 0x37
const @"".R_SPARC_UA32 @"".R_SPARC = 0x17
const @"".R_SPARC_UA64 @"".R_SPARC = 0x36
const @"".R_SPARC_WDISP16 @"".R_SPARC = 0x28
const @"".R_SPARC_WDISP19 @"".R_SPARC = 0x29
const @"".R_SPARC_WDISP22 @"".R_SPARC = 0x8
const @"".R_SPARC_WDISP30 @"".R_SPARC = 0x7
const @"".R_SPARC_WPLT30 @"".R_SPARC = 0x12
func @"".R_SYM32(@"".info uint32) (? uint32)
func @"".R_SYM64(@"".info uint64) (? uint32)
func @"".R_TYPE32(@"".info uint32) (? uint32)
func @"".R_TYPE64(@"".info uint64) (? uint32)
type @"".R_X86_64 int
func (? @"".R_X86_64) @"".GoString() (? string)
func (? @"".R_X86_64) @"".String() (? string)
func (? *@"".R_X86_64) @"".GoString() (? string)
func (? *@"".R_X86_64) @"".String() (? string)
const @"".R_X86_64_16 @"".R_X86_64 = 0xc
const @"".R_X86_64_32 @"".R_X86_64 = 0xa
const @"".R_X86_64_32S @"".R_X86_64 = 0xb
const @"".R_X86_64_64 @"".R_X86_64 = 0x1
const @"".R_X86_64_8 @"".R_X86_64 = 0xe
const @"".R_X86_64_COPY @"".R_X86_64 = 0x5
const @"".R_X86_64_DTPMOD64 @"".R_X86_64 = 0x10
const @"".R_X86_64_DTPOFF32 @"".R_X86_64 = 0x15
const @"".R_X86_64_DTPOFF64 @"".R_X86_64 = 0x11
const @"".R_X86_64_GLOB_DAT @"".R_X86_64 = 0x6
const @"".R_X86_64_GOT32 @"".R_X86_64 = 0x3
const @"".R_X86_64_GOTPCREL @"".R_X86_64 = 0x9
const @"".R_X86_64_GOTTPOFF @"".R_X86_64 = 0x16
const @"".R_X86_64_JMP_SLOT @"".R_X86_64 = 0x7
const @"".R_X86_64_NONE @"".R_X86_64 = 0x0
const @"".R_X86_64_PC16 @"".R_X86_64 = 0xd
const @"".R_X86_64_PC32 @"".R_X86_64 = 0x2
const @"".R_X86_64_PC8 @"".R_X86_64 = 0xf
const @"".R_X86_64_PLT32 @"".R_X86_64 = 0x4
const @"".R_X86_64_RELATIVE @"".R_X86_64 = 0x8
const @"".R_X86_64_TLSGD @"".R_X86_64 = 0x13
const @"".R_X86_64_TLSLD @"".R_X86_64 = 0x14
const @"".R_X86_64_TPOFF32 @"".R_X86_64 = 0x17
const @"".R_X86_64_TPOFF64 @"".R_X86_64 = 0x12
type @"".Rel32 struct { @"".Off uint32; @"".Info uint32 }
type @"".Rel64 struct { @"".Off uint64; @"".Info uint64 }
type @"".Rela32 struct { @"".Off uint32; @"".Info uint32; @"".Addend int32 }
type @"".Rela64 struct { @"".Off uint64; @"".Info uint64; @"".Addend int64 }
const @"".SHF_ALLOC @"".SectionFlag = 0x2
const @"".SHF_EXECINSTR @"".SectionFlag = 0x4
const @"".SHF_GROUP @"".SectionFlag = 0x200
const @"".SHF_INFO_LINK @"".SectionFlag = 0x40
const @"".SHF_LINK_ORDER @"".SectionFlag = 0x80
const @"".SHF_MASKOS @"".SectionFlag = 0xff00000
const @"".SHF_MASKPROC @"".SectionFlag = 0xf0000000
const @"".SHF_MERGE @"".SectionFlag = 0x10
const @"".SHF_OS_NONCONFORMING @"".SectionFlag = 0x100
const @"".SHF_STRINGS @"".SectionFlag = 0x20
const @"".SHF_TLS @"".SectionFlag = 0x400
const @"".SHF_WRITE @"".SectionFlag = 0x1
const @"".SHN_ABS @"".SectionIndex = 0xfff1
const @"".SHN_COMMON @"".SectionIndex = 0xfff2
const @"".SHN_HIOS @"".SectionIndex = 0xff3f
const @"".SHN_HIPROC @"".SectionIndex = 0xff1f
const @"".SHN_HIRESERVE @"".SectionIndex = 0xffff
const @"".SHN_LOOS @"".SectionIndex = 0xff20
const @"".SHN_LOPROC @"".SectionIndex = 0xff00
const @"".SHN_LORESERVE @"".SectionIndex = 0xff00
const @"".SHN_UNDEF @"".SectionIndex = 0x0
const @"".SHN_XINDEX @"".SectionIndex = 0xffff
const @"".SHT_DYNAMIC @"".SectionType = 0x6
const @"".SHT_DYNSYM @"".SectionType = 0xb
const @"".SHT_FINI_ARRAY @"".SectionType = 0xf
const @"".SHT_GNU_ATTRIBUTES @"".SectionType = 0x6ffffff5
const @"".SHT_GNU_HASH @"".SectionType = 0x6ffffff6
const @"".SHT_GNU_LIBLIST @"".SectionType = 0x6ffffff7
const @"".SHT_GNU_VERDEF @"".SectionType = 0x6ffffffd
const @"".SHT_GNU_VERNEED @"".SectionType = 0x6ffffffe
const @"".SHT_GNU_VERSYM @"".SectionType = 0x6fffffff
const @"".SHT_GROUP @"".SectionType = 0x11
const @"".SHT_HASH @"".SectionType = 0x5
const @"".SHT_HIOS @"".SectionType = 0x6fffffff
const @"".SHT_HIPROC @"".SectionType = 0x7fffffff
const @"".SHT_HIUSER @"".SectionType = 0xffffffff
const @"".SHT_INIT_ARRAY @"".SectionType = 0xe
const @"".SHT_LOOS @"".SectionType = 0x60000000
const @"".SHT_LOPROC @"".SectionType = 0x70000000
const @"".SHT_LOUSER @"".SectionType = 0x80000000
const @"".SHT_NOBITS @"".SectionType = 0x8
const @"".SHT_NOTE @"".SectionType = 0x7
const @"".SHT_NULL @"".SectionType = 0x0
const @"".SHT_PREINIT_ARRAY @"".SectionType = 0x10
const @"".SHT_PROGBITS @"".SectionType = 0x1
const @"".SHT_REL @"".SectionType = 0x9
const @"".SHT_RELA @"".SectionType = 0x4
const @"".SHT_SHLIB @"".SectionType = 0xa
const @"".SHT_STRTAB @"".SectionType = 0x3
const @"".SHT_SYMTAB @"".SectionType = 0x2
const @"".SHT_SYMTAB_SHNDX @"".SectionType = 0x12
const @"".STB_GLOBAL @"".SymBind = 0x1
const @"".STB_HIOS @"".SymBind = 0xc
const @"".STB_HIPROC @"".SymBind = 0xf
const @"".STB_LOCAL @"".SymBind = 0x0
const @"".STB_LOOS @"".SymBind = 0xa
const @"".STB_LOPROC @"".SymBind = 0xd
const @"".STB_WEAK @"".SymBind = 0x2
const @"".STT_COMMON @"".SymType = 0x5
const @"".STT_FILE @"".SymType = 0x4
const @"".STT_FUNC @"".SymType = 0x2
const @"".STT_HIOS @"".SymType = 0xc
const @"".STT_HIPROC @"".SymType = 0xf
const @"".STT_LOOS @"".SymType = 0xa
const @"".STT_LOPROC @"".SymType = 0xd
const @"".STT_NOTYPE @"".SymType = 0x0
const @"".STT_OBJECT @"".SymType = 0x1
const @"".STT_SECTION @"".SymType = 0x3
const @"".STT_TLS @"".SymType = 0x6
const @"".STV_DEFAULT @"".SymVis = 0x0
const @"".STV_HIDDEN @"".SymVis = 0x2
const @"".STV_INTERNAL @"".SymVis = 0x1
const @"".STV_PROTECTED @"".SymVis = 0x3
func @"".ST_BIND(@"".info uint8) (? @"".SymBind)
func @"".ST_INFO(@"".bind @"".SymBind, @"".typ @"".SymType) (? uint8)
func @"".ST_TYPE(@"".info uint8) (? @"".SymType)
func @"".ST_VISIBILITY(@"".other uint8) (? @"".SymVis)
type @"".Section struct { ? @"".SectionHeader; ? @"io".ReaderAt; @"".sr *@"io".SectionReader }
func (? *@"".Section) @"".Data() (? []byte, ? error)
func (? *@"".Section) @"".Open() (? @"io".ReadSeeker)
type @"".Section32 struct { @"".Name uint32; @"".Type uint32; @"".Flags uint32; @"".Addr uint32; @"".Off uint32; @"".Size uint32; @"".Link uint32; @"".Info uint32; @"".Addralign uint32; @"".Entsize uint32 }
type @"".Section64 struct { @"".Name uint32; @"".Type uint32; @"".Flags uint64; @"".Addr uint64; @"".Off uint64; @"".Size uint64; @"".Link uint32; @"".Info uint32; @"".Addralign uint64; @"".Entsize uint64 }
type @"".SectionFlag uint32
func (? @"".SectionFlag) @"".GoString() (? string)
func (? @"".SectionFlag) @"".String() (? string)
func (? *@"".SectionFlag) @"".GoString() (? string)
func (? *@"".SectionFlag) @"".String() (? string)
type @"".SectionHeader struct { @"".Name string; @"".Type @"".SectionType; @"".Flags @"".SectionFlag; @"".Addr uint64; @"".Offset uint64; @"".Size uint64; @"".Link uint32; @"".Info uint32; @"".Addralign uint64; @"".Entsize uint64 }
type @"".SectionIndex int
func (? @"".SectionIndex) @"".GoString() (? string)
func (? @"".SectionIndex) @"".String() (? string)
func (? *@"".SectionIndex) @"".GoString() (? string)
func (? *@"".SectionIndex) @"".String() (? string)
type @"".SectionType uint32
func (? @"".SectionType) @"".GoString() (? string)
func (? @"".SectionType) @"".String() (? string)
func (? *@"".SectionType) @"".GoString() (? string)
func (? *@"".SectionType) @"".String() (? string)
type @"".Sym32 struct { @"".Name uint32; @"".Value uint32; @"".Size uint32; @"".Info uint8; @"".Other uint8; @"".Shndx uint16 }
const @"".Sym32Size = 0x10
type @"".Sym64 struct { @"".Name uint32; @"".Info uint8; @"".Other uint8; @"".Shndx uint16; @"".Value uint64; @"".Size uint64 }
const @"".Sym64Size = 0x18
type @"".SymBind int
func (? @"".SymBind) @"".GoString() (? string)
func (? @"".SymBind) @"".String() (? string)
func (? *@"".SymBind) @"".GoString() (? string)
func (? *@"".SymBind) @"".String() (? string)
type @"".SymType int
func (? @"".SymType) @"".GoString() (? string)
func (? @"".SymType) @"".String() (? string)
func (? *@"".SymType) @"".GoString() (? string)
func (? *@"".SymType) @"".String() (? string)
type @"".SymVis int
func (? @"".SymVis) @"".GoString() (? string)
func (? @"".SymVis) @"".String() (? string)
func (? *@"".SymVis) @"".GoString() (? string)
func (? *@"".SymVis) @"".String() (? string)
type @"".Symbol struct { @"".Name string; @"".Info byte; @"".Other byte; @"".Section @"".SectionIndex; @"".Value uint64; @"".Size uint64 }
type @"".Type uint16
func (? @"".Type) @"".GoString() (? string)
func (? @"".Type) @"".String() (? string)
func (? *@"".Type) @"".GoString() (? string)
func (? *@"".Type) @"".String() (? string)
type @"".Version byte
func (? @"".Version) @"".GoString() (? string)
func (? @"".Version) @"".String() (? string)
func (? *@"".Version) @"".GoString() (? string)
func (? *@"".Version) @"".String() (? string)
type @"".intName struct { @"".i uint32; @"".s string }
type @"".verneed struct { @"".File string; @"".Name string }
type @"io".Closer interface { @"io".Close() (? error) }
type @"debug/dwarf".Data struct { @"debug/dwarf".abbrev []byte; @"debug/dwarf".aranges []byte; @"debug/dwarf".frame []byte; @"debug/dwarf".info []byte; @"debug/dwarf".line []byte; @"debug/dwarf".pubnames []byte; @"debug/dwarf".ranges []byte; @"debug/dwarf".str []byte; @"debug/dwarf".abbrevCache map[uint32]@"debug/dwarf".abbrevTable; @"debug/dwarf".order @"encoding/binary".ByteOrder; @"debug/dwarf".typeCache map[@"debug/dwarf".Offset]@"debug/dwarf".Type; @"debug/dwarf".typeSigs map[uint64]*@"debug/dwarf".typeUnit; @"debug/dwarf".unit []@"debug/dwarf".unit }
func (? *@"debug/dwarf".Data) @"debug/dwarf".AddTypes(@"debug/dwarf".name string, @"debug/dwarf".types []byte) (? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".Reader() (? *@"debug/dwarf".Reader)
func (? *@"debug/dwarf".Data) @"debug/dwarf".Type(@"debug/dwarf".off @"debug/dwarf".Offset) (? @"debug/dwarf".Type, ? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".parseAbbrev(@"debug/dwarf".off uint32) (? @"debug/dwarf".abbrevTable, ? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".parseTypes(@"debug/dwarf".name string, @"debug/dwarf".types []byte) (? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".parseUnits() (? []@"debug/dwarf".unit, ? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".readType(@"debug/dwarf".name string, @"debug/dwarf".r @"debug/dwarf".typeReader, @"debug/dwarf".off @"debug/dwarf".Offset, @"debug/dwarf".typeCache map[@"debug/dwarf".Offset]@"debug/dwarf".Type) (? @"debug/dwarf".Type, ? error)
func (? *@"debug/dwarf".Data) @"debug/dwarf".sigToType(@"debug/dwarf".sig uint64) (? @"debug/dwarf".Type, ? error)
type @"encoding/binary".ByteOrder interface { @"encoding/binary".PutUint16(? []byte, ? uint16) (); @"encoding/binary".PutUint32(? []byte, ? uint32) (); @"encoding/binary".PutUint64(? []byte, ? uint64) (); @"encoding/binary".String() (? string); @"encoding/binary".Uint16(? []byte) (? uint16); @"encoding/binary".Uint32(? []byte) (? uint32); @"encoding/binary".Uint64(? []byte) (? uint64) }
type @"io".ReaderAt interface { @"io".ReadAt(@"".p []byte, @"".off int64) (@"".n int, @"".err error) }
type @"io".SectionReader struct { @"io".r @"io".ReaderAt; @"io".base int64; @"io".off int64; @"io".limit int64 }
func (? *@"io".SectionReader) @"io".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"io".SectionReader) @"io".ReadAt(@"".p []byte, @"".off int64) (@"".n int, @"".err error)
func (? *@"io".SectionReader) @"io".Seek(@"".offset int64, @"".whence int) (? int64, ? error)
func (? *@"io".SectionReader) @"io".Size() (? int64)
type @"io".ReadSeeker interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error); @"io".Seek(@"".offset int64, @"".whence int) (? int64, ? error) }
type @"debug/dwarf".abbrevTable map[uint32]@"debug/dwarf".abbrev
type @"debug/dwarf".Offset uint32
type @"debug/dwarf".Type interface { @"debug/dwarf".Common() (? *@"debug/dwarf".CommonType); @"debug/dwarf".Size() (? int64); @"debug/dwarf".String() (? string) }
type @"debug/dwarf".typeUnit struct { ? @"debug/dwarf".unit; @"debug/dwarf".toff @"debug/dwarf".Offset; @"debug/dwarf".name string; @"debug/dwarf".cache @"debug/dwarf".Type }
type @"debug/dwarf".unit struct { @"debug/dwarf".base @"debug/dwarf".Offset; @"debug/dwarf".off @"debug/dwarf".Offset; @"debug/dwarf".data []byte; @"debug/dwarf".atable @"debug/dwarf".abbrevTable; @"debug/dwarf".asize int; @"debug/dwarf".vers int; @"debug/dwarf".is64 bool }
func (? *@"debug/dwarf".unit) @"debug/dwarf".addrsize() (? int)
func (? *@"debug/dwarf".unit) @"debug/dwarf".dwarf64() (? bool, ? bool)
func (? *@"debug/dwarf".unit) @"debug/dwarf".version() (? int)
type @"debug/dwarf".Reader struct { @"debug/dwarf".b @"debug/dwarf".buf; @"debug/dwarf".d *@"debug/dwarf".Data; @"debug/dwarf".err error; @"debug/dwarf".unit int; @"debug/dwarf".lastChildren bool; @"debug/dwarf".lastSibling @"debug/dwarf".Offset }
func (? *@"debug/dwarf".Reader) @"debug/dwarf".Next() (? *@"debug/dwarf".Entry, ? error)
func (? *@"debug/dwarf".Reader) @"debug/dwarf".Seek(@"debug/dwarf".off @"debug/dwarf".Offset) ()
func (? *@"debug/dwarf".Reader) @"debug/dwarf".SkipChildren() ()
func (? *@"debug/dwarf".Reader) @"debug/dwarf".clone() (? @"debug/dwarf".typeReader)
func (? *@"debug/dwarf".Reader) @"debug/dwarf".maybeNextUnit() ()
func (? *@"debug/dwarf".Reader) @"debug/dwarf".offset() (? @"debug/dwarf".Offset)
type @"debug/dwarf".typeReader interface { @"debug/dwarf".Next() (? *@"debug/dwarf".Entry, ? error); @"debug/dwarf".Seek(? @"debug/dwarf".Offset) (); @"debug/dwarf".clone() (? @"debug/dwarf".typeReader); @"debug/dwarf".offset() (? @"debug/dwarf".Offset) }
type @"debug/dwarf".abbrev struct { @"debug/dwarf".tag @"debug/dwarf".Tag; @"debug/dwarf".children bool; @"debug/dwarf".field []@"debug/dwarf".afield }
type @"debug/dwarf".CommonType struct { @"debug/dwarf".ByteSize int64; @"debug/dwarf".Name string }
func (? *@"debug/dwarf".CommonType) @"debug/dwarf".Common() (? *@"debug/dwarf".CommonType)
func (? *@"debug/dwarf".CommonType) @"debug/dwarf".Size() (? int64)
type @"debug/dwarf".buf struct { @"debug/dwarf".dwarf *@"debug/dwarf".Data; @"debug/dwarf".order @"encoding/binary".ByteOrder; @"debug/dwarf".format @"debug/dwarf".dataFormat; @"debug/dwarf".name string; @"debug/dwarf".off @"debug/dwarf".Offset; @"debug/dwarf".data []byte; @"debug/dwarf".err error }
func (? *@"debug/dwarf".buf) @"debug/dwarf".addr() (? uint64)
func (? *@"debug/dwarf".buf) @"debug/dwarf".bytes(@"debug/dwarf".n int) (? []byte)
func (? *@"debug/dwarf".buf) @"debug/dwarf".entry(@"debug/dwarf".atab @"debug/dwarf".abbrevTable, @"debug/dwarf".ubase @"debug/dwarf".Offset) (? *@"debug/dwarf".Entry)
func (? *@"debug/dwarf".buf) @"debug/dwarf".error(@"debug/dwarf".s string) ()
func (? *@"debug/dwarf".buf) @"debug/dwarf".int() (? int64)
func (? *@"debug/dwarf".buf) @"debug/dwarf".skip(@"debug/dwarf".n int) ()
func (? *@"debug/dwarf".buf) @"debug/dwarf".string() (? string)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint() (? uint64)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint16() (? uint16)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint32() (? uint32)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint64() (? uint64)
func (? *@"debug/dwarf".buf) @"debug/dwarf".uint8() (? uint8)
func (? *@"debug/dwarf".buf) @"debug/dwarf".varint() (@"debug/dwarf".c uint64, @"debug/dwarf".bits uint)
type @"debug/dwarf".Entry struct { @"debug/dwarf".Offset @"debug/dwarf".Offset; @"debug/dwarf".Tag @"debug/dwarf".Tag; @"debug/dwarf".Children bool; @"debug/dwarf".Field []@"debug/dwarf".Field }
func (? *@"debug/dwarf".Entry) @"debug/dwarf".Val(@"debug/dwarf".a @"debug/dwarf".Attr) (? interface {  })
type @"debug/dwarf".Tag uint32
func (? @"debug/dwarf".Tag) @"debug/dwarf".GoString() (? string)
func (? @"debug/dwarf".Tag) @"debug/dwarf".String() (? string)
func (? *@"debug/dwarf".Tag) @"debug/dwarf".GoString() (? string)
func (? *@"debug/dwarf".Tag) @"debug/dwarf".String() (? string)
type @"debug/dwarf".afield struct { @"debug/dwarf".attr @"debug/dwarf".Attr; @"debug/dwarf".fmt @"debug/dwarf".format }
type @"debug/dwarf".dataFormat interface { @"debug/dwarf".addrsize() (? int); @"debug/dwarf".dwarf64() (@"debug/dwarf".dwarf64 bool, @"debug/dwarf".isKnown bool); @"debug/dwarf".version() (? int) }
type @"debug/dwarf".Field struct { @"debug/dwarf".Attr @"debug/dwarf".Attr; @"debug/dwarf".Val interface {  } }
type @"debug/dwarf".Attr uint32
func (? @"debug/dwarf".Attr) @"debug/dwarf".GoString() (? string)
func (? @"debug/dwarf".Attr) @"debug/dwarf".String() (? string)
func (? *@"debug/dwarf".Attr) @"debug/dwarf".GoString() (? string)
func (? *@"debug/dwarf".Attr) @"debug/dwarf".String() (? string)
type @"debug/dwarf".format uint32
$$
0Åµgithub.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesmathstrconvreflectencoding/binarysyscalltimeosfmtdebug/dwarf0k0strconvA0
bytesB0debug/dwarfC0encoding/binaryD0errorsE0fmtF0ioG0osH0ÉMù0ÇAILI=$pkg.Version=$newType(1,"Uint8","elf.Version","Version","debug/elf",null);Å‡I.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(I)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0	Version0 0Ç9KFK=$pkg.Class=$newType(1,"Uint8","elf.Class","Class","debug/elf",null);Å‡K.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(K)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0Class0 0Ç5MCM=$pkg.Data=$newType(1,"Uint8","elf.Data","Data","debug/elf",null);Å‡M.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(M)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0Data0 0Ç9OFO=$pkg.OSABI=$newType(1,"Uint8","elf.OSABI","OSABI","debug/elf",null);Å‡O.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(O)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0OSABI0 0Ç6QDQ=$pkg.Type=$newType(2,"Uint16","elf.Type","Type","debug/elf",null);Å‡Q.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(Q)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0Type0 0ÇBSMS=$pkg.Machine=$newType(2,"Uint16","elf.Machine","Machine","debug/elf",null);Å‡S.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(S)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0	Machine0 0ÇSUYU=$pkg.SectionIndex=$newType(4,"Int","elf.SectionIndex","SectionIndex","debug/elf",null);Å‡U.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(U)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0SectionIndex0 0ÇRWYW=$pkg.SectionType=$newType(4,"Uint32","elf.SectionType","SectionType","debug/elf",null);Å‡W.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(W)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0SectionType0 0ÇRYYY=$pkg.SectionFlag=$newType(4,"Uint32","elf.SectionFlag","SectionFlag","debug/elf",null);Å‡Y.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(Y)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0SectionFlag0 0ÇGAANAA=$pkg.ProgType=$newType(4,"Int","elf.ProgType","ProgType","debug/elf",null);Å‚AA.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AA)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0
ProgType0 0ÇJACQAC=$pkg.ProgFlag=$newType(4,"Uint32","elf.ProgFlag","ProgFlag","debug/elf",null);Å‚AC.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AC)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0
ProgFlag0 0Ç?AEHAE=$pkg.DynTag=$newType(4,"Int","elf.DynTag","DynTag","debug/elf",null);Å‚AE.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AE)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0DynTag0 0ÇCAGKAG=$pkg.DynFlag=$newType(4,"Int","elf.DynFlag","DynFlag","debug/elf",null);Å‚AG.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AG)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0	DynFlag0 0Ç;AIEAI=$pkg.NType=$newType(4,"Int","elf.NType","NType","debug/elf",null);Å‚AI.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AI)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0NType0 0ÇCAKKAK=$pkg.SymBind=$newType(4,"Int","elf.SymBind","SymBind","debug/elf",null);Å‚AK.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AK)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0	SymBind0 0ÇCAMKAM=$pkg.SymType=$newType(4,"Int","elf.SymType","SymType","debug/elf",null);Å‚AM.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AM)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0	SymType0 0Ç?AOHAO=$pkg.SymVis=$newType(4,"Int","elf.SymVis","SymVis","debug/elf",null);Å‚AO.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AO)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0SymVis0 0ÇGAQNAQ=$pkg.R_X86_64=$newType(4,"Int","elf.R_X86_64","R_X86_64","debug/elf",null);Å‚AQ.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AQ)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0
R_X86_640 0ÇCASKAS=$pkg.R_ALPHA=$newType(4,"Int","elf.R_ALPHA","R_ALPHA","debug/elf",null);Å‚AS.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AS)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0	R_ALPHA0 0Ç;AUEAU=$pkg.R_ARM=$newType(4,"Int","elf.R_ARM","R_ARM","debug/elf",null);Å‚AU.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AU)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0R_ARM0 0Ç;AWEAW=$pkg.R_386=$newType(4,"Int","elf.R_386","R_386","debug/elf",null);Å‚AW.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AW)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0R_3860 0Ç;AYEAY=$pkg.R_PPC=$newType(4,"Int","elf.R_PPC","R_PPC","debug/elf",null);Å‚AY.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(AY)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0R_PPC0 0ÇCBAKBA=$pkg.R_SPARC=$newType(4,"Int","elf.R_SPARC","R_SPARC","debug/elf",null);Å‚BA.methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];($ptrType(BA)).methods=[["GoString","GoString","",[],[$String],false,-1],["String","String","",[],[$String],false,-1]];0	R_SPARC0 0ÇWBCÇDBC=$pkg.Header32=$newType(0,"Struct","elf.Header32","Header32","debug/elf",function(Ident_,Type_,Machine_,Version_,Entry_,Phoff_,Shoff_,Flags_,Ehsize_,Phentsize_,Phnum_,Shentsize_,Shnum_,Shstrndx_){this.$val=this;this.Ident=Ident_!==undefined?Ident_:($arrayType($Uint8,16)).zero();this.Type=Type_!==undefined?Type_:0;this.Machine=Machine_!==undefined?Machine_:0;this.Version=Version_!==undefined?Version_:0;this.Entry=Entry_!==undefined?Entry_:0;this.Phoff=Phoff_!==undefined?Phoff_:0;this.Shoff=Shoff_!==undefined?Shoff_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Ehsize=Ehsize_!==undefined?Ehsize_:0;this.Phentsize=Phentsize_!==undefined?Phentsize_:0;this.Phnum=Phnum_!==undefined?Phnum_:0;this.Shentsize=Shentsize_!==undefined?Shentsize_:0;this.Shnum=Shnum_!==undefined?Shnum_:0;this.Shstrndx=Shstrndx_!==undefined?Shstrndx_:0;});Ç˘BC.init([["Ident","Ident","",($arrayType($Uint8,16)),""],["Type","Type","",$Uint16,""],["Machine","Machine","",$Uint16,""],["Version","Version","",$Uint32,""],["Entry","Entry","",$Uint32,""],["Phoff","Phoff","",$Uint32,""],["Shoff","Shoff","",$Uint32,""],["Flags","Flags","",$Uint32,""],["Ehsize","Ehsize","",$Uint16,""],["Phentsize","Phentsize","",$Uint16,""],["Phnum","Phnum","",$Uint16,""],["Shentsize","Shentsize","",$Uint16,""],["Shnum","Shnum","",$Uint16,""],["Shstrndx","Shstrndx","",$Uint16,""]]);0
Header320 0ÇêBDÇ.BD=$pkg.Section32=$newType(0,"Struct","elf.Section32","Section32","debug/elf",function(Name_,Type_,Flags_,Addr_,Off_,Size_,Link_,Info_,Addralign_,Entsize_){this.$val=this;this.Name=Name_!==undefined?Name_:0;this.Type=Type_!==undefined?Type_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Addr=Addr_!==undefined?Addr_:0;this.Off=Off_!==undefined?Off_:0;this.Size=Size_!==undefined?Size_:0;this.Link=Link_!==undefined?Link_:0;this.Info=Info_!==undefined?Info_:0;this.Addralign=Addralign_!==undefined?Addralign_:0;this.Entsize=Entsize_!==undefined?Entsize_:0;});ÇGBD.init([["Name","Name","",$Uint32,""],["Type","Type","",$Uint32,""],["Flags","Flags","",$Uint32,""],["Addr","Addr","",$Uint32,""],["Off","Off","",$Uint32,""],["Size","Size","",$Uint32,""],["Link","Link","",$Uint32,""],["Info","Info","",$Uint32,""],["Addralign","Addralign","",$Uint32,""],["Entsize","Entsize","",$Uint32,""]]);0	Section320 0ÇËBEÇ…BE=$pkg.Prog32=$newType(0,"Struct","elf.Prog32","Prog32","debug/elf",function(Type_,Off_,Vaddr_,Paddr_,Filesz_,Memsz_,Flags_,Align_){this.$val=this;this.Type=Type_!==undefined?Type_:0;this.Off=Off_!==undefined?Off_:0;this.Vaddr=Vaddr_!==undefined?Vaddr_:0;this.Paddr=Paddr_!==undefined?Paddr_:0;this.Filesz=Filesz_!==undefined?Filesz_:0;this.Memsz=Memsz_!==undefined?Memsz_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Align=Align_!==undefined?Align_:0;});ÇBE.init([["Type","Type","",$Uint32,""],["Off","Off","",$Uint32,""],["Vaddr","Vaddr","",$Uint32,""],["Paddr","Paddr","",$Uint32,""],["Filesz","Filesz","",$Uint32,""],["Memsz","Memsz","",$Uint32,""],["Flags","Flags","",$Uint32,""],["Align","Align","",$Uint32,""]]);0Prog320 0Ç BFÅ™BF=$pkg.Dyn32=$newType(0,"Struct","elf.Dyn32","Dyn32","debug/elf",function(Tag_,Val_){this.$val=this;this.Tag=Tag_!==undefined?Tag_:0;this.Val=Val_!==undefined?Val_:0;});BBF.init([["Tag","Tag","",$Int32,""],["Val","Val","",$Uint32,""]]);0Dyn320 0ÇBGÅÆBG=$pkg.Rel32=$newType(0,"Struct","elf.Rel32","Rel32","debug/elf",function(Off_,Info_){this.$val=this;this.Off=Off_!==undefined?Off_:0;this.Info=Info_!==undefined?Info_:0;});EBG.init([["Off","Off","",$Uint32,""],["Info","Info","",$Uint32,""]]);0Rel320 0Ç^BHÅ„BH=$pkg.Rela32=$newType(0,"Struct","elf.Rela32","Rela32","debug/elf",function(Off_,Info_,Addend_){this.$val=this;this.Off=Off_!==undefined?Off_:0;this.Info=Info_!==undefined?Info_:0;this.Addend=Addend_!==undefined?Addend_:0;});fBH.init([["Off","Off","",$Uint32,""],["Info","Info","",$Uint32,""],["Addend","Addend","",$Int32,""]]);0Rela320 0Ç?BLÇfBL=$pkg.Sym32=$newType(0,"Struct","elf.Sym32","Sym32","debug/elf",function(Name_,Value_,Size_,Info_,Other_,Shndx_){this.$val=this;this.Name=Name_!==undefined?Name_:0;this.Value=Value_!==undefined?Value_:0;this.Size=Size_!==undefined?Size_:0;this.Info=Info_!==undefined?Info_:0;this.Other=Other_!==undefined?Other_:0;this.Shndx=Shndx_!==undefined?Shndx_:0;});Å√BL.init([["Name","Name","",$Uint32,""],["Value","Value","",$Uint32,""],["Size","Size","",$Uint32,""],["Info","Info","",$Uint8,""],["Other","Other","",$Uint8,""],["Shndx","Shndx","",$Uint16,""]]);0Sym320 0ÇÑBQÇqBQ=$pkg.Header64=$newType(0,"Struct","elf.Header64","Header64","debug/elf",function(Ident_,Type_,Machine_,Version_,Entry_,Phoff_,Shoff_,Flags_,Ehsize_,Phentsize_,Phnum_,Shentsize_,Shnum_,Shstrndx_){this.$val=this;this.Ident=Ident_!==undefined?Ident_:($arrayType($Uint8,16)).zero();this.Type=Type_!==undefined?Type_:0;this.Machine=Machine_!==undefined?Machine_:0;this.Version=Version_!==undefined?Version_:0;this.Entry=Entry_!==undefined?Entry_:new $Uint64(0,0);this.Phoff=Phoff_!==undefined?Phoff_:new $Uint64(0,0);this.Shoff=Shoff_!==undefined?Shoff_:new $Uint64(0,0);this.Flags=Flags_!==undefined?Flags_:0;this.Ehsize=Ehsize_!==undefined?Ehsize_:0;this.Phentsize=Phentsize_!==undefined?Phentsize_:0;this.Phnum=Phnum_!==undefined?Phnum_:0;this.Shentsize=Shentsize_!==undefined?Shentsize_:0;this.Shnum=Shnum_!==undefined?Shnum_:0;this.Shstrndx=Shstrndx_!==undefined?Shstrndx_:0;});Ç˘BQ.init([["Ident","Ident","",($arrayType($Uint8,16)),""],["Type","Type","",$Uint16,""],["Machine","Machine","",$Uint16,""],["Version","Version","",$Uint32,""],["Entry","Entry","",$Uint64,""],["Phoff","Phoff","",$Uint64,""],["Shoff","Shoff","",$Uint64,""],["Flags","Flags","",$Uint32,""],["Ehsize","Ehsize","",$Uint16,""],["Phentsize","Phentsize","",$Uint16,""],["Phnum","Phnum","",$Uint16,""],["Shentsize","Shentsize","",$Uint16,""],["Shnum","Shnum","",$Uint16,""],["Shstrndx","Shstrndx","",$Uint16,""]]);0
Header640 0ÇÍBRÇàBR=$pkg.Section64=$newType(0,"Struct","elf.Section64","Section64","debug/elf",function(Name_,Type_,Flags_,Addr_,Off_,Size_,Link_,Info_,Addralign_,Entsize_){this.$val=this;this.Name=Name_!==undefined?Name_:0;this.Type=Type_!==undefined?Type_:0;this.Flags=Flags_!==undefined?Flags_:new $Uint64(0,0);this.Addr=Addr_!==undefined?Addr_:new $Uint64(0,0);this.Off=Off_!==undefined?Off_:new $Uint64(0,0);this.Size=Size_!==undefined?Size_:new $Uint64(0,0);this.Link=Link_!==undefined?Link_:0;this.Info=Info_!==undefined?Info_:0;this.Addralign=Addralign_!==undefined?Addralign_:new $Uint64(0,0);this.Entsize=Entsize_!==undefined?Entsize_:new $Uint64(0,0);});ÇGBR.init([["Name","Name","",$Uint32,""],["Type","Type","",$Uint32,""],["Flags","Flags","",$Uint64,""],["Addr","Addr","",$Uint64,""],["Off","Off","",$Uint64,""],["Size","Size","",$Uint64,""],["Link","Link","",$Uint32,""],["Info","Info","",$Uint32,""],["Addralign","Addralign","",$Uint64,""],["Entsize","Entsize","",$Uint64,""]]);0	Section640 0ÇBBSÇ#BS=$pkg.Prog64=$newType(0,"Struct","elf.Prog64","Prog64","debug/elf",function(Type_,Flags_,Off_,Vaddr_,Paddr_,Filesz_,Memsz_,Align_){this.$val=this;this.Type=Type_!==undefined?Type_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Off=Off_!==undefined?Off_:new $Uint64(0,0);this.Vaddr=Vaddr_!==undefined?Vaddr_:new $Uint64(0,0);this.Paddr=Paddr_!==undefined?Paddr_:new $Uint64(0,0);this.Filesz=Filesz_!==undefined?Filesz_:new $Uint64(0,0);this.Memsz=Memsz_!==undefined?Memsz_:new $Uint64(0,0);this.Align=Align_!==undefined?Align_:new $Uint64(0,0);});ÇBS.init([["Type","Type","",$Uint32,""],["Flags","Flags","",$Uint32,""],["Off","Off","",$Uint64,""],["Vaddr","Vaddr","",$Uint64,""],["Paddr","Paddr","",$Uint64,""],["Filesz","Filesz","",$Uint64,""],["Memsz","Memsz","",$Uint64,""],["Align","Align","",$Uint64,""]]);0Prog640 0ÇBTÅ«BT=$pkg.Dyn64=$newType(0,"Struct","elf.Dyn64","Dyn64","debug/elf",function(Tag_,Val_){this.$val=this;this.Tag=Tag_!==undefined?Tag_:new $Int64(0,0);this.Val=Val_!==undefined?Val_:new $Uint64(0,0);});BBT.init([["Tag","Tag","",$Int64,""],["Val","Val","",$Uint64,""]]);0Dyn640 0Ç%BUÅÃBU=$pkg.Rel64=$newType(0,"Struct","elf.Rel64","Rel64","debug/elf",function(Off_,Info_){this.$val=this;this.Off=Off_!==undefined?Off_:new $Uint64(0,0);this.Info=Info_!==undefined?Info_:new $Uint64(0,0);});EBU.init([["Off","Off","",$Uint64,""],["Info","Info","",$Uint64,""]]);0Rel640 0ÇãBVÇBV=$pkg.Rela64=$newType(0,"Struct","elf.Rela64","Rela64","debug/elf",function(Off_,Info_,Addend_){this.$val=this;this.Off=Off_!==undefined?Off_:new $Uint64(0,0);this.Info=Info_!==undefined?Info_:new $Uint64(0,0);this.Addend=Addend_!==undefined?Addend_:new $Int64(0,0);});fBV.init([["Off","Off","",$Uint64,""],["Info","Info","",$Uint64,""],["Addend","Addend","",$Int64,""]]);0Rela640 0Ç]BZÇÑBZ=$pkg.Sym64=$newType(0,"Struct","elf.Sym64","Sym64","debug/elf",function(Name_,Info_,Other_,Shndx_,Value_,Size_){this.$val=this;this.Name=Name_!==undefined?Name_:0;this.Info=Info_!==undefined?Info_:0;this.Other=Other_!==undefined?Other_:0;this.Shndx=Shndx_!==undefined?Shndx_:0;this.Value=Value_!==undefined?Value_:new $Uint64(0,0);this.Size=Size_!==undefined?Size_:new $Uint64(0,0);});Å√BZ.init([["Name","Name","",$Uint32,""],["Info","Info","",$Uint8,""],["Other","Other","",$Uint8,""],["Shndx","Shndx","",$Uint16,""],["Value","Value","",$Uint64,""],["Size","Size","",$Uint64,""]]);0Sym640 0ÇCAÅ°CA=$pkg.intName=$newType(0,"Struct","elf.intName","intName","debug/elf",function(i_,s_){this.$val=this;this.i=i_!==undefined?i_:0;this.s=s_!==undefined?s_:"";});MCA.init([["i","i","debug/elf",$Uint32,""],["s","s","debug/elf",$String,""]]);0	intName0 0Ç	CDÇICD=$pkg.FileHeader=$newType(0,"Struct","elf.FileHeader","FileHeader","debug/elf",function(Class_,Data_,Version_,OSABI_,ABIVersion_,ByteOrder_,Type_,Machine_,Entry_){this.$val=this;this.Class=Class_!==undefined?Class_:0;this.Data=Data_!==undefined?Data_:0;this.Version=Version_!==undefined?Version_:0;this.OSABI=OSABI_!==undefined?OSABI_:0;this.ABIVersion=ABIVersion_!==undefined?ABIVersion_:0;this.ByteOrder=ByteOrder_!==undefined?ByteOrder_:null;this.Type=Type_!==undefined?Type_:0;this.Machine=Machine_!==undefined?Machine_:0;this.Entry=Entry_!==undefined?Entry_:new $Uint64(0,0);});Ç CD.init([["Class","Class","",K,""],["Data","Data","",M,""],["Version","Version","",I,""],["OSABI","OSABI","",O,""],["ABIVersion","ABIVersion","",$Uint8,""],["ByteOrder","ByteOrder","",D.ByteOrder,""],["Type","Type","",Q,""],["Machine","Machine","",S,""],["Entry","Entry","",$Uint64,""]]);0
FileHeader0ÅÉdebug/elf:Classdebug/elf:Datadebug/elf:Machinedebug/elf:OSABIdebug/elf:Typedebug/elf:Versionencoding/binary:ByteOrder0Ç	ÓCEÇ!CE=$pkg.File=$newType(0,"Struct","elf.File","File","debug/elf",function(FileHeader_,Sections_,Progs_,closer_,gnuNeed_,gnuVersym_){this.$val=this;this.FileHeader=FileHeader_!==undefined?FileHeader_:new CD.Ptr();this.Sections=Sections_!==undefined?Sections_:($sliceType(($ptrType(CG)))).nil;this.Progs=Progs_!==undefined?Progs_:($sliceType(($ptrType(CI)))).nil;this.closer=closer_!==undefined?closer_:null;this.gnuNeed=gnuNeed_!==undefined?gnuNeed_:($sliceType(CP)).nil;this.gnuVersym=gnuVersym_!==undefined?gnuVersym_:($sliceType($Uint8)).nil;});Ç¯($ptrType(CE)).methods=[["Close","Close","",[],[$error],false,-1],["DWARF","DWARF","",[],[($ptrType(C.Data)),$error],false,-1],["DynString","DynString","",[AE],[($sliceType($String)),$error],false,-1],["ImportedLibraries","ImportedLibraries","",[],[($sliceType($String)),$error],false,-1],["ImportedSymbols","ImportedSymbols","",[],[($sliceType(CO)),$error],false,-1],["Section","Section","",[$String],[($ptrType(CG))],false,-1],["SectionByType","SectionByType","",[W],[($ptrType(CG))],false,-1],["Symbols","Symbols","",[],[($sliceType(CJ)),$error],false,-1],["applyRelocations","applyRelocations","debug/elf",[($sliceType($Uint8)),($sliceType($Uint8))],[$error],false,-1],["applyRelocations386","applyRelocations386","debug/elf",[($sliceType($Uint8)),($sliceType($Uint8))],[$error],false,-1],["applyRelocationsAMD64","applyRelocationsAMD64","debug/elf",[($sliceType($Uint8)),($sliceType($Uint8))],[$error],false,-1],["getSymbols","getSymbols","debug/elf",[W],[($sliceType(CJ)),($sliceType($Uint8)),$error],false,-1],["getSymbols32","getSymbols32","debug/elf",[W],[($sliceType(CJ)),($sliceType($Uint8)),$error],false,-1],["getSymbols64","getSymbols64","debug/elf",[W],[($sliceType(CJ)),($sliceType($Uint8)),$error],false,-1],["gnuVersion","gnuVersion","debug/elf",[$Int,($ptrType(CO))],[],false,-1],["gnuVersionInit","gnuVersionInit","debug/elf",[($sliceType($Uint8))],[],false,-1],["stringTable","stringTable","debug/elf",[$Uint32],[($sliceType($Uint8)),$error],false,-1]];CE.init([["FileHeader","","",CD,""],["Sections","Sections","",($sliceType(($ptrType(CG)))),""],["Progs","Progs","",($sliceType(($ptrType(CI)))),""],["closer","closer","debug/elf",G.Closer,""],["gnuNeed","gnuNeed","debug/elf",($sliceType(CP)),""],["gnuVersym","gnuVersym","debug/elf",($sliceType($Uint8)),""]]);0File0Åædebug/dwarf:Datadebug/elf:DynTagdebug/elf:FileHeaderdebug/elf:ImportedSymboldebug/elf:Progdebug/elf:Sectiondebug/elf:SectionTypedebug/elf:Symboldebug/elf:verneed	io:Closer0Ç CFÇíCF=$pkg.SectionHeader=$newType(0,"Struct","elf.SectionHeader","SectionHeader","debug/elf",function(Name_,Type_,Flags_,Addr_,Offset_,Size_,Link_,Info_,Addralign_,Entsize_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Type=Type_!==undefined?Type_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Addr=Addr_!==undefined?Addr_:new $Uint64(0,0);this.Offset=Offset_!==undefined?Offset_:new $Uint64(0,0);this.Size=Size_!==undefined?Size_:new $Uint64(0,0);this.Link=Link_!==undefined?Link_:0;this.Info=Info_!==undefined?Info_:0;this.Addralign=Addralign_!==undefined?Addralign_:new $Uint64(0,0);this.Entsize=Entsize_!==undefined?Entsize_:new $Uint64(0,0);});ÇACF.init([["Name","Name","",$String,""],["Type","Type","",W,""],["Flags","Flags","",Y,""],["Addr","Addr","",$Uint64,""],["Offset","Offset","",$Uint64,""],["Size","Size","",$Uint64,""],["Link","Link","",$Uint32,""],["Info","Info","",$Uint32,""],["Addralign","Addralign","",$Uint64,""],["Entsize","Entsize","",$Uint64,""]]);0SectionHeader0.debug/elf:SectionFlagdebug/elf:SectionType0ÇBCGÇ:CG=$pkg.Section=$newType(0,"Struct","elf.Section","Section","debug/elf",function(SectionHeader_,ReaderAt_,sr_){this.$val=this;this.SectionHeader=SectionHeader_!==undefined?SectionHeader_:new CF.Ptr();this.ReaderAt=ReaderAt_!==undefined?ReaderAt_:null;this.sr=sr_!==undefined?sr_:($ptrType(G.SectionReader)).nil;});Ç®CG.methods=[["ReadAt","ReadAt","",[($sliceType($Uint8)),$Int64],[$Int,$error],false,1]];($ptrType(CG)).methods=[["Data","Data","",[],[($sliceType($Uint8)),$error],false,-1],["Open","Open","",[],[G.ReadSeeker],false,-1],["ReadAt","ReadAt","",[($sliceType($Uint8)),$Int64],[$Int,$error],false,1]];CG.init([["SectionHeader","","",CF,""],["ReaderAt","","",G.ReaderAt,""],["sr","sr","debug/elf",($ptrType(G.SectionReader)),""]]);0	Section0Gdebug/elf:SectionHeaderio:ReadSeekerio:ReaderAtio:SectionReader0ÇoCHÇ/CH=$pkg.ProgHeader=$newType(0,"Struct","elf.ProgHeader","ProgHeader","debug/elf",function(Type_,Flags_,Off_,Vaddr_,Paddr_,Filesz_,Memsz_,Align_){this.$val=this;this.Type=Type_!==undefined?Type_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Off=Off_!==undefined?Off_:new $Uint64(0,0);this.Vaddr=Vaddr_!==undefined?Vaddr_:new $Uint64(0,0);this.Paddr=Paddr_!==undefined?Paddr_:new $Uint64(0,0);this.Filesz=Filesz_!==undefined?Filesz_:new $Uint64(0,0);this.Memsz=Memsz_!==undefined?Memsz_:new $Uint64(0,0);this.Align=Align_!==undefined?Align_:new $Uint64(0,0);});Å˝CH.init([["Type","Type","",AA,""],["Flags","Flags","",AC,""],["Off","Off","",$Uint64,""],["Vaddr","Vaddr","",$Uint64,""],["Paddr","Paddr","",$Uint64,""],["Filesz","Filesz","",$Uint64,""],["Memsz","Memsz","",$Uint64,""],["Align","Align","",$Uint64,""]]);0
ProgHeader0(debug/elf:ProgFlagdebug/elf:ProgType0ÇÁCIÇ%CI=$pkg.Prog=$newType(0,"Struct","elf.Prog","Prog","debug/elf",function(ProgHeader_,ReaderAt_,sr_){this.$val=this;this.ProgHeader=ProgHeader_!==undefined?ProgHeader_:new CH.Ptr();this.ReaderAt=ReaderAt_!==undefined?ReaderAt_:null;this.sr=sr_!==undefined?sr_:($ptrType(G.SectionReader)).nil;});ÇhCI.methods=[["ReadAt","ReadAt","",[($sliceType($Uint8)),$Int64],[$Int,$error],false,1]];($ptrType(CI)).methods=[["Open","Open","",[],[G.ReadSeeker],false,-1],["ReadAt","ReadAt","",[($sliceType($Uint8)),$Int64],[$Int,$error],false,1]];CI.init([["ProgHeader","","",CH,""],["ReaderAt","","",G.ReaderAt,""],["sr","sr","debug/elf",($ptrType(G.SectionReader)),""]]);0Prog0Ddebug/elf:ProgHeaderio:ReadSeekerio:ReaderAtio:SectionReader0ÇÄCJÇêCJ=$pkg.Symbol=$newType(0,"Struct","elf.Symbol","Symbol","debug/elf",function(Name_,Info_,Other_,Section_,Value_,Size_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Info=Info_!==undefined?Info_:0;this.Other=Other_!==undefined?Other_:0;this.Section=Section_!==undefined?Section_:0;this.Value=Value_!==undefined?Value_:new $Uint64(0,0);this.Size=Size_!==undefined?Size_:new $Uint64(0,0);});Å¡CJ.init([["Name","Name","",$String,""],["Info","Info","",$Uint8,""],["Other","Other","",$Uint8,""],["Section","Section","",U,""],["Value","Value","",$Uint64,""],["Size","Size","",$Uint64,""]]);0Symbol0debug/elf:SectionIndex0Ç‘CKÅÙCK=$pkg.FormatError=$newType(0,"Struct","elf.FormatError","FormatError","debug/elf",function(off_,msg_,val_){this.$val=this;this.off=off_!==undefined?off_:new $Int64(0,0);this.msg=msg_!==undefined?msg_:"";this.val=val_!==undefined?val_:null;});Å≈($ptrType(CK)).methods=[["Error","Error","",[],[$String],false,-1]];CK.init([["off","off","debug/elf",$Int64,""],["msg","msg","debug/elf",$String,""],["val","val","debug/elf",$emptyInterface,""]]);0FormatError0 0Ç°COÇCO=$pkg.ImportedSymbol=$newType(0,"Struct","elf.ImportedSymbol","ImportedSymbol","debug/elf",function(Name_,Version_,Library_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Version=Version_!==undefined?Version_:"";this.Library=Library_!==undefined?Library_:"";});qCO.init([["Name","Name","",$String,""],["Version","Version","",$String,""],["Library","Library","",$String,""]]);0ImportedSymbol0 0ÇCPÅ∫CP=$pkg.verneed=$newType(0,"Struct","elf.verneed","verneed","debug/elf",function(File_,Name_){this.$val=this;this.File=File_!==undefined?File_:"";this.Name=Name_!==undefined?Name_:"";});GCP.init([["File","File","",$String,""],["Name","Name","",$String,""]]);0	verneed0 0J  0versionStrings0 0L  0classStrings0 0N  0dataStrings0 0P  0osabiStrings0 0R  0typeStrings0 0T  0machineStrings0 0V  0
shnStrings0 0X  0
shtStrings0 0Z  0
shfStrings0 0AB  0	ptStrings0 0AD  0	pfStrings0 0AF  0	dtStrings0 0AH  0dflagStrings0 0AJ  0ntypeStrings0 0AL  0
stbStrings0 0AN  0
sttStrings0 0AP  0
stvStrings0 0AR  0rx86_64Strings0 0AT  0ralphaStrings0 0AV  0rarmStrings0 0AX  0r386Strings0 0AZ  0rppcStrings0 0BB  0rsparcStrings0 0Åù  V    J=new($sliceType(CA))([new CA.Ptr(0,"EV_NONE"),new CA.Ptr(1,"EV_CURRENT")]);    0versionStrings0-debug/elf:intNamedebug/elf:versionStrings0Åπ  v    L=new($sliceType(CA))([new CA.Ptr(0,"ELFCLASSNONE"),new CA.Ptr(1,"ELFCLASS32"),new CA.Ptr(2,"ELFCLASS64")]);    0classStrings0+debug/elf:classStringsdebug/elf:intName0Å∏  w    N=new($sliceType(CA))([new CA.Ptr(0,"ELFDATANONE"),new CA.Ptr(1,"ELFDATA2LSB"),new CA.Ptr(2,"ELFDATA2MSB")]);    0dataStrings0*debug/elf:dataStringsdebug/elf:intName0ÇÜ  ÇA    P=new($sliceType(CA))([new CA.Ptr(0,"ELFOSABI_NONE"),new CA.Ptr(1,"ELFOSABI_HPUX"),new CA.Ptr(2,"ELFOSABI_NETBSD"),new CA.Ptr(3,"ELFOSABI_LINUX"),new CA.Ptr(4,"ELFOSABI_HURD"),new CA.Ptr(5,"ELFOSABI_86OPEN"),new CA.Ptr(6,"ELFOSABI_SOLARIS"),new CA.Ptr(7,"ELFOSABI_AIX"),new CA.Ptr(8,"ELFOSABI_IRIX"),new CA.Ptr(9,"ELFOSABI_FREEBSD"),new CA.Ptr(10,"ELFOSABI_TRU64"),new CA.Ptr(11,"ELFOSABI_MODESTO"),new CA.Ptr(12,"ELFOSABI_OPENBSD"),new CA.Ptr(13,"ELFOSABI_OPENVMS"),new CA.Ptr(14,"ELFOSABI_NSK"),new CA.Ptr(97,"ELFOSABI_ARM"),new CA.Ptr(255,"ELFOSABI_STANDALONE")]);    0osabiStrings0+debug/elf:intNamedebug/elf:osabiStrings0ÇP  Ç    R=new($sliceType(CA))([new CA.Ptr(0,"ET_NONE"),new CA.Ptr(1,"ET_REL"),new CA.Ptr(2,"ET_EXEC"),new CA.Ptr(3,"ET_DYN"),new CA.Ptr(4,"ET_CORE"),new CA.Ptr(65024,"ET_LOOS"),new CA.Ptr(65279,"ET_HIOS"),new CA.Ptr(65280,"ET_LOPROC"),new CA.Ptr(65535,"ET_HIPROC")]);    0typeStrings0*debug/elf:intNamedebug/elf:typeStrings0Ç+  Ç‚    T=new($sliceType(CA))([new CA.Ptr(0,"EM_NONE"),new CA.Ptr(1,"EM_M32"),new CA.Ptr(2,"EM_SPARC"),new CA.Ptr(3,"EM_386"),new CA.Ptr(4,"EM_68K"),new CA.Ptr(5,"EM_88K"),new CA.Ptr(7,"EM_860"),new CA.Ptr(8,"EM_MIPS"),new CA.Ptr(9,"EM_S370"),new CA.Ptr(10,"EM_MIPS_RS3_LE"),new CA.Ptr(15,"EM_PARISC"),new CA.Ptr(17,"EM_VPP500"),new CA.Ptr(18,"EM_SPARC32PLUS"),new CA.Ptr(19,"EM_960"),new CA.Ptr(20,"EM_PPC"),new CA.Ptr(21,"EM_PPC64"),new CA.Ptr(22,"EM_S390"),new CA.Ptr(36,"EM_V800"),new CA.Ptr(37,"EM_FR20"),new CA.Ptr(38,"EM_RH32"),new CA.Ptr(39,"EM_RCE"),new CA.Ptr(40,"EM_ARM"),new CA.Ptr(42,"EM_SH"),new CA.Ptr(43,"EM_SPARCV9"),new CA.Ptr(44,"EM_TRICORE"),new CA.Ptr(45,"EM_ARC"),new CA.Ptr(46,"EM_H8_300"),new CA.Ptr(47,"EM_H8_300H"),new CA.Ptr(48,"EM_H8S"),new CA.Ptr(49,"EM_H8_500"),new CA.Ptr(50,"EM_IA_64"),new CA.Ptr(51,"EM_MIPS_X"),new CA.Ptr(52,"EM_COLDFIRE"),new CA.Ptr(53,"EM_68HC12"),new CA.Ptr(54,"EM_MMA"),new CA.Ptr(55,"EM_PCP"),new CA.Ptr(56,"EM_NCPU"),new CA.Ptr(57,"EM_NDR1"),new CA.Ptr(58,"EM_STARCORE"),new CA.Ptr(59,"EM_ME16"),new CA.Ptr(60,"EM_ST100"),new CA.Ptr(61,"EM_TINYJ"),new CA.Ptr(62,"EM_X86_64"),new CA.Ptr(6,"EM_486"),new CA.Ptr(10,"EM_MIPS_RS4_BE"),new CA.Ptr(41,"EM_ALPHA_STD"),new CA.Ptr(36902,"EM_ALPHA")]);    0machineStrings0-debug/elf:intNamedebug/elf:machineStrings0Ç  Å”    V=new($sliceType(CA))([new CA.Ptr(0,"SHN_UNDEF"),new CA.Ptr(65280,"SHN_LOPROC"),new CA.Ptr(65312,"SHN_LOOS"),new CA.Ptr(65521,"SHN_ABS"),new CA.Ptr(65522,"SHN_COMMON"),new CA.Ptr(65535,"SHN_XINDEX")]);    0
shnStrings0)debug/elf:intNamedebug/elf:shnStrings0ÇÁ  Ç¶    X=new($sliceType(CA))([new CA.Ptr(0,"SHT_NULL"),new CA.Ptr(1,"SHT_PROGBITS"),new CA.Ptr(2,"SHT_SYMTAB"),new CA.Ptr(3,"SHT_STRTAB"),new CA.Ptr(4,"SHT_RELA"),new CA.Ptr(5,"SHT_HASH"),new CA.Ptr(6,"SHT_DYNAMIC"),new CA.Ptr(7,"SHT_NOTE"),new CA.Ptr(8,"SHT_NOBITS"),new CA.Ptr(9,"SHT_REL"),new CA.Ptr(10,"SHT_SHLIB"),new CA.Ptr(11,"SHT_DYNSYM"),new CA.Ptr(14,"SHT_INIT_ARRAY"),new CA.Ptr(15,"SHT_FINI_ARRAY"),new CA.Ptr(16,"SHT_PREINIT_ARRAY"),new CA.Ptr(17,"SHT_GROUP"),new CA.Ptr(18,"SHT_SYMTAB_SHNDX"),new CA.Ptr(1610612736,"SHT_LOOS"),new CA.Ptr(1879048181,"SHT_GNU_ATTRIBUTES"),new CA.Ptr(1879048182,"SHT_GNU_HASH"),new CA.Ptr(1879048183,"SHT_GNU_LIBLIST"),new CA.Ptr(1879048189,"SHT_GNU_VERDEF"),new CA.Ptr(1879048190,"SHT_GNU_VERNEED"),new CA.Ptr(1879048191,"SHT_GNU_VERSYM"),new CA.Ptr(1879048192,"SHT_LOPROC"),new CA.Ptr(2147483647,"SHT_HIPROC"),new CA.Ptr(2147483648,"SHT_LOUSER"),new CA.Ptr(4294967295,"SHT_HIUSER")]);    0
shtStrings0)debug/elf:intNamedebug/elf:shtStrings0Çå  ÇK    Z=new($sliceType(CA))([new CA.Ptr(1,"SHF_WRITE"),new CA.Ptr(2,"SHF_ALLOC"),new CA.Ptr(4,"SHF_EXECINSTR"),new CA.Ptr(16,"SHF_MERGE"),new CA.Ptr(32,"SHF_STRINGS"),new CA.Ptr(64,"SHF_INFO_LINK"),new CA.Ptr(128,"SHF_LINK_ORDER"),new CA.Ptr(256,"SHF_OS_NONCONFORMING"),new CA.Ptr(512,"SHF_GROUP"),new CA.Ptr(1024,"SHF_TLS")]);    0
shfStrings0)debug/elf:intNamedebug/elf:shfStrings0Ç∞  Çq    AB=new($sliceType(CA))([new CA.Ptr(0,"PT_NULL"),new CA.Ptr(1,"PT_LOAD"),new CA.Ptr(2,"PT_DYNAMIC"),new CA.Ptr(3,"PT_INTERP"),new CA.Ptr(4,"PT_NOTE"),new CA.Ptr(5,"PT_SHLIB"),new CA.Ptr(6,"PT_PHDR"),new CA.Ptr(7,"PT_TLS"),new CA.Ptr(1610612736,"PT_LOOS"),new CA.Ptr(1879048191,"PT_HIOS"),new CA.Ptr(1879048192,"PT_LOPROC"),new CA.Ptr(2147483647,"PT_HIPROC")]);    0	ptStrings0(debug/elf:intNamedebug/elf:ptStrings0Å†  c    AD=new($sliceType(CA))([new CA.Ptr(1,"PF_X"),new CA.Ptr(2,"PF_W"),new CA.Ptr(4,"PF_R")]);    0	pfStrings0(debug/elf:intNamedebug/elf:pfStrings0Ç  Ç√    AF=new($sliceType(CA))([new CA.Ptr(0,"DT_NULL"),new CA.Ptr(1,"DT_NEEDED"),new CA.Ptr(2,"DT_PLTRELSZ"),new CA.Ptr(3,"DT_PLTGOT"),new CA.Ptr(4,"DT_HASH"),new CA.Ptr(5,"DT_STRTAB"),new CA.Ptr(6,"DT_SYMTAB"),new CA.Ptr(7,"DT_RELA"),new CA.Ptr(8,"DT_RELASZ"),new CA.Ptr(9,"DT_RELAENT"),new CA.Ptr(10,"DT_STRSZ"),new CA.Ptr(11,"DT_SYMENT"),new CA.Ptr(12,"DT_INIT"),new CA.Ptr(13,"DT_FINI"),new CA.Ptr(14,"DT_SONAME"),new CA.Ptr(15,"DT_RPATH"),new CA.Ptr(16,"DT_SYMBOLIC"),new CA.Ptr(17,"DT_REL"),new CA.Ptr(18,"DT_RELSZ"),new CA.Ptr(19,"DT_RELENT"),new CA.Ptr(20,"DT_PLTREL"),new CA.Ptr(21,"DT_DEBUG"),new CA.Ptr(22,"DT_TEXTREL"),new CA.Ptr(23,"DT_JMPREL"),new CA.Ptr(24,"DT_BIND_NOW"),new CA.Ptr(25,"DT_INIT_ARRAY"),new CA.Ptr(26,"DT_FINI_ARRAY"),new CA.Ptr(27,"DT_INIT_ARRAYSZ"),new CA.Ptr(28,"DT_FINI_ARRAYSZ"),new CA.Ptr(29,"DT_RUNPATH"),new CA.Ptr(30,"DT_FLAGS"),new CA.Ptr(32,"DT_ENCODING"),new CA.Ptr(32,"DT_PREINIT_ARRAY"),new CA.Ptr(33,"DT_PREINIT_ARRAYSZ"),new CA.Ptr(1610612749,"DT_LOOS"),new CA.Ptr(1879044096,"DT_HIOS"),new CA.Ptr(1879048176,"DT_VERSYM"),new CA.Ptr(1879048190,"DT_VERNEED"),new CA.Ptr(1879048191,"DT_VERNEEDNUM"),new CA.Ptr(1879048192,"DT_LOPROC"),new CA.Ptr(2147483647,"DT_HIPROC")]);    0	dtStrings0(debug/elf:dtStringsdebug/elf:intName0ÅÙ  Å∞    AH=new($sliceType(CA))([new CA.Ptr(1,"DF_ORIGIN"),new CA.Ptr(2,"DF_SYMBOLIC"),new CA.Ptr(4,"DF_TEXTREL"),new CA.Ptr(8,"DF_BIND_NOW"),new CA.Ptr(16,"DF_STATIC_TLS")]);    0dflagStrings0+debug/elf:dflagStringsdebug/elf:intName0Åª  x    AJ=new($sliceType(CA))([new CA.Ptr(1,"NT_PRSTATUS"),new CA.Ptr(2,"NT_FPREGSET"),new CA.Ptr(3,"NT_PRPSINFO")]);    0ntypeStrings0+debug/elf:intNamedebug/elf:ntypeStrings0Ç  Åﬁ    AL=new($sliceType(CA))([new CA.Ptr(0,"STB_LOCAL"),new CA.Ptr(1,"STB_GLOBAL"),new CA.Ptr(2,"STB_WEAK"),new CA.Ptr(10,"STB_LOOS"),new CA.Ptr(12,"STB_HIOS"),new CA.Ptr(13,"STB_LOPROC"),new CA.Ptr(15,"STB_HIPROC")]);    0
stbStrings0)debug/elf:intNamedebug/elf:stbStrings0Çà  ÇG    AN=new($sliceType(CA))([new CA.Ptr(0,"STT_NOTYPE"),new CA.Ptr(1,"STT_OBJECT"),new CA.Ptr(2,"STT_FUNC"),new CA.Ptr(3,"STT_SECTION"),new CA.Ptr(4,"STT_FILE"),new CA.Ptr(5,"STT_COMMON"),new CA.Ptr(6,"STT_TLS"),new CA.Ptr(10,"STT_LOOS"),new CA.Ptr(12,"STT_HIOS"),new CA.Ptr(13,"STT_LOPROC"),new CA.Ptr(15,"STT_HIPROC")]);    0
sttStrings0)debug/elf:intNamedebug/elf:sttStrings0Å÷  Åñ    AP=new($sliceType(CA))([new CA.Ptr(0,"STV_DEFAULT"),new CA.Ptr(1,"STV_INTERNAL"),new CA.Ptr(2,"STV_HIDDEN"),new CA.Ptr(3,"STV_PROTECTED")]);    0
stvStrings0)debug/elf:intNamedebug/elf:stvStrings0Çj  Ç!    AR=new($sliceType(CA))([new CA.Ptr(0,"R_X86_64_NONE"),new CA.Ptr(1,"R_X86_64_64"),new CA.Ptr(2,"R_X86_64_PC32"),new CA.Ptr(3,"R_X86_64_GOT32"),new CA.Ptr(4,"R_X86_64_PLT32"),new CA.Ptr(5,"R_X86_64_COPY"),new CA.Ptr(6,"R_X86_64_GLOB_DAT"),new CA.Ptr(7,"R_X86_64_JMP_SLOT"),new CA.Ptr(8,"R_X86_64_RELATIVE"),new CA.Ptr(9,"R_X86_64_GOTPCREL"),new CA.Ptr(10,"R_X86_64_32"),new CA.Ptr(11,"R_X86_64_32S"),new CA.Ptr(12,"R_X86_64_16"),new CA.Ptr(13,"R_X86_64_PC16"),new CA.Ptr(14,"R_X86_64_8"),new CA.Ptr(15,"R_X86_64_PC8"),new CA.Ptr(16,"R_X86_64_DTPMOD64"),new CA.Ptr(17,"R_X86_64_DTPOFF64"),new CA.Ptr(18,"R_X86_64_TPOFF64"),new CA.Ptr(19,"R_X86_64_TLSGD"),new CA.Ptr(20,"R_X86_64_TLSLD"),new CA.Ptr(21,"R_X86_64_DTPOFF32"),new CA.Ptr(22,"R_X86_64_GOTTPOFF"),new CA.Ptr(23,"R_X86_64_TPOFF32")]);    0rx86_64Strings0-debug/elf:intNamedebug/elf:rx86_64Strings0Ç  ÇÀ    AT=new($sliceType(CA))([new CA.Ptr(0,"R_ALPHA_NONE"),new CA.Ptr(1,"R_ALPHA_REFLONG"),new CA.Ptr(2,"R_ALPHA_REFQUAD"),new CA.Ptr(3,"R_ALPHA_GPREL32"),new CA.Ptr(4,"R_ALPHA_LITERAL"),new CA.Ptr(5,"R_ALPHA_LITUSE"),new CA.Ptr(6,"R_ALPHA_GPDISP"),new CA.Ptr(7,"R_ALPHA_BRADDR"),new CA.Ptr(8,"R_ALPHA_HINT"),new CA.Ptr(9,"R_ALPHA_SREL16"),new CA.Ptr(10,"R_ALPHA_SREL32"),new CA.Ptr(11,"R_ALPHA_SREL64"),new CA.Ptr(12,"R_ALPHA_OP_PUSH"),new CA.Ptr(13,"R_ALPHA_OP_STORE"),new CA.Ptr(14,"R_ALPHA_OP_PSUB"),new CA.Ptr(15,"R_ALPHA_OP_PRSHIFT"),new CA.Ptr(16,"R_ALPHA_GPVALUE"),new CA.Ptr(17,"R_ALPHA_GPRELHIGH"),new CA.Ptr(18,"R_ALPHA_GPRELLOW"),new CA.Ptr(19,"R_ALPHA_IMMED_GP_16"),new CA.Ptr(20,"R_ALPHA_IMMED_GP_HI32"),new CA.Ptr(21,"R_ALPHA_IMMED_SCN_HI32"),new CA.Ptr(22,"R_ALPHA_IMMED_BR_HI32"),new CA.Ptr(23,"R_ALPHA_IMMED_LO32"),new CA.Ptr(24,"R_ALPHA_COPY"),new CA.Ptr(25,"R_ALPHA_GLOB_DAT"),new CA.Ptr(26,"R_ALPHA_JMP_SLOT"),new CA.Ptr(27,"R_ALPHA_RELATIVE")]);    0ralphaStrings0,debug/elf:intNamedebug/elf:ralphaStrings0ÇU  Ç    AV=new($sliceType(CA))([new CA.Ptr(0,"R_ARM_NONE"),new CA.Ptr(1,"R_ARM_PC24"),new CA.Ptr(2,"R_ARM_ABS32"),new CA.Ptr(3,"R_ARM_REL32"),new CA.Ptr(4,"R_ARM_PC13"),new CA.Ptr(5,"R_ARM_ABS16"),new CA.Ptr(6,"R_ARM_ABS12"),new CA.Ptr(7,"R_ARM_THM_ABS5"),new CA.Ptr(8,"R_ARM_ABS8"),new CA.Ptr(9,"R_ARM_SBREL32"),new CA.Ptr(10,"R_ARM_THM_PC22"),new CA.Ptr(11,"R_ARM_THM_PC8"),new CA.Ptr(12,"R_ARM_AMP_VCALL9"),new CA.Ptr(13,"R_ARM_SWI24"),new CA.Ptr(14,"R_ARM_THM_SWI8"),new CA.Ptr(15,"R_ARM_XPC25"),new CA.Ptr(16,"R_ARM_THM_XPC22"),new CA.Ptr(20,"R_ARM_COPY"),new CA.Ptr(21,"R_ARM_GLOB_DAT"),new CA.Ptr(22,"R_ARM_JUMP_SLOT"),new CA.Ptr(23,"R_ARM_RELATIVE"),new CA.Ptr(24,"R_ARM_GOTOFF"),new CA.Ptr(25,"R_ARM_GOTPC"),new CA.Ptr(26,"R_ARM_GOT32"),new CA.Ptr(27,"R_ARM_PLT32"),new CA.Ptr(100,"R_ARM_GNU_VTENTRY"),new CA.Ptr(101,"R_ARM_GNU_VTINHERIT"),new CA.Ptr(250,"R_ARM_RSBREL32"),new CA.Ptr(251,"R_ARM_THM_RPC22"),new CA.Ptr(252,"R_ARM_RREL32"),new CA.Ptr(253,"R_ARM_RABS32"),new CA.Ptr(254,"R_ARM_RPC24"),new CA.Ptr(255,"R_ARM_RBASE")]);    0rarmStrings0*debug/elf:intNamedebug/elf:rarmStrings0Ç@  Ç˝    AX=new($sliceType(CA))([new CA.Ptr(0,"R_386_NONE"),new CA.Ptr(1,"R_386_32"),new CA.Ptr(2,"R_386_PC32"),new CA.Ptr(3,"R_386_GOT32"),new CA.Ptr(4,"R_386_PLT32"),new CA.Ptr(5,"R_386_COPY"),new CA.Ptr(6,"R_386_GLOB_DAT"),new CA.Ptr(7,"R_386_JMP_SLOT"),new CA.Ptr(8,"R_386_RELATIVE"),new CA.Ptr(9,"R_386_GOTOFF"),new CA.Ptr(10,"R_386_GOTPC"),new CA.Ptr(14,"R_386_TLS_TPOFF"),new CA.Ptr(15,"R_386_TLS_IE"),new CA.Ptr(16,"R_386_TLS_GOTIE"),new CA.Ptr(17,"R_386_TLS_LE"),new CA.Ptr(18,"R_386_TLS_GD"),new CA.Ptr(19,"R_386_TLS_LDM"),new CA.Ptr(24,"R_386_TLS_GD_32"),new CA.Ptr(25,"R_386_TLS_GD_PUSH"),new CA.Ptr(26,"R_386_TLS_GD_CALL"),new CA.Ptr(27,"R_386_TLS_GD_POP"),new CA.Ptr(28,"R_386_TLS_LDM_32"),new CA.Ptr(29,"R_386_TLS_LDM_PUSH"),new CA.Ptr(30,"R_386_TLS_LDM_CALL"),new CA.Ptr(31,"R_386_TLS_LDM_POP"),new CA.Ptr(32,"R_386_TLS_LDO_32"),new CA.Ptr(33,"R_386_TLS_IE_32"),new CA.Ptr(34,"R_386_TLS_LE_32"),new CA.Ptr(35,"R_386_TLS_DTPMOD32"),new CA.Ptr(36,"R_386_TLS_DTPOFF32"),new CA.Ptr(37,"R_386_TLS_TPOFF32")]);    0r386Strings0*debug/elf:intNamedebug/elf:r386Strings0Ç
å  Ç
I    AZ=new($sliceType(CA))([new CA.Ptr(0,"R_PPC_NONE"),new CA.Ptr(1,"R_PPC_ADDR32"),new CA.Ptr(2,"R_PPC_ADDR24"),new CA.Ptr(3,"R_PPC_ADDR16"),new CA.Ptr(4,"R_PPC_ADDR16_LO"),new CA.Ptr(5,"R_PPC_ADDR16_HI"),new CA.Ptr(6,"R_PPC_ADDR16_HA"),new CA.Ptr(7,"R_PPC_ADDR14"),new CA.Ptr(8,"R_PPC_ADDR14_BRTAKEN"),new CA.Ptr(9,"R_PPC_ADDR14_BRNTAKEN"),new CA.Ptr(10,"R_PPC_REL24"),new CA.Ptr(11,"R_PPC_REL14"),new CA.Ptr(12,"R_PPC_REL14_BRTAKEN"),new CA.Ptr(13,"R_PPC_REL14_BRNTAKEN"),new CA.Ptr(14,"R_PPC_GOT16"),new CA.Ptr(15,"R_PPC_GOT16_LO"),new CA.Ptr(16,"R_PPC_GOT16_HI"),new CA.Ptr(17,"R_PPC_GOT16_HA"),new CA.Ptr(18,"R_PPC_PLTREL24"),new CA.Ptr(19,"R_PPC_COPY"),new CA.Ptr(20,"R_PPC_GLOB_DAT"),new CA.Ptr(21,"R_PPC_JMP_SLOT"),new CA.Ptr(22,"R_PPC_RELATIVE"),new CA.Ptr(23,"R_PPC_LOCAL24PC"),new CA.Ptr(24,"R_PPC_UADDR32"),new CA.Ptr(25,"R_PPC_UADDR16"),new CA.Ptr(26,"R_PPC_REL32"),new CA.Ptr(27,"R_PPC_PLT32"),new CA.Ptr(28,"R_PPC_PLTREL32"),new CA.Ptr(29,"R_PPC_PLT16_LO"),new CA.Ptr(30,"R_PPC_PLT16_HI"),new CA.Ptr(31,"R_PPC_PLT16_HA"),new CA.Ptr(32,"R_PPC_SDAREL16"),new CA.Ptr(33,"R_PPC_SECTOFF"),new CA.Ptr(34,"R_PPC_SECTOFF_LO"),new CA.Ptr(35,"R_PPC_SECTOFF_HI"),new CA.Ptr(36,"R_PPC_SECTOFF_HA"),new CA.Ptr(67,"R_PPC_TLS"),new CA.Ptr(68,"R_PPC_DTPMOD32"),new CA.Ptr(69,"R_PPC_TPREL16"),new CA.Ptr(70,"R_PPC_TPREL16_LO"),new CA.Ptr(71,"R_PPC_TPREL16_HI"),new CA.Ptr(72,"R_PPC_TPREL16_HA"),new CA.Ptr(73,"R_PPC_TPREL32"),new CA.Ptr(74,"R_PPC_DTPREL16"),new CA.Ptr(75,"R_PPC_DTPREL16_LO"),new CA.Ptr(76,"R_PPC_DTPREL16_HI"),new CA.Ptr(77,"R_PPC_DTPREL16_HA"),new CA.Ptr(78,"R_PPC_DTPREL32"),new CA.Ptr(79,"R_PPC_GOT_TLSGD16"),new CA.Ptr(80,"R_PPC_GOT_TLSGD16_LO"),new CA.Ptr(81,"R_PPC_GOT_TLSGD16_HI"),new CA.Ptr(82,"R_PPC_GOT_TLSGD16_HA"),new CA.Ptr(83,"R_PPC_GOT_TLSLD16"),new CA.Ptr(84,"R_PPC_GOT_TLSLD16_LO"),new CA.Ptr(85,"R_PPC_GOT_TLSLD16_HI"),new CA.Ptr(86,"R_PPC_GOT_TLSLD16_HA"),new CA.Ptr(87,"R_PPC_GOT_TPREL16"),new CA.Ptr(88,"R_PPC_GOT_TPREL16_LO"),new CA.Ptr(89,"R_PPC_GOT_TPREL16_HI"),new CA.Ptr(90,"R_PPC_GOT_TPREL16_HA"),new CA.Ptr(101,"R_PPC_EMB_NADDR32"),new CA.Ptr(102,"R_PPC_EMB_NADDR16"),new CA.Ptr(103,"R_PPC_EMB_NADDR16_LO"),new CA.Ptr(104,"R_PPC_EMB_NADDR16_HI"),new CA.Ptr(105,"R_PPC_EMB_NADDR16_HA"),new CA.Ptr(106,"R_PPC_EMB_SDAI16"),new CA.Ptr(107,"R_PPC_EMB_SDA2I16"),new CA.Ptr(108,"R_PPC_EMB_SDA2REL"),new CA.Ptr(109,"R_PPC_EMB_SDA21"),new CA.Ptr(110,"R_PPC_EMB_MRKREF"),new CA.Ptr(111,"R_PPC_EMB_RELSEC16"),new CA.Ptr(112,"R_PPC_EMB_RELST_LO"),new CA.Ptr(113,"R_PPC_EMB_RELST_HI"),new CA.Ptr(114,"R_PPC_EMB_RELST_HA"),new CA.Ptr(115,"R_PPC_EMB_BIT_FLD"),new CA.Ptr(116,"R_PPC_EMB_RELSDA")]);    0rppcStrings0*debug/elf:intNamedebug/elf:rppcStrings0Ç  Ç÷    BB=new($sliceType(CA))([new CA.Ptr(0,"R_SPARC_NONE"),new CA.Ptr(1,"R_SPARC_8"),new CA.Ptr(2,"R_SPARC_16"),new CA.Ptr(3,"R_SPARC_32"),new CA.Ptr(4,"R_SPARC_DISP8"),new CA.Ptr(5,"R_SPARC_DISP16"),new CA.Ptr(6,"R_SPARC_DISP32"),new CA.Ptr(7,"R_SPARC_WDISP30"),new CA.Ptr(8,"R_SPARC_WDISP22"),new CA.Ptr(9,"R_SPARC_HI22"),new CA.Ptr(10,"R_SPARC_22"),new CA.Ptr(11,"R_SPARC_13"),new CA.Ptr(12,"R_SPARC_LO10"),new CA.Ptr(13,"R_SPARC_GOT10"),new CA.Ptr(14,"R_SPARC_GOT13"),new CA.Ptr(15,"R_SPARC_GOT22"),new CA.Ptr(16,"R_SPARC_PC10"),new CA.Ptr(17,"R_SPARC_PC22"),new CA.Ptr(18,"R_SPARC_WPLT30"),new CA.Ptr(19,"R_SPARC_COPY"),new CA.Ptr(20,"R_SPARC_GLOB_DAT"),new CA.Ptr(21,"R_SPARC_JMP_SLOT"),new CA.Ptr(22,"R_SPARC_RELATIVE"),new CA.Ptr(23,"R_SPARC_UA32"),new CA.Ptr(24,"R_SPARC_PLT32"),new CA.Ptr(25,"R_SPARC_HIPLT22"),new CA.Ptr(26,"R_SPARC_LOPLT10"),new CA.Ptr(27,"R_SPARC_PCPLT32"),new CA.Ptr(28,"R_SPARC_PCPLT22"),new CA.Ptr(29,"R_SPARC_PCPLT10"),new CA.Ptr(30,"R_SPARC_10"),new CA.Ptr(31,"R_SPARC_11"),new CA.Ptr(32,"R_SPARC_64"),new CA.Ptr(33,"R_SPARC_OLO10"),new CA.Ptr(34,"R_SPARC_HH22"),new CA.Ptr(35,"R_SPARC_HM10"),new CA.Ptr(36,"R_SPARC_LM22"),new CA.Ptr(37,"R_SPARC_PC_HH22"),new CA.Ptr(38,"R_SPARC_PC_HM10"),new CA.Ptr(39,"R_SPARC_PC_LM22"),new CA.Ptr(40,"R_SPARC_WDISP16"),new CA.Ptr(41,"R_SPARC_WDISP19"),new CA.Ptr(42,"R_SPARC_GLOB_JMP"),new CA.Ptr(43,"R_SPARC_7"),new CA.Ptr(44,"R_SPARC_5"),new CA.Ptr(45,"R_SPARC_6"),new CA.Ptr(46,"R_SPARC_DISP64"),new CA.Ptr(47,"R_SPARC_PLT64"),new CA.Ptr(48,"R_SPARC_HIX22"),new CA.Ptr(49,"R_SPARC_LOX10"),new CA.Ptr(50,"R_SPARC_H44"),new CA.Ptr(51,"R_SPARC_M44"),new CA.Ptr(52,"R_SPARC_L44"),new CA.Ptr(53,"R_SPARC_REGISTER"),new CA.Ptr(54,"R_SPARC_UA64"),new CA.Ptr(55,"R_SPARC_UA16")]);    0rsparcStrings0,debug/elf:intNamedebug/elf:rsparcStrings0Ç  Å©I.prototype.String=function(){var a;  °a=this.$val;  ¿return CB((a>>>0),J,false);    };$ptrType(I).prototype.String=function(){return new I(this.$get()).String();}; 0	Version0Cdebug/elf:Versiondebug/elf:stringNamedebug/elf:versionStrings0Ç ÅÆI.prototype.GoString=function(){var a;  ¸a=this.$val;  return CB((a>>>0),J,true);    };$ptrType(I).prototype.GoString=function(){return new I(this.$get()).GoString();}; 0	Version0Cdebug/elf:Versiondebug/elf:stringNamedebug/elf:versionStrings0Å˙ Å©K.prototype.String=function(){var a;  £a=this.$val;  ¿return CB((a>>>0),L,false);    };$ptrType(K).prototype.String=function(){return new K(this.$get()).String();}; 0Class0?debug/elf:Classdebug/elf:classStringsdebug/elf:stringName0Åˇ ÅÆK.prototype.GoString=function(){var a;  ˙a=this.$val;  return CB((a>>>0),L,true);    };$ptrType(K).prototype.GoString=function(){return new K(this.$get()).GoString();}; 0Class0?debug/elf:Classdebug/elf:classStringsdebug/elf:stringName0Å˜ Å©M.prototype.String=function(){var a;  ®a=this.$val;  ƒreturn CB((a>>>0),N,false);    };$ptrType(M).prototype.String=function(){return new M(this.$get()).String();}; 0Data0=debug/elf:Datadebug/elf:dataStringsdebug/elf:stringName0Å¸ ÅÆM.prototype.GoString=function(){var a;  ˝a=this.$val;  return CB((a>>>0),N,true);    };$ptrType(M).prototype.GoString=function(){return new M(this.$get()).GoString();}; 0Data0=debug/elf:Datadebug/elf:dataStringsdebug/elf:stringName0Å˙ Å©O.prototype.String=function(){var a;  ‚a=this.$val;  ˇreturn CB((a>>>0),P,false);    };$ptrType(O).prototype.String=function(){return new O(this.$get()).String();}; 0OSABI0?debug/elf:OSABIdebug/elf:osabiStringsdebug/elf:stringName0Åˇ ÅÆO.prototype.GoString=function(){var a;  9a=this.$val;  Vreturn CB((a>>>0),P,true);    };$ptrType(O).prototype.GoString=function(){return new O(this.$get()).GoString();}; 0OSABI0?debug/elf:OSABIdebug/elf:osabiStringsdebug/elf:stringName0Å˜ Å©Q.prototype.String=function(){var a;  ia=this.$val;  Öreturn CB((a>>>0),R,false);    };$ptrType(Q).prototype.String=function(){return new Q(this.$get()).String();}; 0Type0=debug/elf:Typedebug/elf:stringNamedebug/elf:typeStrings0Å¸ ÅÆQ.prototype.GoString=function(){var a;  æa=this.$val;  ⁄return CB((a>>>0),R,true);    };$ptrType(Q).prototype.GoString=function(){return new Q(this.$get()).GoString();}; 0Type0=debug/elf:Typedebug/elf:stringNamedebug/elf:typeStrings0Ç  Å©S.prototype.String=function(){var a;  (&a=this.$val;  (Ereturn CB((a>>>0),T,false);    };$ptrType(S).prototype.String=function(){return new S(this.$get()).String();}; 0	Machine0Cdebug/elf:Machinedebug/elf:machineStringsdebug/elf:stringName0Ç ÅÆS.prototype.GoString=function(){var a;  (Åa=this.$val;  (†return CB((a>>>0),T,true);    };$ptrType(S).prototype.GoString=function(){return new S(this.$get()).GoString();}; 0	Machine0Cdebug/elf:Machinedebug/elf:machineStringsdebug/elf:stringName0Ç Å©U.prototype.String=function(){var a;  ,wa=this.$val;  ,õreturn CB((a>>>0),V,false);    };$ptrType(U).prototype.String=function(){return new U(this.$get()).String();}; 0SectionIndex0Ddebug/elf:SectionIndexdebug/elf:shnStringsdebug/elf:stringName0Ç ÅÆU.prototype.GoString=function(){var a;  ,”a=this.$val;  ,˜return CB((a>>>0),V,true);    };$ptrType(U).prototype.GoString=function(){return new U(this.$get()).GoString();}; 0SectionIndex0Ddebug/elf:SectionIndexdebug/elf:shnStringsdebug/elf:stringName0Ç Å©W.prototype.String=function(){var a;  8‰a=this.$val;  9return CB((a>>>0),X,false);    };$ptrType(W).prototype.String=function(){return new W(this.$get()).String();}; 0SectionType0Cdebug/elf:SectionTypedebug/elf:shtStringsdebug/elf:stringName0Ç	 ÅÆW.prototype.GoString=function(){var a;  9?a=this.$val;  9breturn CB((a>>>0),X,true);    };$ptrType(W).prototype.GoString=function(){return new W(this.$get()).GoString();}; 0SectionType0Cdebug/elf:SectionTypedebug/elf:shtStringsdebug/elf:stringName0Ç Å©Y.prototype.String=function(){var a;  >Æa=this.$val;  >—return CC((a>>>0),Z,false);    };$ptrType(Y).prototype.String=function(){return new Y(this.$get()).String();}; 0SectionFlag0Adebug/elf:SectionFlagdebug/elf:flagNamedebug/elf:shfStrings0Ç ÅÆY.prototype.GoString=function(){var a;  ?a=this.$val;  ?*return CC((a>>>0),Z,true);    };$ptrType(Y).prototype.GoString=function(){return new Y(this.$get()).GoString();}; 0SectionFlag0Adebug/elf:SectionFlagdebug/elf:flagNamedebug/elf:shfStrings0Ç Å≠AA.prototype.String=function(){var a;  CÆa=this.$val;  CŒreturn CB((a>>>0),AB,false);    };$ptrType(AA).prototype.String=function(){return new AA(this.$get()).String();}; 0
ProgType0?debug/elf:ProgTypedebug/elf:ptStringsdebug/elf:stringName0Ç Å≤AA.prototype.GoString=function(){var a;  Da=this.$val;  D%return CB((a>>>0),AB,true);    };$ptrType(AA).prototype.GoString=function(){return new AA(this.$get()).GoString();}; 0
ProgType0?debug/elf:ProgTypedebug/elf:ptStringsdebug/elf:stringName0Åˇ Å≠AC.prototype.String=function(){var a;  EÙa=this.$val;  Freturn CC((a>>>0),AD,false);    };$ptrType(AC).prototype.String=function(){return new AC(this.$get()).String();}; 0
ProgFlag0=debug/elf:ProgFlagdebug/elf:flagNamedebug/elf:pfStrings0Ç Å≤AC.prototype.GoString=function(){var a;  FIa=this.$val;  Fireturn CC((a>>>0),AD,true);    };$ptrType(AC).prototype.GoString=function(){return new AC(this.$get()).GoString();}; 0
ProgFlag0=debug/elf:ProgFlagdebug/elf:flagNamedebug/elf:pfStrings0Å˝ Å≠AE.prototype.String=function(){var a;  V{a=this.$val;  Vôreturn CB((a>>>0),AF,false);    };$ptrType(AE).prototype.String=function(){return new AE(this.$get()).String();}; 0DynTag0=debug/elf:DynTagdebug/elf:dtStringsdebug/elf:stringName0Ç Å≤AE.prototype.GoString=function(){var a;  V–a=this.$val;  VÓreturn CB((a>>>0),AF,true);    };$ptrType(AE).prototype.GoString=function(){return new AE(this.$get()).GoString();}; 0DynTag0=debug/elf:DynTagdebug/elf:dtStringsdebug/elf:stringName0Ç  Å≠AG.prototype.String=function(){var a;  Z{a=this.$val;  Zöreturn CC((a>>>0),AH,false);    };$ptrType(AG).prototype.String=function(){return new AG(this.$get()).String();}; 0	DynFlag0?debug/elf:DynFlagdebug/elf:dflagStringsdebug/elf:flagName0Ç Å≤AG.prototype.GoString=function(){var a;  Z“a=this.$val;  ZÒreturn CC((a>>>0),AH,true);    };$ptrType(AG).prototype.GoString=function(){return new AG(this.$get()).GoString();}; 0	DynFlag0?debug/elf:DynFlagdebug/elf:dflagStringsdebug/elf:flagName0Å˛ Å≠AI.prototype.String=function(){var a;  \^a=this.$val;  \{return CB((a>>>0),AJ,false);    };$ptrType(AI).prototype.String=function(){return new AI(this.$get()).String();}; 0NType0?debug/elf:NTypedebug/elf:ntypeStringsdebug/elf:stringName0Ç Å≤AI.prototype.GoString=function(){var a;  \µa=this.$val;  \“return CB((a>>>0),AJ,true);    };$ptrType(AI).prototype.GoString=function(){return new AI(this.$get()).GoString();}; 0NType0?debug/elf:NTypedebug/elf:ntypeStringsdebug/elf:stringName0Ç  Å≠AK.prototype.String=function(){var a;  _Äa=this.$val;  _üreturn CB((a>>>0),AL,false);    };$ptrType(AK).prototype.String=function(){return new AK(this.$get()).String();}; 0	SymBind0?debug/elf:SymBinddebug/elf:stbStringsdebug/elf:stringName0Ç Å≤AK.prototype.GoString=function(){var a;  _◊a=this.$val;  _ˆreturn CB((a>>>0),AL,true);    };$ptrType(AK).prototype.GoString=function(){return new AK(this.$get()).GoString();}; 0	SymBind0?debug/elf:SymBinddebug/elf:stbStringsdebug/elf:stringName0Ç  Å≠AM.prototype.String=function(){var a;  c†a=this.$val;  cøreturn CB((a>>>0),AN,false);    };$ptrType(AM).prototype.String=function(){return new AM(this.$get()).String();}; 0	SymType0?debug/elf:SymTypedebug/elf:stringNamedebug/elf:sttStrings0Ç Å≤AM.prototype.GoString=function(){var a;  c˜a=this.$val;  dreturn CB((a>>>0),AN,true);    };$ptrType(AM).prototype.GoString=function(){return new AM(this.$get()).GoString();}; 0	SymType0?debug/elf:SymTypedebug/elf:stringNamedebug/elf:sttStrings0Å˛ Å≠AO.prototype.String=function(){var a;  fa=this.$val;  f:return CB((a>>>0),AP,false);    };$ptrType(AO).prototype.String=function(){return new AO(this.$get()).String();}; 0SymVis0>debug/elf:SymVisdebug/elf:stringNamedebug/elf:stvStrings0Ç Å≤AO.prototype.GoString=function(){var a;  fra=this.$val;  fêreturn CB((a>>>0),AP,true);    };$ptrType(AO).prototype.GoString=function(){return new AO(this.$get()).GoString();}; 0SymVis0>debug/elf:SymVisdebug/elf:stringNamedebug/elf:stvStrings0Ç Å≠AQ.prototype.String=function(){var a;  pXa=this.$val;  pxreturn CB((a>>>0),AR,false);    };$ptrType(AQ).prototype.String=function(){return new AQ(this.$get()).String();}; 0
R_X86_640Ddebug/elf:R_X86_64debug/elf:rx86_64Stringsdebug/elf:stringName0Ç Å≤AQ.prototype.GoString=function(){var a;  p¥a=this.$val;  p‘return CB((a>>>0),AR,true);    };$ptrType(AQ).prototype.GoString=function(){return new AQ(this.$get()).GoString();}; 0
R_X86_640Ddebug/elf:R_X86_64debug/elf:rx86_64Stringsdebug/elf:stringName0Ç Å≠AS.prototype.String=function(){var a;  zsa=this.$val;  zíreturn CB((a>>>0),AT,false);    };$ptrType(AS).prototype.String=function(){return new AS(this.$get()).String();}; 0	R_ALPHA0Bdebug/elf:R_ALPHAdebug/elf:ralphaStringsdebug/elf:stringName0Ç Å≤AS.prototype.GoString=function(){var a;  zÕa=this.$val;  zÏreturn CB((a>>>0),AT,true);    };$ptrType(AS).prototype.GoString=function(){return new AS(this.$get()).GoString();}; 0	R_ALPHA0Bdebug/elf:R_ALPHAdebug/elf:ralphaStringsdebug/elf:stringName0Å˝ Å≠AU.prototype.String=function(){var a;  É‰a=this.$val;  Ñreturn CB((a>>>0),AV,false);    };$ptrType(AU).prototype.String=function(){return new AU(this.$get()).String();}; 0R_ARM0>debug/elf:R_ARMdebug/elf:rarmStringsdebug/elf:stringName0Ç Å≤AU.prototype.GoString=function(){var a;  Ñ:a=this.$val;  ÑWreturn CB((a>>>0),AV,true);    };$ptrType(AU).prototype.GoString=function(){return new AU(this.$get()).GoString();}; 0R_ARM0>debug/elf:R_ARMdebug/elf:rarmStringsdebug/elf:stringName0Å˝ Å≠AW.prototype.String=function(){var a;  ê®a=this.$val;  ê≈return CB((a>>>0),AX,false);    };$ptrType(AW).prototype.String=function(){return new AW(this.$get()).String();}; 0R_3860>debug/elf:R_386debug/elf:r386Stringsdebug/elf:stringName0Ç Å≤AW.prototype.GoString=function(){var a;  ê˛a=this.$val;  ëreturn CB((a>>>0),AX,true);    };$ptrType(AW).prototype.GoString=function(){return new AW(this.$get()).GoString();}; 0R_3860>debug/elf:R_386debug/elf:r386Stringsdebug/elf:stringName0Å˝ Å≠AY.prototype.String=function(){var a;  §a=this.$val;  §.return CB((a>>>0),AZ,false);    };$ptrType(AY).prototype.String=function(){return new AY(this.$get()).String();}; 0R_PPC0>debug/elf:R_PPCdebug/elf:rppcStringsdebug/elf:stringName0Ç Å≤AY.prototype.GoString=function(){var a;  §ga=this.$val;  §Ñreturn CB((a>>>0),AZ,true);    };$ptrType(AY).prototype.GoString=function(){return new AY(this.$get()).GoString();}; 0R_PPC0>debug/elf:R_PPCdebug/elf:rppcStringsdebug/elf:stringName0Ç Å≠BA.prototype.String=function(){var a;  ±a=this.$val;  ±"return CB((a>>>0),BB,false);    };$ptrType(BA).prototype.String=function(){return new BA(this.$get()).String();}; 0	R_SPARC0Bdebug/elf:R_SPARCdebug/elf:rsparcStringsdebug/elf:stringName0Ç Å≤BA.prototype.GoString=function(){var a;  ±]a=this.$val;  ±|return CB((a>>>0),BB,true);    };$ptrType(BA).prototype.GoString=function(){return new BA(this.$get()).GoString();}; 0	R_SPARC0Bdebug/elf:R_SPARCdebug/elf:rsparcStringsdebug/elf:stringName0OBI:BI=$pkg.R_SYM32=function(a){  ªƒreturn(a>>>8>>>0);    }; 0	R_SYM320 0SBJ=BJ=$pkg.R_TYPE32=function(a){  ºreturn((a&255)>>>0);    }; 0
R_TYPE320 0ZBKDBK=$pkg.R_INFO32=function(a,b){  ºLreturn((a<<8>>>0)|b)>>>0;    }; 0
R_INFO320 0YBMDBM=$pkg.ST_BIND=function(a){  Ωreturn((a>>>4<<24>>>24)>>0);    }; 0	ST_BIND0 0UBN@BN=$pkg.ST_TYPE=function(a){  ΩUreturn(((a&15)>>>0)>>0);    }; 0	ST_TYPE0 0~BOiBO=$pkg.ST_INFO=function(a,b){  Ω£return(((a<<24>>>24)<<4<<24>>>24)|(((b<<24>>>24)&15)>>>0))>>>0;    }; 0	ST_INFO0 0`BPEBP=$pkg.ST_VISIBILITY=function(a){  Ωıreturn(((a&3)>>>0)>>0);    }; 0ST_VISIBILITY0 0eBWPBW=$pkg.R_SYM64=function(a){  «Ωreturn($shiftRightUint64(a,32).low>>>0);    }; 0	R_SYM640 0QBX;BX=$pkg.R_TYPE64=function(a){  «ˇreturn(a.low>>>0);    }; 0
R_TYPE640 0Å≤BYÅùBY=$pkg.R_INFO=function(a,b){var c,d;  »;return(c=$shiftLeft64(new $Uint64(0,a),32),d=new $Uint64(0,b),new $Uint64(c.high|d.high,(c.low|d.low)>>>0));    }; 0R_INFO0 0Ç£CBÇbCB=function(a,b,c){var d,e,f,g,h,i;   )d=b;e=0;while(e<d.length){f=new CA.Ptr();$copy(f,((e<0||e>=d.length)?$throwRuntimeError("index out of range"):d.array[d.offset+e]),CA);   E    if(f.i===a){   V    if(c){   hreturn"elf."+f.s;}   Ñreturn f.s;}e++;}   ‚   Êg=b.length-1>>0;while(g>=0){  Àh=new CA.Ptr();$copy(h,((g<0||g>=b.length)?$throwRuntimeError("index out of range"):b.array[b.offset+g]),CA);  À    if(h.i<a){  À+i=h.s;  À7    if(c){  ÀIi="elf."+i;}  À`return i+"+"+A.FormatUint(new $Uint64(0,(a-h.i>>>0)),10);}  À  Àg=g-1>>0;}  À†return A.FormatUint(new $Uint64(0,a),10);    }; 0
stringName0'debug/elf:intNamestrconv:FormatUint0Ç6CCÇ˜CC=function(a,b,c){var d,e,f,g;  Ãd="";  Ãe=b;f=0;while(f<e.length){g=new CA.Ptr();$copy(g,((f<0||f>=e.length)?$throwRuntimeError("index out of range"):e.array[e.offset+f]),CA);  Ã3    if(((g.i&a)>>>0)===g.i){  ÃH    if(d.length>0){  Ã\d=d+"+";}  Ãm    if(c){  Ãd=d+"elf.";}  Ãìd=d+(g.s);  Ãüa=a-(g.i)>>>0;}f++;}  Ã∞    if(d.length===0){  Ã√return"0x"+A.FormatUint(new $Uint64(0,a),16);}  Ã˜    if(!((a===0))){  Õd=d+("+0x"+A.FormatUint(new $Uint64(0,a),16));}  Õ8return d;    }; 0
flagName0'debug/elf:intNamestrconv:FormatUint0Ço ÇGCG.Ptr.prototype.Data=function(){var a,b,c,d,e;  ”6a=this;  ”\b=($sliceType($Uint8)).make($flatten64(a.sr.Size()),0,function(){return 0;});  ”~c=a.sr.ReadAt(b,new $Int64(0,0));d=c[0];e=c[1];  ”ù    if(d===b.length){  ”≤e=null;}  ”¿return[$subslice(b,0,d),e];    };CG.prototype.Data=function(){return this.$val.Data();}; 0	Section0debug/elf:Section0Çæ ÇÉCE.Ptr.prototype.stringTable=function(a){var b,c;  ‘6b=this;  ‘k    if(a<=0||a>=(b.Sections.length>>>0)){  ‘üreturn[($sliceType($Uint8)).nil,E.New("section has invalid string table link")];}  ‘„return(c=b.Sections,((a<0||a>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+a])).Data();    };CE.prototype.stringTable=function(a){return this.$val.stringTable(a);}; 0FilestringTable0debug/elf:File
errors:New0Ç Å»CG.Ptr.prototype.Open=function(){var a;  ’Ea=this;  ’hreturn G.NewSectionReader(a.sr,new $Int64(0,0),new $Int64(2147483647,4294967295));    };CG.prototype.Open=function(){return this.$val.Open();}; 0	Section0(debug/elf:Sectionio:NewSectionReader0Å˛ Å»CI.Ptr.prototype.Open=function(){var a;  ÿ!a=this;  ÿAreturn G.NewSectionReader(a.sr,new $Int64(0,0),new $Int64(2147483647,4294967295));    };CI.prototype.Open=function(){return this.$val.Open();}; 0Prog0%debug/elf:Progio:NewSectionReader0Çü ÇbCK.Ptr.prototype.Error=function(){var a,b;  Ÿ~a=this;  Ÿ†b=a.msg;  ŸÆ    if(!($interfaceIsEqual(a.val,null))){  Ÿ¬b=b+(F.Sprintf(" '%v' ",new($sliceType($emptyInterface))([a.val])));}  ŸÍb=b+(F.Sprintf("in record at byte %#x",new($sliceType($emptyInterface))([a.off])));  ⁄return b;    };CK.prototype.Error=function(){return this.$val.Error();}; 0FormatError0$debug/elf:FormatErrorfmt:Sprintf0ÇwCLÇ7CL=$pkg.Open=function(a){var b,c,d,e,f;  ⁄™b=H.Open(a);c=b[0];d=b[1];  ⁄√    if(!($interfaceIsEqual(d,null))){  ⁄’return[($ptrType(CE)).nil,d];}  ⁄Èe=CM(c);f=e[0];d=e[1];  €     if(!($interfaceIsEqual(d,null))){  €c.Close();  €return[($ptrType(CE)).nil,d];}  €2f.closer=c;  €Areturn[f,null];    }; 0Open0,debug/elf:Filedebug/elf:NewFileos:Open0Ç ÅÛCE.Ptr.prototype.Close=function(){var a,b;  €Œa=this;  €Ë  €Ïb=null;  €˜    if(!($interfaceIsEqual(a.closer,null))){  ‹b=a.closer.Close();  ‹'a.closer=null;}  ‹:return b;    };CE.prototype.Close=function(){return this.$val.Close();}; 0File0debug/elf:File0Çü ÇjCE.Ptr.prototype.SectionByType=function(a){var b,c,d,e;  ‹∫b=this;  ‹Óc=b.Sections;d=0;while(d<c.length){e=((d<0||d>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+d]);  ›    if(e.SectionHeader.Type===a){  ›%return e;}d++;}  ›6return($ptrType(CG)).nil;    };CE.prototype.SectionByType=function(a){return this.$val.SectionByType(a);}; 0File0#debug/elf:Filedebug/elf:Section0Ç€CMÇ&CM=$pkg.NewFile=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo;  ﬁb=G.NewSectionReader(a,new $Int64(0,0),new $Int64(2147483647,4294967295));  ﬁX  ﬁ\c=($arrayType($Uint8,16)).zero();$copy(c,($arrayType($Uint8,16)).zero(),($arrayType($Uint8,16)));  ﬁm  ﬁpd=a.ReadAt($subslice(new($sliceType($Uint8))(c),0),new $Int64(0,0));e=d[1];    if(!($interfaceIsEqual(e,null))){  ﬁ°return[($ptrType(CE)).nil,e];}  ﬁµ    if(!((c[0]===127))||!((c[1]===69))||!((c[2]===76))||!((c[3]===70))){  ﬂreturn[($ptrType(CE)).nil,new CK.Ptr(new $Int64(0,0),"bad magic number",$subslice(new($sliceType($Uint8))(c),0,4))];}  ﬂIf=new CE.Ptr();  ﬂYf.FileHeader.Class=(c[4]<<24>>>24);  ﬂ{g=f.FileHeader.Class;  ﬂçif(g===1){  ﬂü}else if(g===2){}else{  ﬂƒreturn[($ptrType(CE)).nil,new CK.Ptr(new $Int64(0,0),"unknown ELF class",new K(f.FileHeader.Class))];}  ‡f.FileHeader.Data=(c[5]<<24>>>24);  ‡"h=f.FileHeader.Data;  ‡3if(h===1){  ‡Gf.FileHeader.ByteOrder=(i=D.LittleEndian,new i.constructor.Struct(i));  ‡j}else if(h===2){  ‡~f.FileHeader.ByteOrder=(j=D.BigEndian,new j.constructor.Struct(j));}else{  ‡©return[($ptrType(CE)).nil,new CK.Ptr(new $Int64(0,0),"unknown ELF data encoding",new M(f.FileHeader.Data))];}  ‡Ôf.FileHeader.Version=(c[6]<<24>>>24);  ·    if(!((f.FileHeader.Version===1))){  ·6return[($ptrType(CE)).nil,new CK.Ptr(new $Int64(0,0),"unknown ELF version",new I(f.FileHeader.Version))];}  ·yf.FileHeader.OSABI=(c[7]<<24>>>24);  ·õf.FileHeader.ABIVersion=c[8];  ·⁄  ·ﬁk=new $Int64(0,0);  ·Î  ·Ôl=0;m=0;n=l;o=m;  ‚  ‚	p=new $Int64(0,0);  ‚  ‚q=0;r=0;s=0;t=q;u=r;v=s;  ‚:v=-1;  ‚Iw=f.FileHeader.Class;  ‚[if(w===1){  ‚nx=new BC.Ptr();  ‚Öb.Seek(new $Int64(0,0),0);  ‚ü  ‚¢y=D.Read(b,f.FileHeader.ByteOrder,x);    if(!($interfaceIsEqual(y,null))){  ‚‹return[($ptrType(CE)).nil,y];}  ‚Úf.FileHeader.Type=(x.Type<<16>>>16);  „f.FileHeader.Machine=(x.Machine<<16>>>16);  „/f.FileHeader.Entry=new $Uint64(0,x.Entry);  „M  „Pz=(x.Version<<24>>>24);    if(!((z===f.FileHeader.Version))){  „return[($ptrType(CE)).nil,new CK.Ptr(new $Int64(0,0),"mismatched ELF version",new I(z))];}  „æk=new $Int64(0,x.Phoff);  „Ÿn=(x.Phentsize>>0);  „˙o=(x.Phnum>>0);  ‰p=new $Int64(0,x.Shoff);  ‰.t=(x.Shentsize>>0);  ‰Ou=(x.Shnum>>0);  ‰hv=(x.Shstrndx>>0);  ‰Ü}else if(w===2){  ‰ôaa=new BQ.Ptr();  ‰∞b.Seek(new $Int64(0,0),0);  ‰   ‰Õab=D.Read(b,f.FileHeader.ByteOrder,aa);    if(!($interfaceIsEqual(ab,null))){  Âreturn[($ptrType(CE)).nil,ab];}  Âf.FileHeader.Type=(aa.Type<<16>>>16);  Â7f.FileHeader.Machine=(aa.Machine<<16>>>16);  ÂZf.FileHeader.Entry=aa.Entry;  Âx  Â{ac=(aa.Version<<24>>>24);    if(!((ac===f.FileHeader.Version))){  Â™return[($ptrType(CE)).nil,new CK.Ptr(new $Int64(0,0),"mismatched ELF version",new I(ac))];}  ÂÈk=(ad=aa.Phoff,new $Int64(ad.high,ad.low));  Ên=(aa.Phentsize>>0);  Ê%o=(aa.Phnum>>0);  Ê>p=(ae=aa.Shoff,new $Int64(ae.high,ae.low));  ÊYt=(aa.Shentsize>>0);  Êzu=(aa.Shnum>>0);  Êìv=(aa.Shstrndx>>0);}  Êµ    if(u>0&&(p.high>0||(p.high===0&&p.low>0))&&(v<0||v>=u)){  Ê˙return[($ptrType(CE)).nil,new CK.Ptr(new $Int64(0,0),"invalid ELF shstrndx",new $Int(v))];}  ÁVf.Progs=($sliceType(($ptrType(CI)))).make(o,0,function(){return($ptrType(CI)).nil;});  Áv  Ázaf=0;while(af<o){  Áïah=(ag=$mul64(new $Int64(0,af),new $Int64(0,n)),new $Int64(k.high+ag.high,k.low+ag.low));  Á¿b.Seek(ah,0);  Á‹ai=new CI.Ptr();  ÁÌaj=f.FileHeader.Class;  Ë if(aj===1){  Ëak=new BE.Ptr();  Ë)  Ë,al=D.Read(b,f.FileHeader.ByteOrder,ak);    if(!($interfaceIsEqual(al,null))){  Ëfreturn[($ptrType(CE)).nil,al];}  Ë~$copy(ai.ProgHeader,new CH.Ptr((ak.Type>>0),(ak.Flags>>>0),new $Uint64(0,ak.Off),new $Uint64(0,ak.Vaddr),new $Uint64(0,ak.Paddr),new $Uint64(0,ak.Filesz),new $Uint64(0,ak.Memsz),new $Uint64(0,ak.Align)),CH);  Èí}else if(aj===2){  È¶am=new BS.Ptr();  Èª  Èæan=D.Read(b,f.FileHeader.ByteOrder,am);    if(!($interfaceIsEqual(an,null))){  È¯return[($ptrType(CE)).nil,an];}  Í$copy(ai.ProgHeader,new CH.Ptr((am.Type>>0),(am.Flags>>>0),am.Off,am.Vaddr,am.Paddr,am.Filesz,am.Memsz,am.Align),CH);}  Î(ai.sr=G.NewSectionReader(a,(ao=ai.ProgHeader.Off,new $Int64(ao.high,ao.low)),(ap=ai.ProgHeader.Filesz,new $Int64(ap.high,ap.low)));  Îgai.ReaderAt=ai.sr;  Î{(aq=f.Progs,(af<0||af>=aq.length)?$throwRuntimeError("index out of range"):aq.array[aq.offset+af]=ai);  Áç  Áçaf=af+1>>0;}  Î®f.Sections=($sliceType(($ptrType(CG)))).make(u,0,function(){return($ptrType(CG)).nil;});  ÎŒar=($sliceType($Uint32)).make(u,0,function(){return 0;});  ÎÓ  ÎÚas=0;while(as<u){  Ïau=(at=$mul64(new $Int64(0,as),new $Int64(0,t)),new $Int64(p.high+at.high,p.low+at.low));  Ï8b.Seek(au,0);  ÏTav=new CG.Ptr();  Ïhaw=f.FileHeader.Class;  Ï{if(aw===1){  Ïèax=new BD.Ptr();  Ïß  Ï™ay=D.Read(b,f.FileHeader.ByteOrder,ax);    if(!($interfaceIsEqual(ay,null))){  Ï‰return[($ptrType(CE)).nil,ay];}  Ï¸(as<0||as>=ar.length)?$throwRuntimeError("index out of range"):ar.array[ar.offset+as]=ax.Name;  Ì$copy(av.SectionHeader,new CF.Ptr("",(ax.Type>>>0),(ax.Flags>>>0),new $Uint64(0,ax.Addr),new $Uint64(0,ax.Off),new $Uint64(0,ax.Size),ax.Link,ax.Info,new $Uint64(0,ax.Addralign),new $Uint64(0,ax.Entsize)),CF);  Ól}else if(aw===2){  ÓÄaz=new BR.Ptr();  Óò  Óõba=D.Read(b,f.FileHeader.ByteOrder,az);    if(!($interfaceIsEqual(ba,null))){  Ó’return[($ptrType(CE)).nil,ba];}  ÓÌ(as<0||as>=ar.length)?$throwRuntimeError("index out of range"):ar.array[ar.offset+as]=az.Name;  Ô$copy(av.SectionHeader,new CF.Ptr("",(az.Type>>>0),(az.Flags.low>>>0),az.Addr,az.Off,az.Size,az.Link,az.Info,az.Addralign,az.Entsize),CF);}  aav.sr=G.NewSectionReader(a,(bb=av.SectionHeader.Offset,new $Int64(bb.high,bb.low)),(bc=av.SectionHeader.Size,new $Int64(bc.high,bc.low)));  °av.ReaderAt=av.sr;  µ(bd=f.Sections,(as<0||as>=bd.length)?$throwRuntimeError("index out of range"):bd.array[bd.offset+as]=av);  Ï  Ïas=as+1>>0;}  Ã    if(f.Sections.length===0){  Ëreturn[f,null];}  Ò!be=(bf=f.Sections,((v<0||v>=bf.length)?$throwRuntimeError("index out of range"):bf.array[bf.offset+v])).Data();bg=be[0];bh=be[1];  ÒO    if(!($interfaceIsEqual(bh,null))){  Òareturn[($ptrType(CE)).nil,bh];}  Òubi=f.Sections;bj=0;while(bj<bi.length){bk=bj;bl=((bj<0||bj>=bi.length)?$throwRuntimeError("index out of range"):bi.array[bi.offset+bj]);  Òñ  Òöbm=false;  Ò§bn=CN(bg,(((bk<0||bk>=ar.length)?$throwRuntimeError("index out of range"):ar.array[ar.offset+bk])>>0));bl.SectionHeader.Name=bn[0];bm=bn[1];  Ò÷    if(!bm){  Ò‚return[($ptrType(CE)).nil,new CK.Ptr((bo=new $Int64(0,((((bk>>>16<<16)*t>>0)+(bk<<16>>>16)*t)>>0)),new $Int64(p.high+bo.high,p.low+bo.low)),"bad section name index",new $Uint32(((bk<0||bk>=ar.length)?$throwRuntimeError("index out of range"):ar.array[ar.offset+bk])))];}bj++;}  ÚDreturn[f,null];    }; 0	NewFile0Çúdebug/elf:Classdebug/elf:Datadebug/elf:Filedebug/elf:FormatErrordebug/elf:Header32debug/elf:Header64debug/elf:Progdebug/elf:Prog32debug/elf:Prog64debug/elf:ProgHeaderdebug/elf:Sectiondebug/elf:Section32debug/elf:Section64debug/elf:SectionHeaderdebug/elf:Versiondebug/elf:getStringencoding/binary:BigEndianencoding/binary:LittleEndianencoding/binary:Readio:NewSectionReader0Ç” ÇWCE.Ptr.prototype.getSymbols=function(a){var b,c;  Ú‚b=this;  Û$c=b.FileHeader.Class;  Û6if(c===2){  ÛIreturn b.getSymbols64(a);  Ûf}else if(c===1){  Ûyreturn b.getSymbols32(a);}  Ûôreturn[($sliceType(CJ)).nil,($sliceType($Uint8)).nil,E.New("not implemented")];    };CE.prototype.getSymbols=function(a){return this.$val.getSymbols(a);}; 0File
getSymbols0^debug/elf:Filedebug/elf:Symboldebug/elf:getSymbols32debug/elf:getSymbols64
errors:New0Ç– Ç
CE.Ptr.prototype.getSymbols32=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  Û—b=this;  Ùc=b.SectionByType(a);  Ù<    if(c===($ptrType(CG)).nil){  ÙXreturn[($sliceType(CJ)).nil,($sliceType($Uint8)).nil,E.New("no symbol section")];}  Ùéd=c.Data();e=d[0];f=d[1];  Ù±    if(!($interfaceIsEqual(f,null))){  Ù√return[($sliceType(CJ)).nil,($sliceType($Uint8)).nil,E.New("cannot load symbol section")];}  ıg=B.NewReader(e);  ı"    if(!(((h=g.Len()%16,h===h?h:$throwRuntimeError("integer divide by zero"))===0))){  ıEreturn[($sliceType(CJ)).nil,($sliceType($Uint8)).nil,E.New("length of symbol section is not a multiple of SymSize")];}  ıüi=b.stringTable(c.SectionHeader.Link);j=i[0];f=i[1];  ı“    if(!($interfaceIsEqual(f,null))){  ı‰return[($sliceType(CJ)).nil,($sliceType($Uint8)).nil,E.New("cannot load string table section")];}  ˆK  ˆOk=($arrayType($Uint8,16)).zero();$copy(k,($arrayType($Uint8,16)).zero(),($arrayType($Uint8,16)));  ˆeg.Read(new($sliceType($Uint8))(k));  ˆ|m=($sliceType(CJ)).make((l=g.Len()/16,(l===l&&l!==1/0&&l!==-1/0)?l>>0:$throwRuntimeError("integer divide by zero")),0,function(){return new CJ.Ptr();});  ˆ∞n=0;  ˆ∏  ˆºo=new BL.Ptr();$copy(o,new BL.Ptr(),BL);  ˆ«while(g.Len()>0){  ˆ‡D.Read(g,b.FileHeader.ByteOrder,o);  ˜	p=CN(j,(o.Name>>0));q=p[0];  ˜7((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Name=q;  ˜O((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Info=o.Info;  ˜l((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Other=o.Other;  ˜ã((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Section=(o.Shndx>>0);  ˜∫((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Value=new $Uint64(0,o.Value);  ˜·((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Size=new $Uint64(0,o.Size);  ¯  ¯n=n+1>>0;}  ¯return[m,j,null];    };CE.prototype.getSymbols32=function(a){return this.$val.getSymbols32(a);}; 0FilegetSymbols320Å•bytes:NewReaderdebug/elf:Filedebug/elf:Sectiondebug/elf:Sym32debug/elf:Symboldebug/elf:getStringdebug/elf:stringTableencoding/binary:Read
errors:New0Ç¥ ÇÓCE.Ptr.prototype.getSymbols64=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  ¯5b=this;  ¯yc=b.SectionByType(a);  ¯†    if(c===($ptrType(CG)).nil){  ¯ºreturn[($sliceType(CJ)).nil,($sliceType($Uint8)).nil,E.New("no symbol section")];}  ¯Úd=c.Data();e=d[0];f=d[1];  ˘    if(!($interfaceIsEqual(f,null))){  ˘'return[($sliceType(CJ)).nil,($sliceType($Uint8)).nil,E.New("cannot load symbol section")];}  ˘eg=B.NewReader(e);  ˘Ü    if(!(((h=g.Len()%24,h===h?h:$throwRuntimeError("integer divide by zero"))===0))){  ˘©return[($sliceType(CJ)).nil,($sliceType($Uint8)).nil,E.New("length of symbol section is not a multiple of Sym64Size")];}  ˙i=b.stringTable(c.SectionHeader.Link);j=i[0];f=i[1];  ˙8    if(!($interfaceIsEqual(f,null))){  ˙Jreturn[($sliceType(CJ)).nil,($sliceType($Uint8)).nil,E.New("cannot load string table section")];}  ˙±  ˙µk=($arrayType($Uint8,24)).zero();$copy(k,($arrayType($Uint8,24)).zero(),($arrayType($Uint8,24)));  ˙Àg.Read(new($sliceType($Uint8))(k));  ˙‚m=($sliceType(CJ)).make((l=g.Len()/24,(l===l&&l!==1/0&&l!==-1/0)?l>>0:$throwRuntimeError("integer divide by zero")),0,function(){return new CJ.Ptr();});  ˚n=0;  ˚  ˚"o=new BZ.Ptr();$copy(o,new BZ.Ptr(),BZ);  ˚-while(g.Len()>0){  ˚FD.Read(g,b.FileHeader.ByteOrder,o);  ˚op=CN(j,(o.Name>>0));q=p[0];  ˚ù((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Name=q;  ˚µ((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Info=o.Info;  ˚“((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Other=o.Other;  ˚Ò((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Section=(o.Shndx>>0);  ¸ ((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Value=o.Value;  ¸?((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m.array[m.offset+n]).Size=o.Size;  ¸\  ¸\n=n+1>>0;}  ¸ereturn[m,j,null];    };CE.prototype.getSymbols64=function(a){return this.$val.getSymbols64(a);}; 0FilegetSymbols640Å•bytes:NewReaderdebug/elf:Filedebug/elf:Sectiondebug/elf:Sym64debug/elf:Symboldebug/elf:getStringdebug/elf:stringTableencoding/binary:Read
errors:New0ÇOCNÇ6CN=function(a,b){var c;  ¸˙    if(b<0||b>=a.length){  ˝$return["",false];}  ˝:  ˝>c=b;while(c<a.length){  ˝j    if(((c<0||c>=a.length)?$throwRuntimeError("index out of range"):a.array[a.offset+c])===0){  ˝Ñreturn[$bytesToString($subslice(a,b,c)),true];}  ˝`  ˝`c=c+1>>0;}  ˝¥return["",false];    }; 0	getString0 0Çç ÇXCE.Ptr.prototype.Section=function(a){var b,c,d,e;  ˛%b=this;  ˛Oc=b.Sections;d=0;while(d<c.length){e=((d<0||d>=c.length)?$throwRuntimeError("index out of range"):c.array[c.offset+d]);  ˛p    if(e.SectionHeader.Name===a){  ˛áreturn e;}d++;}  ˛òreturn($ptrType(CG)).nil;    };CE.prototype.Section=function(a){return this.$val.Section(a);}; 0File0#debug/elf:Filedebug/elf:Section0Ç ÇúCE.Ptr.prototype.applyRelocations=function(a,b){var c;  ˇc=this;  ˇI    if((c.FileHeader.Class===2)&&(c.FileHeader.Machine===62)){  ˇÄreturn c.applyRelocationsAMD64(a,b);}  ˇÆ    if((c.FileHeader.Class===1)&&(c.FileHeader.Machine===3)){  ˇ‚return c.applyRelocations386(a,b);}  return E.New("not implemented");    };CE.prototype.applyRelocations=function(a,b){return this.$val.applyRelocations(a,b);}; 0FileapplyRelocations0\debug/elf:Filedebug/elf:applyRelocations386debug/elf:applyRelocationsAMD64
errors:New0ÇΩ Ç)CE.Ptr.prototype.applyRelocationsAMD64=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa;  =c=this;  ú    if(!(((d=b.length%24,d===d?d:$throwRuntimeError("integer divide by zero"))===0))){  µreturn E.New("length of relocation section is not a multiple of 24");} e=c.getSymbols(2);f=e[0];g=e[2]; 1    if(!($interfaceIsEqual(g,null))){ Creturn g;} Sh=B.NewReader(b); o si=new BV.Ptr();$copy(i,new BV.Ptr(),BV); Åwhile(h.Len()>0){ ïD.Read(h,c.FileHeader.ByteOrder,i); ∫j=$shiftRightUint64(i.Info,32); ’l=((k=i.Info,new $Uint64(k.high&0,(k.low&65535)>>>0)).low>>0); ˙    if((j.high===0&&j.low===0)||(m=new $Uint64(0,f.length),(j.high>m.high||(j.high===m.high&&j.low>m.low)))){ -continue;} <o=(n=new $Uint64(j.high-0,j.low-1),(($flatten64(n)<0||$flatten64(n)>=f.length)?$throwRuntimeError("index out of range"):f.array[f.offset+$flatten64(n)])); W    if(!(((((o.Info&15)>>>0)>>0)===3))){ ªcontinue;} Àp=l; ÿif(p===1){ Ì    if((q=(r=i.Off,new $Uint64(r.high+0,r.low+8)),s=new $Uint64(0,a.length),(q.high>s.high||(q.high===s.high&&q.low>=s.low)))||(t=i.Addend,(t.high<0||(t.high===0&&t.low<0)))){ (continue;} 9c.FileHeader.ByteOrder.PutUint64($subslice(a,$flatten64(i.Off),$flatten64((u=i.Off,new $Uint64(u.high+0,u.low+8)))),(v=i.Addend,new $Uint64(v.high,v.low))); Ä}else if(p===10){ ï    if((w=(x=i.Off,new $Uint64(x.high+0,x.low+4)),y=new $Uint64(0,a.length),(w.high>y.high||(w.high===y.high&&w.low>=y.low)))||(z=i.Addend,(z.high<0||(z.high===0&&z.low<0)))){ –continue;} ·c.FileHeader.ByteOrder.PutUint32($subslice(a,$flatten64(i.Off),$flatten64((aa=i.Off,new $Uint64(aa.high+0,aa.low+4)))),(i.Addend.low>>>0));}} /return null;    };CE.prototype.applyRelocationsAMD64=function(a,b){return this.$val.applyRelocationsAMD64(a,b);}; 0FileapplyRelocationsAMD640kbytes:NewReaderdebug/elf:Filedebug/elf:Rela64debug/elf:getSymbolsencoding/binary:Read
errors:New0ÇΩ Ç,CE.Ptr.prototype.applyRelocations386=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n; Cc=this; û    if(!(((d=b.length%8,d===d?d:$throwRuntimeError("integer divide by zero"))===0))){ ∂return E.New("length of relocation section is not a multiple of 8");} e=c.getSymbols(2);f=e[0];g=e[2]; 1    if(!($interfaceIsEqual(g,null))){ Creturn g;} Sh=B.NewReader(b); o si=new BG.Ptr();$copy(i,new BG.Ptr(),BG); while(h.Len()>0){ ìD.Read(h,c.FileHeader.ByteOrder,i); ∑j=i.Info>>>8>>>0; –k=(((i.Info&255)>>>0)>>0); Ô    if((j===0)||j>(f.length>>>0)){ "continue;} 1m=(l=j-1>>>0,((l<0||l>=f.length)?$throwRuntimeError("index out of range"):f.array[f.offset+l])); M    if(k===1){ c    if((i.Off+4>>>0)>=(a.length>>>0)){ äcontinue;} õn=c.FileHeader.ByteOrder.Uint32($subslice(a,i.Off,(i.Off+4>>>0))); “n=n+((m.Value.low>>>0))>>>0; Óc.FileHeader.ByteOrder.PutUint32($subslice(a,i.Off,(i.Off+4>>>0)),n);}} *return null;    };CE.prototype.applyRelocations386=function(a,b){return this.$val.applyRelocations386(a,b);}; 0FileapplyRelocations3860jbytes:NewReaderdebug/elf:Filedebug/elf:Rel32debug/elf:getSymbolsencoding/binary:Read
errors:New0Çd Ç„CE.Ptr.prototype.DWARF=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as; >a=this;  b=($arrayType($String,3)).zero();$copy(b,$toNativeArray("String",["abbrev","info","str"]),($arrayType($String,3))); > Bc=($arrayType(($sliceType($Uint8)),3)).zero();$copy(c,($arrayType(($sliceType($Uint8)),3)).zero(),($arrayType(($sliceType($Uint8)),3))); Zd=b;e=0;while(e<3){f=e;g=d[e]; yg=".debug_"+g; ìh=a.Section(g); ™    if(h===($ptrType(CG)).nil){ ªe++;continue;}  i=h.Data();j=i[0];k=i[1]; ﬂ    if(!($interfaceIsEqual(k,null))&&(l=new $Uint64(0,j.length),m=h.SectionHeader.Size,(l.high<m.high||(l.high===m.high&&l.low<m.low)))){ 	return[($ptrType(C.Data)).nil,k];} 	#c[f]=j;e++;} 	≈n=a.Section(".rela.debug_info"); 	Ï    if(!(n===($ptrType(CG)).nil)&&(n.SectionHeader.Type===4)&&(a.FileHeader.Machine===62)){ 
2o=n.Data();p=o[0];q=o[1]; 
M    if(!($interfaceIsEqual(q,null))){ 
`return[($ptrType(C.Data)).nil,q];} 
vq=a.applyRelocations(c[1],p); 
ü    if(!($interfaceIsEqual(q,null))){ 
≤return[($ptrType(C.Data)).nil,q];}} r=a.Section(".rel.debug_info"); 2    if(!(r===($ptrType(CG)).nil)&&(r.SectionHeader.Type===9)&&(a.FileHeader.Machine===3)){ rs=r.Data();t=s[0];u=s[1]; å    if(!($interfaceIsEqual(u,null))){ üreturn[($ptrType(C.Data)).nil,u];} µu=a.applyRelocations(c[1],t); ﬁ    if(!($interfaceIsEqual(u,null))){ Òreturn[($ptrType(C.Data)).nil,u];}} 
v=c[0];w=c[1];x=c[2];y=v;z=w;aa=x; 7ab=C.New(y,($sliceType($Uint8)).nil,($sliceType($Uint8)).nil,z,($sliceType($Uint8)).nil,($sliceType($Uint8)).nil,($sliceType($Uint8)).nil,aa);ac=ab[0];ad=ab[1]; x    if(!($interfaceIsEqual(ad,null))){ äreturn[($ptrType(C.Data)).nil,ad];}  ae=a.Sections;af=0;while(af<ae.length){ag=af;ah=((af<0||af>=ae.length)?$throwRuntimeError("index out of range"):ae.array[ae.offset+af]); Î    if(ah.SectionHeader.Name===".debug_types"){ ai=ah.Data();aj=ai[0];ak=ai[1]; "    if(!($interfaceIsEqual(ak,null))&&(al=new $Uint64(0,aj.length),am=ah.SectionHeader.Size,(al.high<am.high||(al.high===am.high&&al.low<am.low)))){ Qreturn[($ptrType(C.Data)).nil,ak];} jan=a.Sections;ao=0;while(ao<an.length){ap=((ao<0||ao>=an.length)?$throwRuntimeError("index out of range"):an.array[an.offset+ao]); ç    if(!((ap.SectionHeader.Type===4))&&!((ap.SectionHeader.Type===9))){ øao++;continue;} “    if(!(((ap.SectionHeader.Info>>0)===ag))){ Ìao++;continue;}  aq=ap.Data();ar=aq[0];as=aq[1];     if(!($interfaceIsEqual(as,null))){ -return[($ptrType(C.Data)).nil,as];} Gas=a.applyRelocations(aj,ar); k    if(!($interfaceIsEqual(as,null))){ Äreturn[($ptrType(C.Data)).nil,as];}ao++;} üak=ac.AddTypes(F.Sprintf("types-%d",new($sliceType($emptyInterface))([new $Int(ag)])),aj); “    if(!($interfaceIsEqual(ak,null))){ Êreturn[($ptrType(C.Data)).nil,ak];}}af++;} return[ac,null];    };CE.prototype.DWARF=function(){return this.$val.DWARF();}; 0File0odebug/dwarf:Datadebug/dwarf:Newdebug/elf:Filedebug/elf:Sectiondebug/elf:applyRelocationsfmt:Sprintf0ÅÌ Å∂CE.Ptr.prototype.Symbols=function(){var a,b,c,d; a=this; 5b=a.getSymbols(2);c=b[0];d=b[2]; ^return[c,d];    };CE.prototype.Symbols=function(){return this.$val.Symbols();}; 0File0&debug/elf:Filedebug/elf:getSymbols0ÇÉ Ç€CE.Ptr.prototype.ImportedSymbols=function(){var a,b,c,d,e,f,g,h,i,j,k; åa=this; ƒb=a.getSymbols(11);c=b[0];d=b[1];e=b[2]; Ô    if(!($interfaceIsEqual(e,null))){ return[($sliceType(CO)).nil,e];} a.gnuVersionInit(d); , 0f=($sliceType(CO)).nil; Fg=c;h=0;while(h<g.length){i=h;j=new CJ.Ptr();$copy(j,((h<0||h>=g.length)?$throwRuntimeError("index out of range"):g.array[g.offset+h]),CJ); `    if((BM(j.Info)===1)&&(j.Section===0)){ †f=$append(f,new CO.Ptr(j.Name,"","")); ”a.gnuVersion(i,(k=f.length-1>>0,((k<0||k>=f.length)?$throwRuntimeError("index out of range"):f.array[f.offset+k])));}h++;} ˝return[f,null];    };CE.prototype.ImportedSymbols=function(){return this.$val.ImportedSymbols();}; 0File0Åïdebug/elf:Filedebug/elf:ImportedSymboldebug/elf:ST_BINDdebug/elf:Symboldebug/elf:getSymbolsdebug/elf:gnuVersiondebug/elf:gnuVersionInit0Ç/ Ç¬CE.Ptr.prototype.gnuVersionInit=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z; úb=this; Ác=b.SectionByType(1879048190);     if(c===($ptrType(CG)).nil){  return;} +d=c.Data();e=d[0]; ? Cf=($sliceType(CP)).nil; Sg=0; [while(true){ c    if((g+16>>0)>e.length){ ybreak;} Öh=b.FileHeader.ByteOrder.Uint16($subslice(e,g,(g+2>>0))); Æ    if(!((h===1))){ ¿break;} Ãi=b.FileHeader.ByteOrder.Uint16($subslice(e,(g+2>>0),(g+4>>0))); ˆj=b.FileHeader.ByteOrder.Uint32($subslice(e,(g+4>>0),(g+8>>0))); $k=b.FileHeader.ByteOrder.Uint32($subslice(e,(g+8>>0),(g+12>>0))); Ol=b.FileHeader.ByteOrder.Uint32($subslice(e,(g+12>>0),(g+16>>0))); |m=CN(a,(j>>0));n=m[0]; ß ´o=""; πp=g+(k>>0)>>0; Õ —q=0;while(q<(i>>0)){     if((p+16>>0)>e.length){ break;} nr=b.FileHeader.ByteOrder.Uint16($subslice(e,(p+6>>0),(p+8>>0))); õs=b.FileHeader.ByteOrder.Uint32($subslice(e,(p+8>>0),(p+12>>0))); Àt=b.FileHeader.ByteOrder.Uint32($subslice(e,(p+12>>0),(p+16>>0))); ˘u=CN(a,(s>>0));o=u[0]; #v=(r>>0); 8    if(v>=f.length){ Rx=($sliceType(CP)).make((w=(v+1>>0),(((2>>>16<<16)*w>>0)+(2<<16>>>16)*w)>>0),0,function(){return new CP.Ptr();}); v$copySlice(x,f); àf=x;} ö$copy(((v<0||v>=f.length)?$throwRuntimeError("index out of range"):f.array[f.offset+v]),new CP.Ptr(n,o),CP); Ω    if(t===0){ –break;} ﬁp=p+((t>>0))>>0; Á Áq=q+1>>0;} Ù    if(l===0){ break;} g=g+((l>>0))>>0;} `y=b.SectionByType(1879048191); á    if(y===($ptrType(CG)).nil){ òreturn;} £z=y.Data();e=z[0]; ∂b.gnuNeed=f; »b.gnuVersym=e;    };CE.prototype.gnuVersionInit=function(a){return this.$val.gnuVersionInit(a);}; 0FilegnuVersionInit0Kdebug/elf:Filedebug/elf:Sectiondebug/elf:getStringdebug/elf:verneed0Ç: ÇCE.Ptr.prototype.gnuVersion=function(a,b){var c,d,e,f,g; Mc=this; ùa=(d=(a+1>>0),(((d>>>16<<16)*2>>0)+(d<<16>>>16)*2)>>0); Æ    if(a>=c.gnuVersym.length){ Àreturn;} ÷e=(c.FileHeader.ByteOrder.Uint16($subslice(c.gnuVersym,a))>>0);     if(e<2||e>=c.gnuNeed.length){ )return;} 4g=(f=c.gnuNeed,((e<0||e>=f.length)?$throwRuntimeError("index out of range"):f.array[f.offset+e])); Hb.Library=g.File; ^b.Version=g.Name;    };CE.prototype.gnuVersion=function(a,b){return this.$val.gnuVersion(a,b);}; 0File
gnuVersion0debug/elf:File0Å‘ Å≥CE.Ptr.prototype.ImportedLibraries=function(){var a; a=this; Mreturn a.DynString(1);    };CE.prototype.ImportedLibraries=function(){return this.$val.ImportedLibraries();}; 0File0debug/elf:File0Ç Ç CE.Ptr.prototype.DynString=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p; 6b=this; jc=a; xif(c===1||c===14||c===15||c===29){}else{ µreturn[($sliceType($String)).nil,F.Errorf("non-string-valued tag %v",new($sliceType($emptyInterface))([new AE(a)]))];} Òd=b.SectionByType(6);     if(d===($ptrType(CG)).nil){ Hreturn[($sliceType($String)).nil,null];} \e=d.Data();f=e[0];g=e[1]; q    if(!($interfaceIsEqual(g,null))){ Éreturn[($sliceType($String)).nil,g];} óh=b.stringTable(d.SectionHeader.Link);i=h[0];g=h[1]; ª    if(!($interfaceIsEqual(g,null))){ Õreturn[($sliceType($String)).nil,g];} · Âj=($sliceType($String)).nil; Ûwhile(f.length>0){  
k=0;  l=new $Uint64(0,0); $m=b.FileHeader.Class; 7if(m===1){ Kk=(b.FileHeader.ByteOrder.Uint32($subslice(f,0,4))>>0); ul=new $Uint64(0,b.FileHeader.ByteOrder.Uint32($subslice(f,4,8))); üf=$subslice(f,8); ´}else if(m===2){ øk=(b.FileHeader.ByteOrder.Uint64($subslice(f,0,8)).low>>0); Èl=b.FileHeader.ByteOrder.Uint64($subslice(f,8,16)); f=$subslice(f,16);}     if(k===a){ .n=CN(i,(l.low>>0));o=n[0];p=n[1]; Q    if(p){ ]j=$append(j,o);}}} return[j,null];    };CE.prototype.DynString=function(a){return this.$val.DynString(a);}; 0File0mdebug/elf:DynTagdebug/elf:Filedebug/elf:Sectiondebug/elf:getStringdebug/elf:stringTable
fmt:Errorf0 Ç6!{"Base":73618,"Files":[{"Name":"/usr/local/go/src/pkg/debug/elf/elf.go","Base":1,"Size":52546,"Lines":[0,3,40,43,60,137,215,297,377,455,537,614,698,780,783,849,888,953,956,1026,1096,1108,1177,1245,1317,1391,1466,1469,1543,1616,1694,1769,1847,1922,1995,2073,2150,2224,2240,2244,2245,2257,2258,2275,2276,2279,2292,2296,2297,2337,2345,2389,2428,2474,2538,2576,2635,2684,2686,2687,2726,2751,2752,2820,2838,2839,2847,2871,2895,2897,2898,2930,2947,2967,2969,2970,3061,3151,3152,3214,3230,3231,3239,3284,3335,3386,3388,3389,3419,3441,3461,3481,3483,3484,3571,3657,3658,3717,3732,3733,3741,3790,3848,3903,3905,3906,3935,3956,3977,3998,4000,4001,4086,4170,4171,4233,4249,4250,4258,4315,4377,4423,4472,4520,4582,4629,4672,4716,4763,4813,4867,4914,4962,5020,5063,5136,5138,5139,5169,5192,5215,5240,5264,5287,5312,5338,5360,5383,5409,5434,5461,5488,5515,5538,5561,5592,5594,5595,5682,5768,5769,5802,5819,5820,5828,5873,5917,5960,6006,6048,6112,6175,6232,6288,6290,6291,6320,6337,6353,6370,6386,6403,6425,6447,6471,6495,6497,6498,6583,6667,6668,6707,6727,6728,6736,6788,6837,6883,6930,6981,7032,7079,7142,7193,7254,7301,7352,7401,7449,7500,7551,7602,7647,7696,7742,7791,7831,7878,7930,8001,8056,8107,8159,8207,8258,8316,8368,8422,8475,8523,8571,8617,8679,8744,8802,8873,8946,9011,9012,9047,9098,9159,9230,9310,9312,9313,9345,9362,9378,9396,9412,9428,9444,9460,9477,9494,9519,9539,9559,9584,9601,9618,9637,9655,9673,9691,9709,9726,9743,9759,9780,9801,9818,9838,9859,9876,9896,9915,9935,9957,9977,9994,10011,10029,10047,10069,10087,10106,10125,10145,10146,10181,10197,10222,10245,10268,10270,10271,10362,10452,10453,10481,10503,10504,10512,10587,10655,10724,10792,10868,10943,11003,11059,11136,11203,11205,11206,11234,11253,11278,11301,11323,11348,11373,11375,11376,11468,11559,11560,11577,11601,11602,11610,11670,11749,11821,11893,11976,12053,12120,12184,12252,12335,12413,12493,12578,12660,12745,12811,12896,12978,13051,13117,13193,13275,13352,13428,13509,13589,13670,13752,13820,13822,13823,13851,13869,13891,13911,13931,13949,13967,13988,14006,14026,14043,14063,14084,14109,14134,14162,14182,14209,14236,14273,14304,14338,14371,14405,14438,14467,14496,14525,14554,14556,14557,14648,14738,14739,14757,14781,14782,14790,14875,14953,15037,15113,15192,15274,15358,15444,15522,15602,15678,15761,15763,15764,15792,15813,15834,15859,15881,15905,15931,15958,15992,16015,16036,16038,16039,16128,16216,16217,16230,16248,16249,16257,16311,16369,16446,16511,16574,16635,16710,16779,16838,16896,16967,17037,17039,17040,17067,17084,17101,17121,17140,17157,17175,17192,17208,17234,17260,17288,17316,17318,17319,17406,17492,17493,17506,17527,17528,17536,17589,17640,17691,17759,17820,17822,17823,17850,17866,17882,17898,17900,17901,17986,18070,18071,18082,18098,18099,18107,18161,18244,18319,18383,18448,18508,18568,18638,18711,18788,18845,18913,18984,19053,19131,19209,19280,19349,19421,19491,19559,19615,19717,19780,19821,19917,20010,20101,20189,20293,20357,20433,20480,20521,20570,20585,20697,20803,20867,20930,20970,21010,21050,21127,21203,21205,21206,21233,21250,21269,21290,21309,21326,21345,21364,21381,21400,21420,21439,21459,21477,21495,21515,21534,21556,21573,21592,21612,21632,21651,21672,21692,21714,21738,21762,21788,21814,21835,21854,21876,21903,21932,21958,21984,22012,22041,22073,22101,22129,22131,22132,22217,22301,22302,22322,22339,22340,22348,22422,22448,22483,22549,22646,22720,22763,22809,22840,22911,22955,22991,22993,22994,23024,23048,23074,23099,23125,23153,23155,23156,23243,23329,23330,23367,23382,23383,23391,23436,23491,23540,23542,23543,23573,23594,23615,23636,23638,23639,23726,23812,23813,23860,23877,23878,23886,23930,23975,24037,24104,24157,24217,24270,24272,24273,24301,24320,24340,24358,24377,24396,24417,24438,24440,24441,24528,24614,24615,24659,24676,24677,24685,24735,24780,24822,24863,24908,24968,25012,25080,25134,25195,25249,25251,25252,25280,25300,25320,25338,25359,25377,25397,25414,25433,25452,25473,25494,25496,25497,25584,25670,25671,25728,25744,25745,25753,25821,25895,25942,26005,26007,26008,26036,26059,26083,26105,26130,26132,26133,26219,26304,26305,26308,26329,26333,26334,26366,26384,26385,26393,26447,26511,26587,26657,26727,26796,26866,26936,27010,27088,27165,27242,27319,27410,27486,27576,27646,27705,27771,27845,27919,27978,28052,28118,28120,28121,28153,28176,28197,28220,28244,28268,28291,28318,28345,28372,28399,28421,28444,28466,28490,28511,28534,28562,28590,28617,28642,28667,28695,28723,28750,28752,28753,28845,28936,28937,28968,28985,28986,28994,29046,29103,29160,29222,29299,29372,29438,29510,29582,29644,29706,29768,29825,29891,29952,30016,30053,30090,30127,30164,30201,30238,30275,30312,30378,30438,30498,30564,30566,30567,30598,30620,30645,30670,30695,30720,30744,30768,30792,30814,30838,30863,30888,30914,30941,30967,30996,31022,31050,31077,31107,31139,31172,31204,31233,31256,31283,31310,31337,31339,31340,31430,31519,31520,31549,31564,31565,31573,31625,31656,31687,31718,31749,31780,31811,31842,31873,31904,31936,31968,32000,32032,32064,32096,32128,32196,32265,32334,32407,32478,32551,32617,32683,32716,32749,32782,32815,32848,32881,32914,32947,32949,32950,32979,32999,33019,33040,33061,33081,33102,33123,33147,33167,33190,33215,33239,33266,33288,33313,33335,33361,33382,33407,33433,33458,33481,33503,33525,33547,33576,33607,33633,33660,33684,33708,33731,33754,33756,33757,33843,33928,33929,33958,33973,33974,33982,34034,34089,34156,34221,34286,34353,34421,34489,34561,34631,34703,34776,34856,34933,35009,35084,35160,35235,35314,35392,35470,35546,35625,35703,35781,35856,35938,36013,36081,36150,36222,36224,36225,36254,36274,36292,36312,36333,36354,36374,36398,36422,36446,36468,36490,36516,36539,36565,36588,36611,36635,36661,36689,36717,36744,36771,36800,36829,36857,36884,36910,36936,36965,36994,37022,37024,37025,37111,37196,37197,37230,37245,37246,37254,37308,37341,37374,37407,37440,37473,37506,37539,37572,37605,37639,37673,37707,37741,37775,37809,37843,37877,37911,37945,37979,38013,38047,38081,38115,38149,38183,38217,38251,38285,38319,38353,38387,38421,38455,38489,38523,38557,38591,38625,38659,38693,38727,38761,38795,38829,38863,38897,38931,38965,38999,39033,39067,39101,39135,39169,39203,39237,39271,39305,39339,39374,39409,39444,39479,39514,39549,39584,39619,39654,39689,39724,39759,39794,39829,39864,39899,39901,39902,39931,39951,39973,39995,40017,40042,40067,40092,40114,40144,40175,40197,40219,40249,40280,40302,40327,40352,40377,40402,40423,40448,40473,40498,40524,40548,40572,40594,40616,40641,40666,40691,40716,40741,40765,40792,40819,40846,40847,40867,40892,40916,40943,40970,40997,41021,41046,41074,41102,41130,41155,41183,41214,41245,41276,41304,41335,41366,41397,41425,41456,41487,41518,41519,41548,41577,41609,41641,41673,41701,41730,41759,41786,41814,41844,41874,41904,41934,41963,41991,41993,41994,42080,42165,42166,42197,42214,42215,42223,42253,42283,42313,42343,42373,42403,42433,42463,42493,42523,42554,42585,42616,42647,42678,42709,42740,42771,42802,42833,42864,42895,42926,42957,42988,43019,43050,43081,43112,43143,43174,43205,43236,43267,43298,43329,43360,43391,43422,43453,43484,43515,43546,43577,43608,43639,43670,43701,43732,43763,43794,43825,43856,43887,43918,43949,43951,43952,43983,44005,44024,44044,44064,44087,44111,44135,44160,44185,44207,44228,44249,44272,44296,44320,44344,44367,44390,44415,44438,44465,44492,44519,44542,44566,44592,44618,44644,44670,44696,44717,44738,44759,44783,44806,44829,44852,44878,44904,44930,44956,44982,45009,45029,45049,45069,45094,45118,45142,45166,45188,45210,45232,45259,45282,45305,45307,45308,45398,45487,45488,45568,45610,45611,45633,45656,45710,45754,45809,45862,45908,45969,46030,46092,46154,46217,46284,46347,46414,46477,46479,46480,46505,46529,46612,46650,46689,46738,46778,46817,46869,46918,46962,47017,47019,47020,47045,47066,47099,47145,47199,47249,47296,47345,47391,47442,47444,47445,47524,47544,47574,47615,47617,47618,47621,47644,47648,47649,47703,47723,47768,47821,47823,47824,47872,47893,47940,47995,48024,48026,48027,48094,48163,48225,48226,48243,48263,48277,48291,48305,48318,48331,48345,48347,48348,48369,48370,48433,48497,48545,48585,48587,48655,48656,48659,48668,48672,48673,48695,48718,48772,48816,48871,48924,48970,49031,49092,49154,49216,49279,49346,49409,49476,49539,49541,49542,49567,49591,49674,49712,49751,49800,49840,49879,49931,49980,50024,50079,50081,50082,50107,50128,50161,50207,50253,50307,50357,50404,50453,50504,50506,50507,50586,50606,50636,50676,50678,50679,50682,50705,50709,50710,50767,50787,50832,50885,50887,50888,50939,50960,51007,51062,51091,51093,51094,51160,51220,51297,51298,51329,51349,51397,51447,51488,51533,51567,51614,51616,51617,51638,51639,51661,51671,51681,51683,51684,51751,51778,51794,51811,51835,51840,51854,51858,51861,51862,51910,51936,51976,51992,52007,52019,52036,52055,52060,52118,52122,52125,52126,52168,52170,52171,52236,52245,52272,52292,52311,52324,52329,52346,52362,52367,52379,52391,52395,52398,52416,52466,52469,52482,52531,52534,52544],"Infos":null},{"Name":"/usr/local/go/src/pkg/debug/elf/file.go","Base":52548,"Size":21069,"Lines":[0,56,110,160,161,215,227,228,237,246,261,280,290,297,303,309,311,312,344,345,348,379,383,384,431,456,474,491,511,529,547,576,593,613,632,634,635,674,693,705,727,746,767,788,806,808,809,868,896,914,937,960,978,996,1014,1032,1050,1068,1086,1088,1089,1146,1168,1183,1184,1222,1262,1297,1345,1395,1419,1432,1454,1456,1457,1516,1559,1593,1624,1644,1656,1659,1681,1683,1684,1747,1772,1830,1881,1947,1950,1982,1984,1985,2043,2131,2132,2188,2213,2230,2247,2262,2277,2292,2307,2322,2337,2339,2340,2407,2426,2438,2439,2477,2517,2552,2600,2650,2674,2687,2709,2711,2712,2775,2860,2861,2925,2946,2966,2984,3010,3030,3032,3033,3036,3050,3054,3055,3081,3092,3104,3121,3123,3124,3163,3177,3196,3234,3237,3289,3301,3303,3304,3389,3429,3454,3471,3489,3492,3515,3532,3544,3562,3565,3580,3596,3598,3599,3625,3692,3716,3747,3762,3784,3809,3826,3829,3841,3843,3844,3901,3952,4009,4041,4062,4074,4078,4081,4093,4095,4096,4179,4249,4294,4336,4371,4392,4443,4461,4464,4546,4608,4611,4612,4628,4662,4680,4698,4716,4724,4734,4794,4797,4798,4829,4846,4865,4901,4920,4953,4963,5030,5033,5034,5074,5104,5168,5171,5172,5206,5243,5244,5269,5286,5312,5329,5365,5380,5398,5416,5439,5465,5525,5544,5548,5574,5609,5639,5688,5748,5752,5779,5812,5837,5864,5897,5922,5953,5971,5994,6020,6080,6099,6103,6129,6164,6194,6243,6303,6307,6334,6367,6392,6419,6452,6477,6508,6511,6512,6580,6644,6647,6648,6673,6705,6735,6778,6806,6823,6842,6861,6882,6942,6962,6967,6997,7028,7060,7088,7118,7148,7179,7209,7239,7244,7263,7284,7344,7364,7369,7399,7430,7462,7490,7520,7550,7581,7611,7641,7646,7650,7713,7733,7750,7753,7754,7779,7817,7849,7879,7922,7950,7970,7989,8008,8032,8092,8112,8117,8139,8175,8212,8250,8282,8313,8345,8377,8409,8446,8481,8486,8505,8529,8589,8609,8614,8636,8672,8709,8747,8778,8810,8842,8874,8906,8943,8978,8983,8987,9051,9071,9091,9094,9095,9122,9138,9141,9142,9180,9226,9243,9261,9264,9296,9310,9360,9371,9463,9467,9470,9471,9486,9488,9489,9560,9624,9695,9713,9731,9760,9761,9779,9808,9811,9812,9860,9862,9863,9936,9975,10002,10053,10056,10057,10092,10109,10169,10172,10205,10239,10326,10329,10330,10381,10398,10464,10467,10468,10502,10528,10550,10551,10602,10603,10611,10626,10650,10691,10737,10761,10790,10821,10868,10907,10944,10950,10953,10954,10984,10986,10987,11060,11099,11126,11177,11180,11181,11216,11233,11293,11296,11329,11363,11452,11455,11456,11507,11524,11590,11593,11594,11628,11654,11676,11677,11728,11729,11737,11752,11776,11817,11863,11887,11916,11947,11994,12025,12054,12060,12063,12064,12094,12096,12097,12154,12213,12254,12273,12276,12277,12324,12349,12392,12396,12399,12417,12419,12420,12488,12507,12554,12586,12608,12620,12624,12627,12639,12641,12642,12720,12739,12804,12858,12902,12905,12956,12998,13001,13002,13040,13042,13043,13113,13143,13167,13243,13246,13247,13292,13309,13322,13325,13326,13354,13371,13372,13391,13428,13455,13491,13492,13542,13554,13558,13585,13629,13684,13696,13700,13701,13714,13734,13792,13805,13810,13882,13902,13960,13973,13978,14050,14054,14057,14058,14070,14072,14073,14141,14169,14192,14267,14270,14271,14316,14333,14346,14349,14350,14378,14393,14394,14413,14449,14474,14504,14505,14555,14567,14571,14598,14599,14620,14658,14671,14676,14731,14759,14813,14817,14820,14821,14833,14835,14836,14882,14933,14988,15047,15097,15125,15155,15181,15204,15220,15232,15236,15257,15302,15321,15325,15338,15341,15342,15415,15488,15527,15596,15623,15641,15660,15664,15705,15723,15742,15746,15749,15750,15816,15853,15916,15942,15960,15979,15983,16024,16042,16061,16065,16068,16069,16114,16179,16196,16214,16217,16218,16261,16293,16325,16347,16393,16413,16418,16419,16453,16502,16516,16522,16548,16562,16568,16592,16612,16633,16639,16675,16695,16716,16722,16727,16728,16779,16798,16818,16823,16827,16830,16831,16846,16848,16849,16892,16895,16971,17045,17091,17136,17177,17194,17196,17197,17226,17242,17258,17274,17276,17277,17329,17384,17438,17474,17535,17578,17595,17613,17616,17639,17665,17690,17753,17804,17841,17845,17848,17865,17867,17868,17890,17903,17916,17918,17919,17967,18002,18046,18082,18122,18138,18147,18150,18169,18170,18190,18198,18205,18226,18235,18239,18280,18297,18306,18310,18352,18398,18441,18486,18528,18529,18547,18567,18601,18623,18633,18638,18681,18727,18772,18820,18866,18908,18929,18954,18990,19008,19021,19026,19027,19062,19080,19090,19095,19113,19117,19118,19135,19144,19148,19165,19168,19169,19227,19266,19282,19291,19294,19312,19313,19331,19348,19350,19351,19410,19459,19515,19544,19561,19589,19598,19601,19648,19683,19692,19695,19715,19737,19759,19761,19762,19818,19873,19921,19976,20007,20009,20010,20090,20102,20105,20189,20204,20261,20275,20325,20335,20393,20396,20432,20448,20482,20500,20503,20524,20541,20559,20562,20598,20615,20633,20636,20654,20672,20687,20702,20721,20740,20782,20824,20837,20856,20898,20933,20947,20951,20967,21002,21013,21038,21043,21047,21050,21067],"Infos":null}]}
ˇ