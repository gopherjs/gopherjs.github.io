package common

// SnippetStore represents a code snippet store for persisting and retrieving
// customer defined code snippets.
//
// This interfaces allows the network access to be replaced
// with a mock implementation for testing.
type SnippetStore interface {

	// TODO(grantnelson-wf): Update to work better with predefined snippets.
	//
	// Read fetches the code snippet with the given hash (including the `#/`)
	// from the snippet store.
	// If the has is `#` without the `/`, the remainder is checked to see
	// if it matches any pre-defined snippets, i.e. `#Hello`.
	// If the hash is empty or invalid, it returns the default code.
	// This will block while waiting for the network request to complete.
	Read(hash string) (string, error)

	// Write sends the given code snippet to the snippet store and returns
	// the snippet hash (including the `#/`) on success.
	// This will block while waiting for the network request to complete.
	Write(code string) (string, error)
}
