package common

// CodeBox represents a code box that allows getting and setting
// the code and selection, as well as emitting events.
//
// This interface allows the code box implementation to be replaced
// with a mock implementation for testing.
type CodeBox interface {
	Code() string
	GetSelection() Selection
	SetCode(sel Selection, code string)
	EmitEvent(event Event)
}

type Event string

const (
	EscapeEvent Event = `escape`
	SaveEvent   Event = `save`
	UndoEvent   Event = `undo`
	RedoEvent   Event = `redo`
)
