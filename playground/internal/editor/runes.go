package editor

import (
	"unicode"
)

type runeBuilder struct {
	runes []rune
}

func newRuneBuilder(capacity int) *runeBuilder {
	return &runeBuilder{runes: make([]rune, 0, capacity)}
}

func (rb *runeBuilder) Write(s []rune) {
	rb.runes = append(rb.runes, s...)
}

func (rb *runeBuilder) WriteRune(r rune) {
	rb.runes = append(rb.runes, r)
}

func (rb *runeBuilder) Runes() []rune {
	return rb.runes
}

func findEndOfLineAfter(start int, code []rune) int {
	codeLen := len(code)
	for i := start; i < codeLen; i++ {
		if code[i] == '\n' {
			return i + 1
		}
	}
	return len(code)
}

func findStartOfLastLine(code []rune) int {
	for i := len(code) - 1; i >= 0; i-- {
		if code[i] == '\n' {
			return i + 1
		}
	}
	return 0
}

func trimLeftSpace(runes []rune) []rune {
	for i, r := range runes {
		if !unicode.IsSpace(r) {
			return runes[i:]
		}
	}
	return nil
}

func isBlankLine(s []rune) bool {
	return len(trimLeftSpace(s)) <= 0
}

func indexRune(s []rune, r rune) int {
	for i, c := range s {
		if c == r {
			return i
		}
	}
	return -1
}

func indexRunes(s, r []rune) int {
	lenR, lenS := len(r), len(s)
	if lenR > lenS {
		return -1
	}
	for i, end := 0, lenS-lenR; i <= end; i++ {
		match := true
		for j := 0; j < lenR; j++ {
			if s[i+j] != r[j] {
				match = false
				break
			}
		}
		if match {
			return i
		}
	}
	return -1
}

func runeRepeat(r rune, count int) []rune {
	result := make([]rune, count)
	for i := range result {
		result[i] = r
	}
	return result
}

func hasPrefix(s, prefix []rune) bool {
	if len(s) < len(prefix) {
		return false
	}
	for i, r := range prefix {
		if s[i] != r {
			return false
		}
	}
	return true
}
