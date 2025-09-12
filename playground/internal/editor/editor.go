// Package editor provides code editing helper functions that can be used
// by code editor components. This is separated out from the React components so
// that it can be more easily tested and used in non-React contexts if needed.
package editor

import (
	"strings"
	"unicode"
)

const (
	// TabWidth is the number of spaces per tab.
	TabWidth = 4

	EscapeEvent = `escape`
	SaveEvent   = `save`
	UndoEvent   = `undo`
	RedoEvent   = `redo`

	commentPrefix    = `// `
	commentPrefixLen = len(commentPrefix)
)

type CodeBoxWrapper interface {
	Code() string
	GetSelection() Selection
	SetCode(sel Selection, code string)
	EmitEvent(event string)
}

type Selection struct {
	Start int
	End   int
}

// IsCaret returns true if the selection represents a caret position
// (i.e. start and end are the same).
// See https://en.wikipedia.org/wiki/Caret_navigation
func (sel Selection) IsCaret() bool {
	return sel.Start == sel.End
}

// MeasureLineLength returns the length of the line.
// This counts tabs as multiple spaces so that the visual horizontal offset
// is correct, assuming a monospace font.
func MeasureLineLength(line string) int {
	length := len(line)
	tabAdjust := 0
	for i := 0; i < length; i++ {
		if line[i] == '\t' {
			// since tabs can vary in lenght depending on position to aling
			// with multiples of the tab width, calculate the adjustment needed
			// to allign current index to the next tab stop.
			// Subtract 1 since the tab itself is already counted in length.
			tabAdjust += TabWidth - (i+tabAdjust)%TabWidth - 1
		}
	}
	return length + tabAdjust
}

// LongestMeasuredLineLength returns the length of the longest measured line
// in the given code.
// This counts tabs as multiple spaces so that the visual horizontal offset
// is correct, assuming a monospace font.
func LongestMeasuredLineLength(code string) int {
	longest := 0
	process := func(line string) {
		if len(line)*TabWidth > longest {
			if length := MeasureLineLength(line); length > longest {
				longest = length
			}
		}
	}

	for {
		index := strings.IndexByte(code, '\n')
		if index < 0 {
			process(code)
			break
		}
		process(code[:index])
		code = code[index+1:]
	}
	return longest
}

func ProcessKeyDown(wrapper CodeBoxWrapper, key string, shift, ctrl bool) bool {
	ce := &codeEditor{CodeBoxWrapper: wrapper}
	return ce.handleKeyDown(key, shift, ctrl)
}

type codeEditor struct{ CodeBoxWrapper }

func (ce *codeEditor) handleKeyDown(key string, shift, ctrl bool) bool {
	switch key {
	case ` `:
		return ce.handleSpace(shift, ctrl)
	case `Tab`:
		return ce.handleTab(shift, ctrl)
	case `Enter`:
		return ce.handleNewline(shift, ctrl)
	case `s`:
		return ce.handleSave(shift, ctrl)
	case `*`:
		return ce.handleMultilineComment(shift, ctrl)
	case `/`:
		return ce.handleCommentToggle(shift, ctrl)
	case `"`:
		return ce.insertPair(ctrl, `"`, `"`)
	case `'`:
		return ce.insertPair(ctrl, `'`, `'`)
	case "`":
		return ce.insertPair(ctrl, "`", "`")
	case `(`:
		return ce.insertPair(ctrl, `(`, `)`)
	case `{`:
		return ce.insertPair(ctrl, `{`, `}`)
	case `[`:
		return ce.insertPair(ctrl, `[`, `]`)
	case `Escape`:
		return ce.handleEscape()
	case `z`:
		return ce.handleUndo(shift, ctrl)
	case `y`:
		return ce.handleRedo(shift, ctrl)
	default:
		return false
	}
}

// handleSpace handles if there are several preceding spaces and a new space
// being added, replacing them with tabs.
func (ce *codeEditor) handleSpace(shift, ctrl bool) bool {
	if ctrl || shift {
		// Allow default behavior for Ctrl+Space or Shift+Space.
		return false
	}

	sel := ce.GetSelection()
	if !sel.IsCaret() {
		// If a selection, just perform default behavior.
		return false
	}
	caret := sel.Start

	code := ce.Code()
	if !inRange(caret, 1, len(code)) {
		// Out of bounds, allow default behavior.
		return false
	}

	// Find all consecutive preceding whitespace characters upto
	// the start of the line.
	// This will not work correctly for a multiline string where the text
	// in that string is at the front of it's own line, but that is an edge
	// case that is unlikely to be an issue in practice.
	i := caret - 1
	for i >= 0 {
		c := code[i]
		if c == '\n' {
			break
		}
		if c != ' ' && c != '\t' {
			// If a non-whitespace character, stop and allow default behavior.
			return false
		}
		i--
	}
	lineStart := i + 1

	// When replacing spaces with tabs, we want to maintain the same
	// visual character offset so use the length measurement adjusted for tabs.
	length := MeasureLineLength(code[lineStart:caret])
	length++ // for the new space being inserted
	tabs := length / TabWidth
	spaces := length % TabWidth

	newCode := &strings.Builder{}
	newCode.Grow(len(code) + tabs + spaces - (caret - lineStart))

	write(newCode, code[:lineStart])
	write(newCode, strings.Repeat("\t", tabs))
	write(newCode, strings.Repeat(" ", spaces))
	write(newCode, code[caret:])

	caret = lineStart + tabs + spaces
	newSel := Selection{Start: caret, End: caret}
	ce.SetCode(newSel, newCode.String())
	return true
}

// handleTab handles inserting a tab character and indenting or un-indenting
// the current selected line(s).
func (ce *codeEditor) handleTab(shift, ctrl bool) bool {
	if ctrl {
		// Allow default behavior for Ctrl+Tab (focus change).
		return false
	}

	if shift {
		// With a selection or just a caret, remove indents for Shift+Tab.
		return ce.removeIndents()
	}

	sel := ce.GetSelection()
	if sel.IsCaret() {
		// No selection, just insert tab character at caret.
		ce.insertAtSelection("\t", ``, false)
		return true
	}
	return ce.addIndents()
}

// addIndents adds indents to the non-blank lines in the selection.
func (ce *codeEditor) addIndents() bool {
	lineSel := ce.getSelectedLines()
	nonBlankLines := 0
	ce.foreachLine(lineSel, func(line string, _ Selection) bool {
		if !isBlankLine(line) {
			nonBlankLines++
		}
		return true
	})
	if nonBlankLines == 0 {
		// Nothing to indent, prevent default behavior but do nothing.
		return true
	}

	code := ce.Code()
	sel := ce.GetSelection()
	newSel := sel
	newCode := &strings.Builder{}
	newCode.Grow(len(code) + nonBlankLines)

	write(newCode, code[:lineSel.Start])
	ce.foreachLine(lineSel, func(line string, curLineSel Selection) bool {
		if isBlankLine(line) {
			write(newCode, line) // Empty line, just add as-is.
			return true
		}
		adjustSel(&newSel, sel, curLineSel.Start, 1)
		write(newCode, "\t")
		write(newCode, line)
		return true
	})
	write(newCode, code[lineSel.End:])

	ce.SetCode(newSel, newCode.String())
	return true
}

// removeIndents handles un-indenting the non-blank lines in the selection.
func (ce *codeEditor) removeIndents() bool {
	lineSel := ce.getSelectedLines()
	indentedLines := 0
	ce.foreachLine(lineSel, func(line string, _ Selection) bool {
		if line[0] == '\t' || line[0] == ' ' {
			indentedLines++
		}
		return true
	})
	if indentedLines == 0 {
		// Nothing to un-indent, prevent default behavior but do nothing.
		return true
	}

	code := ce.Code()
	sel := ce.GetSelection()
	newSel := sel
	newCode := &strings.Builder{}
	newCode.Grow(len(code) - indentedLines) // assumes tabs are being removed

	write(newCode, code[:lineSel.Start])
	ce.foreachLine(lineSel, func(line string, curLineSel Selection) bool {
		// Trim up to one tab or equivalent spaces.
		removeChars := 0
		for i := 0; i < len(line); i++ {
			if line[i] == '\t' {
				removeChars++
				break
			} else if line[i] == ' ' {
				removeChars++
				if removeChars >= TabWidth {
					break
				}
			} else {
				break
			}
		}
		if removeChars == 0 {
			// Nothing to remove, just add line as-is.
			write(newCode, line)
			return true
		}

		adjustSel(&newSel, sel, curLineSel.Start+removeChars, -removeChars)
		write(newCode, line[removeChars:])
		return true
	})
	write(newCode, code[lineSel.End:])

	ce.SetCode(newSel, newCode.String())
	return true
}

func (ce *codeEditor) handleMultilineComment(shift, ctrl bool) bool {
	if !shift || ctrl {
		// Allow default behavior for 8 or Ctrl+* (which is usually Shift+Ctrl+8).
		return false
	}

	code := ce.Code()
	sel := ce.GetSelection()
	if !sel.IsCaret() {
		// If a selection, just prerform default behavior.
		return false
	}
	caret := sel.Start

	if caret <= 0 || code[caret-1] != '/' {
		// Not preceded by '/', allow default behavior.
		return false
	}

	// Insert '*/' after caret to complete the multi-line comment.
	ce.insertAtSelection(`*`, `*/`, false)
	return true
}

// handleNewline handles inserting a new line with auto-indent.
func (ce *codeEditor) handleNewline(shift, ctrl bool) bool {
	if shift || ctrl {
		// Allow default behavior for Shift+Enter or Ctrl+Enter (new line without indent).
		return false
	}

	code := ce.Code()
	sel := ce.GetSelection()
	before := "\n" + ce.indentAt(sel.Start)
	after := ``

	// add extra indent if the character before the selection is an opening brace.
	if inRange(sel.Start, 1, len(code)) {
		switch code[sel.Start-1] {
		case '{', '(', '[':
			before += "\t"
		}
	}

	// add extra after if the character after the selection is a closing brace.
	if inRange(sel.End, 0, len(code)-1) {
		switch code[sel.End] {
		case '}', ')', ']':
			if opening := findMatchingOpeningBrace(code, sel.End); opening >= 0 {
				after = "\n" + ce.indentAt(opening)
			}
		}
	}

	ce.insertAtSelection(before, after, false)
	return true
}

func (ce *codeEditor) handleSave(shift, ctrl bool) bool {
	if !ctrl || shift {
		// Allow default behavior for 's' without a Ctrl or Shift+Ctrl+S.
		return false
	}

	ce.EmitEvent(SaveEvent)
	return true
}

func (ce *codeEditor) handleEscape() bool {
	ce.EmitEvent(EscapeEvent)
	return true
}

func (ce *codeEditor) handleUndo(shift, ctrl bool) bool {
	if !ctrl {
		// Allow default behavior for 'z' without a Ctrl.
		return false
	}

	if shift {
		ce.EmitEvent(RedoEvent)
		return true
	}

	ce.EmitEvent(UndoEvent)
	return true
}

func (ce *codeEditor) handleRedo(shift, ctrl bool) bool {
	if !ctrl || shift {
		// Allow default behavior for 'y' without a Ctrl or Shift+Ctrl+Y.
		return false
	}

	ce.EmitEvent(RedoEvent)
	return true
}

// handleCommentToggle handles toggling comments on the current line or selection.
func (ce *codeEditor) handleCommentToggle(shift, ctrl bool) bool {
	if !ctrl || shift {
		// Allow default behavior for '/' without a Ctrl or Shift+/.
		return false
	}

	lineSel := ce.getSelectedLines()
	containsOnlyBlankLines := true
	containsUncommentedLine := false
	ce.foreachLine(lineSel, func(line string, _ Selection) bool {
		if trimmed := trimLeftSpace(line); trimmed != `` {
			containsOnlyBlankLines = false
			if !strings.HasPrefix(trimmed, commentPrefix) {
				containsUncommentedLine = true
				return false
			}
		}
		return true
	})

	if containsOnlyBlankLines {
		// Nothing to comment or uncomment.
		return true
	}

	if containsUncommentedLine {
		ce.addCommenting(lineSel)
		return true
	}

	ce.removeCommenting(lineSel)
	return true
}

// addCommenting will add the comment prefix to each non-blank line in
// the given range including any lines that already are commented.
func (ce *codeEditor) addCommenting(lineSel Selection) {
	leastIndent := -1
	nonBlankLines := 0
	ce.foreachLine(lineSel, func(line string, _ Selection) bool {
		if trimmed := trimLeftSpace(line); trimmed != `` {
			if indent := len(line) - len(trimmed); leastIndent < 0 || indent < leastIndent {
				leastIndent = indent
			}
			nonBlankLines++
		}
		return true
	})

	if nonBlankLines == 0 {
		// All lines were blank so there is nothing to do.
		// This should not happen since we already check for blank lines
		// before calling this method, but might as well save some cycles.
		return
	}

	code := ce.Code()
	sel := ce.GetSelection()
	newSel := sel
	newCode := &strings.Builder{}
	newCode.Grow(len(code) + nonBlankLines*commentPrefixLen)

	write(newCode, code[:lineSel.Start])
	ce.foreachLine(lineSel, func(line string, curLineSel Selection) bool {
		if isBlankLine(line) {
			write(newCode, line) // Empty line, just add as-is.
			return true
		}
		adjustSel(&newSel, sel, curLineSel.Start+leastIndent, commentPrefixLen)
		write(newCode, line[:leastIndent])
		write(newCode, commentPrefix)
		write(newCode, line[leastIndent:])
		return true
	})
	write(newCode, code[lineSel.End:])

	ce.SetCode(newSel, newCode.String())
}

// removeCommenting will uncomment any line that starts with the comment prefix
// (and preceding whitespace).
func (ce *codeEditor) removeCommenting(lineSel Selection) {
	code := ce.Code()
	sel := ce.GetSelection()
	newSel := sel
	newCode := &strings.Builder{}
	newCode.Grow(len(code))

	write(newCode, code[:lineSel.Start])
	ce.foreachLine(lineSel, func(line string, curLineSel Selection) bool {
		if trimmed := trimLeftSpace(line); trimmed != `` {
			if index := strings.Index(line, commentPrefix); index >= 0 {
				write(newCode, line[:index])
				write(newCode, line[index+commentPrefixLen:])
				adjustSel(&newSel, sel, curLineSel.Start+index, -commentPrefixLen)
				return true
			}
		}
		write(newCode, line) // Leave line as is
		return true
	})
	write(newCode, code[lineSel.End:])

	ce.SetCode(newSel, newCode.String())
}

// getSelectedLines returns the start and end character indices of that
// include the start of the selection and the end of the user selection.
// The returned start should be at the beginning of the line after the "\n"
// or at the front of all the code.
// The returned end should be after the "\n" after the selection
// or at the end of all the code.
func (ce *codeEditor) getSelectedLines() Selection {
	code := ce.Code()
	codeLen := len(code)
	sel := ce.GetSelection()
	lineSel := Selection{Start: 0, End: codeLen}
	if inRange(sel.Start, 0, codeLen) {
		lineSel.Start = findStartOfLastLine(code[:sel.Start])
	}
	if inRange(sel.End, 0, codeLen) {
		lineSel.End = findEndOfLineAfter(sel.End, code)
	}
	return lineSel
}

// foreachLine calls the given yield function for each line in the
// code between the given start and end character indices.
//
// The yield function will be given the line string starting after a "\n"
// and including a trailing "\n" if present, along with the start and end
// character indices of that line within the code.
//
// A blank line will be given as "\n", meaning that the yeilded lines will not
// be empty. If the code ends with a "\n", then technically the last line is
// empty with the start and end indices both at the end of the code,
// but that case is skipped.
//
// If the yield function returns false, iteration stops and
// foreachLine returns false. Otherwise, it returns true.
func (ce *codeEditor) foreachLine(sel Selection, yield func(line string, curLineSel Selection) bool) bool {
	code := ce.Code()
	for i := sel.Start; i < sel.End; {
		lineEnd := findEndOfLineAfter(i, code[:sel.End])
		line := code[i:lineEnd]
		if !yield(line, Selection{i, lineEnd}) {
			return false
		}
		i = lineEnd
	}
	return true
}

func (ce *codeEditor) insertPair(ctrl bool, before, after string) bool {
	if ctrl {
		// Allow default behavior for Ctrl+key.
		return false
	}

	ce.insertAtSelection(before, after, true)
	return true
}

func (ce *codeEditor) insertAtSelection(before, after string, keepSelection bool) {
	code := ce.Code()
	sel := ce.GetSelection()
	newSel := Selection{Start: sel.Start, End: sel.Start} // set both to start initially

	beforeLen := len(before)
	afterLen := len(after)
	selectionLen := 0
	if keepSelection {
		selectionLen = sel.End - sel.Start
	}

	newCode := &strings.Builder{}
	newCode.Grow(len(code) + beforeLen + afterLen + selectionLen)

	if sel.Start > 0 {
		write(newCode, code[:sel.Start])
	}

	if beforeLen > 0 {
		write(newCode, before)
		newSel.Start += beforeLen
		newSel.End += beforeLen
	}

	if selectionLen > 0 {
		selected := code[sel.Start:sel.End]
		write(newCode, selected)
		newSel.End += selectionLen
	}

	if afterLen > 0 {
		write(newCode, after)
	}

	if sel.End < len(code) {
		write(newCode, code[sel.End:])
	}

	ce.SetCode(newSel, newCode.String())
}

func (ce *codeEditor) indentAt(start int) string {
	code := ce.Code()
	if !inRange(start, 1, len(code)) {
		return ``
	}
	par := findStartOfLastLine(code[:start])
	i := par
	for i < start {
		if c := code[i]; c != ' ' && c != '\t' {
			break
		}
		i++
	}
	return code[par:i]
}

// findMatchingOpeningBrace finds the position of the matching opening brace
// for the closing brace at the given caret position.
// Currently this does not account for braces inside strings or comments.
// It returns -1 if no matching opening brace is found.
func findMatchingOpeningBrace(code string, caret int) int {
	if caret <= 0 || caret > len(code) {
		return -1
	}
	pairs := map[byte]byte{
		'}': '{',
		')': '(',
		']': '[',
	}
	openingBrace, ok := pairs[code[caret]]
	if !ok {
		return -1 // Caret not at a closing brace
	}
	stack := []byte{openingBrace}
	for i := caret - 1; i >= 0; i-- {
		c := code[i]
		switch c {
		case '}', ')', ']':
			stack = append(stack, pairs[c])
		case '{', '(', '[':
			if top := len(stack) - 1; stack[top] == c {
				stack = stack[:top]
			} else {
				return -1 // Mismatched brace
			}
		}
		if len(stack) == 0 {
			// stack is empty, found the matching opening brace.
			return i
		}
	}
	return -1
}

// inRange returns true if value is between start and end, inclusively.
func inRange(value, start, end int) bool {
	return value >= start && value <= end
}

// adjustSel adjusts the given newSel selection by the adjustment amount
// if the current selection is after the given limit.
// This moves the selection based on where new text is being inserted at or
// removed from the limit position.
func adjustSel(newSel *Selection, curSel Selection, limit, adjustment int) {
	if curSel.Start > limit {
		newSel.Start += adjustment
	}
	if curSel.End > limit {
		newSel.End += adjustment
	}
}

func write(sb *strings.Builder, s string) {
	// Ignore error since strings.Builder.WriteString never returns an error.
	_, _ = sb.WriteString(s)
}

func findEndOfLineAfter(start int, code string) int {
	index := strings.IndexByte(code[start:], '\n')
	if index < 0 {
		return len(code)
	}
	return index + start + 1
}

func findStartOfLastLine(code string) int {
	index := strings.LastIndexByte(code, '\n')
	if index < 0 {
		return 0
	}
	return index + 1
}

func trimLeftSpace(s string) string {
	return strings.TrimLeftFunc(s, unicode.IsSpace)
}

func isBlankLine(s string) bool {
	return trimLeftSpace(s) == ``
}
