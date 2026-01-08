package snippets

import (
	_ "embed"
	"sort"
)

// DefaultCode is the default code that is shown in the playground
// when no other snippet is loaded.
//
//go:embed default.go.txt
var DefaultCode string

// DefaultName is the name of the default snippet.
const DefaultName = `Hello`

//go:embed workGroup.go.txt
var workGroupCode string

//go:embed typer.go.txt
var typerCode string

//go:embed donut.go.txt
var donutCode string

// predefined contains the pre-defined code snippets that are available
// in the playground, keyed by the display name.
var predefined = map[string]string{
	`Hello`:     DefaultCode,
	`WorkGroup`: workGroupCode,
	`Typer`:     typerCode,
	`Donut`:     donutCode,
}

// SnippetNames returns the names of all predefined snippets.
// The names do not include the leading '#' character.
func SnippetNames() []string {
	// TODO(grantnelson-wf): Update with maps.Keys when on go1.23.0
	names := make([]string, 0, len(predefined))
	for name := range predefined {
		names = append(names, name)
	}
	sort.Strings(names)
	return names
}

// GetSnippet returns the predefined snippet code for the given name.
// The name should not include the leading '#' character.
// If no predefined snippet exists for the given name, false is returned.
func GetSnippet(name string) (string, bool) {
	snippet, ok := predefined[name]
	return snippet, ok
}

// getSnippetName returns the name of the predefined snippet that
// matches the given code.
// The returned name does not include the leading '#' character.
// If no predefined snippet matches the given code, false is returned.
func getSnippetName(code string) (string, bool) {
	for name, snippet := range predefined {
		if code == snippet {
			return name, true
		}
	}
	return ``, false
}
