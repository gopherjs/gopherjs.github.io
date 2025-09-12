package snippets

import _ "embed"

// DefaultCode is the default code that is shown in the playground
// when no other snippet is loaded.
//
//go:embed default.go.txt
var DefaultCode string

// predefined contains the pre-defined code snippets that are available
// in the playground, keyed by the display name.
//
// TODO(grantnelson-wf): Add more pre-defined snippets.
var predefined = map[string]string{
	`Hello`: DefaultCode,
}
