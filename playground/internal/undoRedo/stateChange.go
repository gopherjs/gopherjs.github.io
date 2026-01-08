package undoRedo

import (
	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

type stateChange struct {
	// prefix the length of runes in the unchanged prefix
	prefix int

	// suffix the length of runes in the unchanged suffix
	suffix int

	// oldCode the changed portion of the old code
	oldCode []rune

	// newCode the changed portion of the new code
	newCode []rune

	// oldSel the selection before the change
	oldSel common.Selection

	// newSel the selection after the change
	newSel common.Selection
}

// newState creates a new undoRedoState representing the change
// from oldCode to newCode, with the given old and new selections.
func newState(oldCode, newCode string, oldSel, newSel common.Selection) *stateChange {
	oldRunes, newRunes := []rune(oldCode), []rune(newCode)
	prefixLen, suffixLen := diffTrim(oldRunes, newRunes)
	oldDiff := append([]rune{}, oldRunes[prefixLen:len(oldRunes)-suffixLen]...)
	newDiff := append([]rune{}, newRunes[prefixLen:len(newRunes)-suffixLen]...)
	return &stateChange{
		prefix:  prefixLen,
		suffix:  suffixLen,
		oldCode: oldDiff,
		newCode: newDiff,
		oldSel:  oldSel,
		newSel:  newSel,
	}
}

// diffTrim returns the lengths of the common prefix and suffix
// between old and new code.
func diffTrim(oldCode, newCode []rune) (int, int) {
	oldLen, newLen := len(oldCode), len(newCode)
	minLen := min(oldLen, newLen)

	prefixLen := 0
	for prefixLen < minLen && oldCode[prefixLen] == newCode[prefixLen] {
		prefixLen++
	}
	if prefixLen >= minLen {
		return prefixLen, 0
	}

	suffixLen := 0
	minLen -= prefixLen
	oldMax, newMax := oldLen-1, newLen-1
	for suffixLen < minLen && oldCode[oldMax] == newCode[newMax] {
		suffixLen++
		oldMax--
		newMax--
	}
	return prefixLen, suffixLen
}

// joinStates returns the joined state if the two states can be joined,
// otherwise returns nil.
//
// The two states must be adjacent meaning that the newCode in the older state
// must come from the same code as the oldCode in the newer state.
// If the states overlap or are close enough in the code, they can be joined.
func joinStates(older, newer *stateChange) *stateChange {
	oldDiffLen := len(older.newCode)
	newDiffLen := len(newer.oldCode)

	// Check that the total length of the code shared between the two states is the same.
	if older.prefix+oldDiffLen+older.suffix != newer.prefix+newDiffLen+newer.suffix {
		// The states are not sharing a common code base between them.
		// This shouldn't happen if the states were recorded correctly,
		// but better to be safe.
		return nil
	}

	if older.prefix+oldDiffLen < newer.prefix ||
		newer.prefix+newDiffLen < older.prefix {
		// There is a gap between the changes so we want to
		// keep them as separate states.
		return nil
	}

	// for any of the newer state's old code that extends beyond the older
	// state's old code, add it to the joined old code.
	joinedOldCode := older.oldCode
	if newer.prefix < older.prefix {
		joinedOldCode = joinRunes(newer.oldCode[:older.prefix-newer.prefix], joinedOldCode)
	}
	if newer.prefix+newDiffLen > older.prefix+oldDiffLen {
		joinedOldCode = joinRunes(joinedOldCode, newer.oldCode[(older.prefix+oldDiffLen)-newer.prefix:])
	}

	// for any of the older state's new code that extends beyond the newer
	// state's new code, add it to the joined new code.
	joinedNewCode := newer.newCode
	if older.prefix < newer.prefix {
		joinedNewCode = joinRunes(older.newCode[:newer.prefix-older.prefix], joinedNewCode)
	}
	if older.prefix+oldDiffLen > newer.prefix+newDiffLen {
		joinedNewCode = joinRunes(joinedNewCode, older.newCode[(newer.prefix+newDiffLen)-older.prefix:])
	}

	return &stateChange{
		prefix:  min(older.prefix, newer.prefix),
		suffix:  min(older.suffix, newer.suffix),
		oldCode: joinedOldCode,
		newCode: joinedNewCode,
		oldSel:  older.oldSel,
		newSel:  newer.newSel,
	}
}

func revertChange(curCode string, state *stateChange) (common.Selection, string, *stateChange) {
	// apply change to current code to revert it to the older version of the code.
	curRunes := []rune(curCode)
	oldRunes := joinRunes(curRunes[:state.prefix], state.oldCode, curRunes[len(curRunes)-state.suffix:])

	// return the inverse state to undo the revert if needed (i.e. redo)
	invState := &stateChange{
		prefix:  state.prefix,
		suffix:  state.suffix,
		oldCode: state.newCode,
		newCode: state.oldCode,
		oldSel:  state.newSel,
		newSel:  state.oldSel,
	}
	return state.oldSel, string(oldRunes), invState
}

func joinRunes(s ...[]rune) []rune {
	count := 0
	for _, r := range s {
		count += len(r)
	}
	result := make([]rune, 0, count)
	for _, r := range s {
		result = append(result, r...)
	}
	return result
}

// TODO(grantnelson-wf): Remove when `min` is available in go1.21.
// See https://pkg.go.dev/builtin#min
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
