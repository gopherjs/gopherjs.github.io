package editor

import "time"

const undoRedoJoinDuration = time.Second

type undoRedoState struct {
	prefix  int
	suffix  int
	oldCode string
	newCode string
	oldSel  Selection
	newSel  Selection
}

type UndoRedoStack struct {
	undos   []*undoRedoState
	redos   []*undoRedoState
	getTime func() time.Time

	lastChange time.Time
	lastSel    Selection
}

func NewUndoRedoStack() *UndoRedoStack {
	return &UndoRedoStack{getTime: time.Now}
}

func (s *UndoRedoStack) PerformUndo(cb CodeBoxWrapper) {
	// TODO(grantnelson-wf): Finish implmementing
}

func (s *UndoRedoStack) PerformRedo(cb CodeBoxWrapper) {
	// TODO(grantnelson-wf): Finish implmementing
}

func (s *UndoRedoStack) RecordSelectionChange(cb CodeBoxWrapper) {
	// TODO(grantnelson-wf): Finish implmementing

}

func (s *UndoRedoStack) RecordCodeChange(cb CodeBoxWrapper, priorCode string) {
	//now := s.getTime()

	// TODO(grantnelson-wf): Finish implmementing

	s.redos = nil // clear redo stack on new code change
}

/*
func (s *UndoRedoStack) joinStates(older, newer *undoRedoState) bool {
	if newer.start.Sub(older.start) > undoRedoJoinDuration {
		return false // changes happened too far apart in time to join
	}

	if older.prefix > newer.prefix+len(newer.newCode) ||
		older.suffix > newer.suffix+len(newer.newCode) {
		return false // changes don't overlap so are too far apart in code to join
	}

	// TODO(grantnelson-wf): Finish implmementing

	return true
}

func newState(priorCode, newCode string, priorSel, afterSel Selection, start time.Time) *undoRedoState {
	prefixLen, suffixLen := diffTrim(priorCode, newCode)
	return &undoRedoState{
		prefix:  prefixLen,
		suffix:  suffixLen,
		newCode: newCode[prefixLen : len(newCode)-suffixLen],
		prior:   priorSel,
		after:   afterSel,
		start:   start,
	}
}
*/

// diffTrim returns the lengths of the common prefix and suffix between
// prior and after strings.
func diffTrim(prior, after string) (int, int) {
	priorLen, afterLen := len(prior), len(after)
	minLen := min(priorLen, afterLen)

	prefixLen := 0
	for prefixLen < minLen && prior[prefixLen] == after[prefixLen] {
		prefixLen++
	}
	if prefixLen >= minLen {
		return prefixLen, 0
	}

	suffixLen := 0
	minLen -= prefixLen
	priorMax, afterMax := priorLen-1, afterLen-1
	for suffixLen < minLen && prior[priorMax] == after[afterMax] {
		suffixLen++
		priorMax--
		afterMax--
	}
	return prefixLen, suffixLen
}

// TODO(grantnelson-wf): Remove when `min` is available in go1.21.
// See https://pkg.go.dev/builtin#min
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
