package common

// Output is the interface describing the functions for GUI output box.
// This interface is to separate the playground logic from the actual GUI implementation.
type Output interface {

	// Clear clears all output.
	Clear()

	// AddError adds an error message to the output.
	//
	// All text including new lines will be escaped for HTML.
	AddError(err error)

	// AddOutput adds output text to the output.
	// This will also scroll the output box to the bottom.
	//
	// If a form feed ("\0c") is encountered in the output,
	// the output box is cleared before adding the remaining output.
	// All text including new lines will be escaped for HTML.
	AddOutput(out string)
}
