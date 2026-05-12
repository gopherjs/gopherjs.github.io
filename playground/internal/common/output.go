package common

// Output is the interface describing the functions for GUI output box.
// This interface is to separate the playground logic from the actual GUI implementation.
type Output interface {
	// Clear clears all output.
	Clear()

	// AddError adds an error message to the output.
	// This will stop scrolling the output since typically
	// this for compiler errors where we want to have the top
	// of the error in view.
	//
	// All text including new lines will be escaped for HTML.
	AddError(err error)

	// AppendOut appends output text to the output.
	// This is typically used like appending new content from os.Stdout.
	// This will also scroll the output box to the bottom.
	//
	// If a form feed ("\x0c") is encountered in the output,
	// the output box is cleared before adding the remaining output.
	// All text including new lines will be escaped for HTML.
	AppendOut(out string)

	// AppendErr appends error text to the output.
	// This is similar to AppendOut but for os.Stderr
	// so the text will be red and the auto-scrolling will stop.
	AppendErr(err string)

	// AddSystem appends system text to the output on its own line.
	// This is similar to AppendOut but for messages about the
	// build and run of GopherJS. The text will be gray.
	AddSystem(err string)
}
