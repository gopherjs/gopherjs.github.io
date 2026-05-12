package undoRedo

import (
	"time"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

type UndoRedoStack interface {
	PerformUndo() (common.Selection, string, bool)
	PerformRedo() (common.Selection, string, bool)

	// AddBreak makes any prior changes not joined into any future changes.
	//
	// This should be called when the user makes a change and there is an
	// automatic code modification such as auto-formatting or auto-completion.
	// This allows the user to undo the automatic change separately from their
	// own change.
	AddBreak()

	// RecordSelectionChange records a selection change without a code change
	// and adds a break to prevent joining with prior changes.
	// The break is because the user has navigated to move the selection
	RecordSelectionChange(newSel common.Selection)

	// RecordCodeChange records a code change along with the new selection.
	// It should be called whenever the code in the editor changes.
	// The oldCode in the next call should match the newCode of the prior call.
	RecordCodeChange(newSel common.Selection, newCode string)
}

type undoRedoStackImp struct {
	undos []*stateChange
	redos []*stateChange

	// getTime gets the current time.
	// It can be replaced when testing.
	getTime func() time.Time
	joinDur time.Duration

	lastChange time.Time
	lastSel    common.Selection
	curCode    string
}

func NewStack() UndoRedoStack {
	return &undoRedoStackImp{
		getTime: time.Now,
		joinDur: time.Second,
	}
}

func (s *undoRedoStackImp) PerformUndo() (common.Selection, string, bool) {
	return s.performRevert(&s.undos, &s.redos)
}

func (s *undoRedoStackImp) PerformRedo() (common.Selection, string, bool) {
	return s.performRevert(&s.redos, &s.undos)
}

func (s *undoRedoStackImp) performRevert(fromStack, toStack *[]*stateChange) (common.Selection, string, bool) {
	maxIndex := len(*fromStack) - 1
	if maxIndex < 0 {
		// nothing on the stack so undo/redo has no affect.
		return s.lastSel, s.curCode, false
	}

	redoChange := (*fromStack)[maxIndex]
	oldSel, oldCode, newState := revertChange(s.curCode, redoChange)

	(*fromStack) = (*fromStack)[:maxIndex]
	(*toStack) = append((*toStack), newState)
	s.lastSel = oldSel
	s.curCode = oldCode
	s.AddBreak()
	return oldSel, oldCode, true
}

func (s *undoRedoStackImp) AddBreak() {
	// zeroing time prevents joining with prior changes.
	s.lastChange = time.Time{}
}

func (s *undoRedoStackImp) RecordSelectionChange(newSel common.Selection) {
	if newSel == s.lastSel {
		return
	}
	s.lastSel = newSel
	s.AddBreak()
}

func (s *undoRedoStackImp) RecordCodeChange(newSel common.Selection, newCode string) {
	if newCode == s.curCode {
		// code didn't change so just record the selection change if there was one.
		s.RecordSelectionChange(newSel)
		return
	}

	defer func() {
		s.lastSel = newSel
		s.curCode = newCode
		// clear the redo stack on new changes
		s.redos = nil
	}()

	now := s.getTime()
	newer := newState(s.curCode, newCode, s.lastSel, newSel)

	if now.Sub(s.lastChange) <= s.joinDur {
		// changes happened close enough in time to consider joining
		maxIndex := len(s.undos) - 1
		if joined := joinStates(s.undos[maxIndex], newer); joined != nil {
			s.undos[maxIndex] = joined
			// don't update the last change time so that a fast diligent typer
			// will still have the continuous changes broken up periodically.
			return
		}
	}

	// cannot join, just add the new state
	s.undos = append(s.undos, newer)
	s.lastChange = now
}
