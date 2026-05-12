package common

// Selection represents a text selection in the code editor.
//
// The selection is defined by the start and end byte offsets in the code string.
// The start and end offsets are inclusive of the start and exclusive of the end.
//
// Typically the start is less than or equal to the end even with a reverse selection,
// since the CodeBoxWrapper should normalize the selection before returning it and
// should keep the same selection direction when setting a new selection.
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

// Reversed returns true if the selection is backwards
// (i.e. start is greater than end).
// This occurs when a user selects text from right to left or from bottom to top.
func (sel Selection) Reversed() bool {
	return sel.Start > sel.End
}

// Normalize returns a new Selection with Start less than or equal to End.
func (sel Selection) Normalize() Selection {
	if sel.Reversed() {
		return Selection{Start: sel.End, End: sel.Start}
	}
	return sel
}
