package editor

import (
	"errors"
	"reflect"
	"strings"
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

func Test_Editor_LongestMeasuredLineLength(t *testing.T) {
	tests := []struct {
		name      string
		code      string
		expLength int
	}{
		{
			name:      `empty`,
			code:      ``,
			expLength: 0,
		},
		{
			name:      `one line`,
			code:      `hello world`,
			expLength: 11,
		},
		{
			name: `multiple lines no tabs`,
			code: lines(
				`hello world`,
				`goodbye moon`,
				`hi sun`),
			expLength: 12,
		},
		{
			name:      `one tab`,
			code:      `	`,
			expLength: TabWidth,
		},
		{
			name:      `space with a tab`,
			code:      `  	`,
			expLength: TabWidth,
		},
		{
			name: `multiple lines with tabs`,
			code: lines(
				`hello	world`,
				`				`, // 4 tabs
				`	hi sun`),
			expLength: 16,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := LongestMeasuredLineLength(tt.code)
			check(t, "length", got, tt.expLength)
		})
	}
}

func Test_Editor_ProcessKeyDown_Default(t *testing.T) {
	runKeyDownTest(t, testKeyDown{
		name:               `Unhandled character does default`,
		code:               `fmt.Println()`,
		key:                `a`,
		selectionStart:     12,
		selectionEnd:       12,
		wantPreventDefault: false,
	})
}

func Test_Editor_ProcessKeyDown_Space(t *testing.T) {
	runKeyDownTest(t, testKeyDown{
		name:               `with ctrl does default`,
		code:               `func main() {}`,
		key:                ` `,
		ctrl:               true,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `with shift does default`,
		code:               `func main() {}`,
		key:                ` `,
		shift:              true,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `do default with selection`,
		code:               `func main(){}`,
		key:                ` `,
		selectionStart:     9,  // before '('
		selectionEnd:       11, // after ')'
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `do default with invalid caret position`,
		code:               `func main(){}`,
		key:                ` `,
		selectionStart:     100,
		selectionEnd:       100,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `do default when not enough spaces and not at front of line`,
		code:               `func main(){}`,
		key:                ` `,
		selectionStart:     10, // between the parentheses
		selectionEnd:       10,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `do default for enough spaces but not at front of line`,
		code:               `func main(     ){}`,
		key:                ` `,
		selectionStart:     15, // before ')'
		selectionEnd:       15,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `insert a spece when not enough spaces`,
		code:               `  func main(){}`,
		key:                ` `,
		selectionStart:     2, // before 'f'
		selectionEnd:       2,
		wantCode:           `   func main(){}`,
		wantSelectionStart: 3, // before 'f'
		wantSelectionEnd:   3,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `adjust tabs even if not enough spaces`,
		code:               `	 		 func main(){}`,
		key:                ` `,
		selectionStart:     5, // before 'f'
		selectionEnd:       5,
		wantCode:           `			  func main(){}`,
		wantSelectionStart: 5, // before 'f'
		wantSelectionEnd:   5,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `replace tabs for enough spaces on first line`,
		code:               `   func main(){}`,
		key:                ` `,
		selectionStart:     3, // before 'f'
		selectionEnd:       3,
		wantCode:           `	func main(){}`,
		wantSelectionStart: 1, // after new tab and before 'f'
		wantSelectionEnd:   1,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `replace tabs for enough spaces not on first line`,
		code: lines(
			`func main(){`,
			`   fmt.Println("Hello")`,
			`}`),
		key:            ` `,
		selectionStart: 16, // before `fmt` on line 2
		selectionEnd:   16,
		wantCode: lines(
			`func main(){`,
			`	fmt.Println("Hello")`,
			`}`),
		wantSelectionStart: 14, // after new tab on line 2
		wantSelectionEnd:   14,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `normalizing tab space mixture`,
		code:               ` 	  	  		 	func main(){}`,
		key:                ` `,
		selectionStart:     11, // before 'f'
		selectionEnd:       11,
		wantCode:           `					 func main(){}`,
		wantSelectionStart: 6, // before 'f'
		wantSelectionEnd:   6,
		wantPreventDefault: true,
	})
}

func Test_Editor_ProcessKeyDown_Tab(t *testing.T) {
	runKeyDownTest(t, testKeyDown{
		name: `caret on blank line`,
		code: lines(
			`func main() {`,
			``,
			`}`),
		key:            `Tab`,
		selectionStart: 14,
		selectionEnd:   14,
		wantCode: lines(
			`func main() {`,
			`	`,
			`}`),
		wantSelectionStart: 15,
		wantSelectionEnd:   15,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `with ctrl`,
		code:               `func main() {}`,
		key:                `Tab`,
		ctrl:               true,
		wantPreventDefault: false, // allow default behavior to change focus
	})

	runKeyDownTest(t, testKeyDown{
		name:               `indent with selected front`,
		code:               `func main() {}`,
		key:                `Tab`,
		selectionStart:     0, // select `func`
		selectionEnd:       4,
		wantCode:           `	func main() {}`,
		wantSelectionStart: 0, // before added tab
		wantSelectionEnd:   5,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `indent with not selected front`,
		code:               `func main() {}`,
		key:                `Tab`,
		selectionStart:     1, // select `unc`
		selectionEnd:       4,
		wantCode:           `	func main() {}`,
		wantSelectionStart: 2, // select `unc`
		wantSelectionEnd:   5,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `indent multiple lines`,
		code: lines(
			`func main() {`,
			`	// The following is always true`,
			`	if true {`,
			`		// I have a dragon!`,
			`		fmt.Println("Hello")`,
			`	}`,
			`}`),
		key:            `Tab`,
		selectionStart: 18,  // before the 'T' on line 2
		selectionEnd:   104, // before the '}' on line 6
		wantCode: lines(
			`func main() {`,
			`		// The following is always true`,
			`		if true {`,
			`			// I have a dragon!`,
			`			fmt.Println("Hello")`,
			`		}`,
			`}`),
		wantSelectionStart: 19,
		wantSelectionEnd:   109,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `indent with blank lines`,
		code: lines(
			`func main() {`,
			` 	  `,
			` 	fmt.Println("Hello")`,
			``,
			`}`),
		key:            `Tab`,
		selectionStart: 15, // after first tab on line 2
		selectionEnd:   40, // at front of line 4
		wantCode: lines(
			`func main() {`,
			` 	  `,
			`	 	fmt.Println("Hello")`,
			``,
			`}`),
		wantSelectionStart: 15,
		wantSelectionEnd:   41,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `un-indent with selection`,
		code:               `	func main() {}`,
		key:                `Tab`,
		shift:              true,
		selectionStart:     2, // select `unc`
		selectionEnd:       5,
		wantCode:           `func main() {}`,
		wantSelectionStart: 1, // select `unc`
		wantSelectionEnd:   4,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `un-indent multiple lines`,
		code: lines(
			`func main() {`,
			`		// The following is always true`,
			`		if true {`,
			`			// I have a dragon!`,
			`			fmt.Println("Hello")`,
			`		}`,
			`}`),
		key:            `Tab`,
		shift:          true,
		selectionStart: 19,  // before the 'T' on line 2
		selectionEnd:   109, // before the '}' on line 6
		wantCode: lines(
			`func main() {`,
			`	// The following is always true`,
			`	if true {`,
			`		// I have a dragon!`,
			`		fmt.Println("Hello")`,
			`	}`,
			`}`),
		wantSelectionStart: 18,
		wantSelectionEnd:   104,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `un-indent with blank lines`,
		code: lines(
			`func main() {`,
			` 	  `,
			`	 	fmt.Println("Hello")`,
			``,
			`}`),
		key:            `Tab`,
		shift:          true,
		selectionStart: 15, // after first tab on line 2
		selectionEnd:   41, // at front of line 4
		wantCode: lines(
			`func main() {`,
			`  `,
			` 	fmt.Println("Hello")`,
			``,
			`}`),
		wantSelectionStart: 15,
		wantSelectionEnd:   38,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `un-indent with spaces`,
		code: lines(
			`func main() {`,
			`    // The following is always true`,
			`    if true {`,
			`        // I have a dragon!`,
			`        fmt.Println("Hello")`,
			`    }`,
			`}`),
		key:            `Tab`,
		shift:          true,
		selectionStart: 21,  // before the 'T' on line 2
		selectionEnd:   130, // before the '}' on line 6
		wantCode: lines(
			`func main() {`,
			`// The following is always true`,
			`if true {`,
			`    // I have a dragon!`,
			`    fmt.Println("Hello")`,
			`}`,
			`}`),
		wantSelectionStart: 17,
		wantSelectionEnd:   110,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `indent nothing`,
		code:               "\n\n\n",
		key:                `Tab`,
		selectionStart:     0,
		selectionEnd:       3,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `un-indent nothing`,
		code:               "\n\n\n",
		key:                `Tab`,
		shift:              true,
		selectionStart:     0,
		selectionEnd:       3,
		wantPreventDefault: true,
	})
}

func Test_Editor_findMatchingOpeningBrace(t *testing.T) {
	tests := []struct {
		name  string
		code  string
		caret int
		exp   int
	}{
		{
			name:  `empty code`,
			code:  ``,
			caret: 0,
			exp:   -1,
		},
		{
			name:  `no braces`,
			code:  `fmt.Println("Hello")`,
			caret: 4, // after `fmt.`
			exp:   -1,
		},
		{
			name:  `adjacent parenthesis`,
			code:  `func main()`,
			caret: 10, // before `)`
			exp:   9,  // before `(`
		},
		{
			name:  `simple parenthesis`,
			code:  `fmt.Println("Hello")`,
			caret: 19, // before `)`
			exp:   11, // before `(`
		},
		{
			name: `nested braces`,
			code: lines(
				`func main() {`,
				`	if true {`,
				`		fmt.Println("Hello")`,
				`	}`,
				`}`),
			caret: 51, // before last `}` on line 5
			exp:   12, // before `{` on line 1
		},
		{
			name:  `too many`,
			code:  `{[()]})`,
			caret: 6,  // before last `)`
			exp:   -1, // no matching opening parenthesis
		},
		{
			name:  `just right outter`,
			code:  `({[()]})`,
			caret: 7, // before last `)`
			exp:   0, // before first `(`
		},
		{
			name:  `just right inner`,
			code:  `({[()]})`,
			caret: 5, // before `]`
			exp:   2, // before `[`
		},
		{
			name:  `mismatched at end`,
			code:  `[{[()]})`,
			caret: 7,  // before last `)`
			exp:   -1, // no matching opening parenthesis
		},
		{
			name:  `mismatched in middle`,
			code:  `({[{)]})`,
			caret: 7,  // before last `)`
			exp:   -1, // no matching opening parenthesis
		},
		{
			// This is a known limitation since we don't parse strings.
			// Since the brace matching is to help with indents,
			// this is acceptable for now. It won't be hit too often in
			// practice without unmatched braces in multiple strings.
			name:  `quotes do not work yet`,
			code:  `fmt.Println("(")`,
			caret: 15, // before `)`
			exp:   13, // incorrectly before `(` in quotes
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := findMatchingOpeningBrace([]rune(tt.code), tt.caret)
			check(t, `position`, got, tt.exp)
		})
	}
}

func Test_Editor_ProcessKeyDown_Newline(t *testing.T) {
	runKeyDownTest(t, testKeyDown{
		name:               `with ctrl does default`,
		code:               `func main() {}`,
		key:                `Enter`,
		ctrl:               true,
		wantPreventDefault: false, // allow default behavior to change focus
	})

	runKeyDownTest(t, testKeyDown{
		name:               `with shift does default`,
		code:               `func main() {}`,
		key:                `Enter`,
		shift:              true,
		wantPreventDefault: false, // allow default behavior to change focus
	})

	runKeyDownTest(t, testKeyDown{
		name:           `deletes selection`,
		code:           `func main()catdog`,
		key:            `Enter`,
		selectionStart: 11, // select `cat`
		selectionEnd:   14,
		wantCode: lines(
			`func main()`,
			`dog`),
		wantSelectionStart: 12, // before `dog`
		wantSelectionEnd:   12,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:           `no selection and no indents`,
		code:           `func main()catdog`,
		key:            `Enter`,
		selectionStart: 14, // after `cat`
		selectionEnd:   14,
		wantCode: lines(
			`func main()cat`,
			`dog`),
		wantSelectionStart: 15, // before `dog`
		wantSelectionEnd:   15,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `with indents and no selection`,
		code: lines(
			`	 x`,
			``,
			`   	 func main()catdog`,
			`  `),
		key:            `Enter`,
		selectionStart: 24, // after `cat`
		selectionEnd:   24,
		wantCode: lines(
			`	 x`,
			``,
			`   	 func main()cat`,
			`   	 dog`,
			`  `),
		wantSelectionStart: 30, // before `dog`
		wantSelectionEnd:   30,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `with selection and indents`,
		code: lines(
			`   cat`,
			``,
			`      dog`),
		key:            `Enter`,
		selectionStart: 5, // selecting from `t` to `d`
		selectionEnd:   15,
		wantCode: lines(
			`   ca`,
			`   og`),
		wantSelectionStart: 9, // before `og`
		wantSelectionEnd:   9,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `after opening curly brace`,
		code: lines(
			`func main() {`,
			`	foo{cat`,
			`}`),
		key:            `Enter`,
		selectionStart: 19, // after `foo{`
		selectionEnd:   19,
		wantCode: lines(
			`func main() {`,
			`	foo{`,
			`		cat`,
			`}`),
		wantSelectionStart: 22, // before `cat`
		wantSelectionEnd:   22,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `before closing curly brace`,
		code: lines(
			`func main() {`,
			`	foo{`,
			``,
			`    	 [({})]`,
			`			dog`,
			`		cat}`,
			`}`),
		key:            `Enter`,
		selectionStart: 46, // after `cat` and before `}`
		selectionEnd:   46,
		wantCode: lines(
			`func main() {`,
			`	foo{`,
			``,
			`    	 [({})]`,
			`			dog`,
			`		cat`,
			`		`,
			`	}`, // matches indent of `foo{` with paired opening brace
			`}`),
		wantSelectionStart: 49, // after tabs on line 7
		wantSelectionEnd:   49,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `between curly braces`,
		code: lines(
			`func main() {`,
			`	foo{}`,
			`}`),
		key:            `Enter`,
		selectionStart: 19, // before `}` on line 2
		selectionEnd:   19,
		wantCode: lines(
			`func main() {`,
			`	foo{`,
			`		`,
			`	}`,
			`}`),
		wantSelectionStart: 22, // after tabs on line 3
		wantSelectionEnd:   22,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `between square braces`,
		code: lines(
			`func main() {`,
			`	foo[]`,
			`}`),
		key:            `Enter`,
		selectionStart: 19, // before `]`
		selectionEnd:   19,
		wantCode: lines(
			`func main() {`,
			`	foo[`,
			`		`,
			`	]`,
			`}`),
		wantSelectionStart: 22, // after tabs on line 3
		wantSelectionEnd:   22,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `between parentheses`,
		code: lines(
			`func main() {`,
			`	foo()`,
			`}`),
		key:            `Enter`,
		selectionStart: 19, // before `)` on line 2
		selectionEnd:   19,
		wantCode: lines(
			`func main() {`,
			`	foo(`,
			`		`,
			`	)`,
			`}`),
		wantSelectionStart: 22, // after tabs on line 3
		wantSelectionEnd:   22,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `between angle brackets`,
		code: lines(
			`func main() {`,
			`	foo<>`,
			`}`),
		key:            `Enter`,
		selectionStart: 19, // before `>`
		selectionEnd:   19,
		wantCode: lines(
			`func main() {`,
			`	foo<`, // no extra indent for angle brackets
			`	>`,
			`}`),
		wantSelectionStart: 21, // before `>`
		wantSelectionEnd:   21,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:           `at front of code`,
		code:           `func main() {}`,
		key:            `Enter`,
		selectionStart: 0, // before `func`
		selectionEnd:   0,
		wantCode: lines(
			``,
			`func main() {}`),
		wantSelectionStart: 1, // before `func`
		wantSelectionEnd:   1,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `before comment`,
		code: lines(
			`	// I do things`,
			`	func main() {}`),
		key:            `Enter`,
		selectionStart: 1, // before `//`
		selectionEnd:   1,
		wantCode: lines(
			`	`,
			`	// I do things`,
			`	func main() {}`),
		wantSelectionStart: 3, // still before `//`
		wantSelectionEnd:   3,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `after comment`,
		code: lines(
			`	// I do things`,
			`	func main() {}`),
		key:            `Enter`,
		selectionStart: 15, // after `things`
		selectionEnd:   15,
		wantCode: lines(
			`	// I do things`,
			`	`,
			`	func main() {}`),
		wantSelectionStart: 17, // after tab on line 2
		wantSelectionEnd:   17,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `afterin middle of comment`,
		code: lines(
			`	// I do things`,
			`	func main() {}`),
		key:            `Enter`,
		selectionStart: 8, // after `do`
		selectionEnd:   8,
		wantCode: lines(
			`	// I do`,
			`	// things`,
			`	func main() {}`),
		wantSelectionStart: 13, // before `things`
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})
}

func Test_Editor_ProcessKeyDown_SelectedLines(t *testing.T) {
	tests := []struct {
		name              string
		code              string
		selectionStart    int
		selectionEnd      int
		wantStartLine     int
		wantEndLine       int
		wantSelectedLines []string
	}{
		{
			name:              `caret at front of first`,
			code:              "dog\ncat\ncow",
			selectionStart:    0, // before `d`
			selectionEnd:      0,
			wantStartLine:     0,
			wantEndLine:       4,
			wantSelectedLines: []string{"dog\n"},
		},
		{
			name:              `caret at end of first line`,
			code:              "dog\ncat\ncow",
			selectionStart:    3, // after `g`
			selectionEnd:      3,
			wantStartLine:     0,
			wantEndLine:       4,
			wantSelectedLines: []string{"dog\n"},
		},
		{
			name:              `caret at front of seond line`,
			code:              "dog\ncat\ncow",
			selectionStart:    4, // before `c`
			selectionEnd:      4,
			wantStartLine:     4,
			wantEndLine:       8,
			wantSelectedLines: []string{"cat\n"},
		},
		{
			name:              `caret at end of third line`,
			code:              "dog\ncat\ncow",
			selectionStart:    11, // after `w`
			selectionEnd:      11,
			wantStartLine:     8,
			wantEndLine:       11,
			wantSelectedLines: []string{`cow`},
		},
		{
			name:              `selecting first two lines`,
			code:              "dog\ncat\ncow",
			selectionStart:    2, // after `o` in `dog`
			selectionEnd:      6, // before `t`
			wantStartLine:     0,
			wantEndLine:       8,
			wantSelectedLines: []string{"dog\n", "cat\n"},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			cb := &fakeCodeBox{
				initCode:           tt.code,
				initSelectionStart: tt.selectionStart,
				initSelectionEnd:   tt.selectionEnd,
			}
			ce := &codeEditor{wrapper: cb}
			lineSel := ce.getSelectedLines()
			check(t, `startLine`, lineSel.Start, tt.wantStartLine)
			check(t, `endLine`, lineSel.End, tt.wantEndLine)

			gotSelectedLines := []string{}
			ce.foreachLine(lineSel, func(line []rune, _ common.Selection) bool {
				gotSelectedLines = append(gotSelectedLines, string(line))
				return true
			})
			check(t, `selectedLines`, gotSelectedLines, tt.wantSelectedLines)
		})
	}
}

func Test_Editor_ProcessKeyDown_CommentToggle(t *testing.T) {
	runKeyDownTest(t, testKeyDown{
		name:               `with shift does default`,
		code:               `func main() {}`,
		key:                `/`, // with the shift should be `?` but check it anyway
		shift:              true,
		ctrl:               true,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `without ctrl does default`,
		code:               `func main() {}`,
		key:                `/`,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name: `comment without comments`,
		code: lines(
			`func main() {`,
			`	if true {`,
			`		fmt.Println("Hello")`,
			`	}`,
			`}`),
		key:            `/`,
		ctrl:           true,
		selectionStart: 18, // before `true`
		selectionEnd:   30, // after `fmt`
		wantCode: lines(
			`func main() {`,
			`	// if true {`,
			`	// 	fmt.Println("Hello")`,
			`	}`,
			`}`),
		wantSelectionStart: 21, // selection adjusted for added `// `s
		wantSelectionEnd:   36,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `comment with some comments`,
		code: lines(
			`func main() {`,
			`	// The following is always true`,
			`	if true {`,
			`		// I have a dragon!`,
			`		fmt.Println("Hello")`,
			`	}`,
			`}`),
		key:            `/`,
		ctrl:           true,
		selectionStart: 22, // before `following`
		selectionEnd:   86, // after `fmt`
		wantCode: lines(
			`func main() {`,
			`	// // The following is always true`,
			`	// if true {`,
			`	// 	// I have a dragon!`,
			`	// 	fmt.Println("Hello")`,
			`	}`,
			`}`),
		wantSelectionStart: 25, // selection adjusted for added `// `s
		wantSelectionEnd:   98,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `comment with blank line`,
		code: lines(
			`func main() {`,
			`	if true {`,
			`		`,
			`		fmt.Println("Hello")`,
			`	}`,
			`}`),
		key:            `/`,
		ctrl:           true,
		selectionStart: 18, // before `true`
		selectionEnd:   33, // after `fmt`
		wantCode: lines(
			`func main() {`,
			`	// if true {`,
			`		`,
			`	// 	fmt.Println("Hello")`,
			`	}`,
			`}`),
		wantSelectionStart: 21, // selection adjusted for added `// `s
		wantSelectionEnd:   39,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `only blank lines`,
		code: lines(
			`func main() {`,
			`	`,
			``,
			`		`,
			`}`),
		key:                `/`,
		ctrl:               true,
		selectionStart:     15, // end of line 2
		selectionEnd:       19, // middle of line 4
		wantCode:           ``, // no code change set.
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `uncomment lines`,
		code: lines(
			`func main() {`,
			`	// // The following is always true`,
			`	// if true {`,
			`	// 	// I have a dragon!`,
			`	// 	fmt.Println("Hello")`,
			`	}`,
			`}`),
		key:            `/`,
		ctrl:           true,
		selectionStart: 25, // before `following`
		selectionEnd:   98, // after `fmt`
		wantCode: lines(
			`func main() {`,
			`	// The following is always true`,
			`	if true {`,
			`		// I have a dragon!`,
			`		fmt.Println("Hello")`,
			`	}`,
			`}`),
		wantSelectionStart: 22, // selection adjusted for removed `// `s
		wantSelectionEnd:   86,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `uncomment with blank line`,
		code: lines(
			`func main() {`,
			`	// if true {`,
			`		`,
			`	// 	fmt.Println("Hello")`,
			`	}`,
			`}`),
		key:            `/`,
		ctrl:           true,
		selectionStart: 21, // before `true`
		selectionEnd:   39, // after `fmt`
		wantCode: lines(
			`func main() {`,
			`	if true {`,
			`		`,
			`		fmt.Println("Hello")`,
			`	}`,
			`}`),
		wantSelectionStart: 18, // selection adjusted for removed `// `s
		wantSelectionEnd:   33,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `comment caret`,
		code: lines(
			`func main() {`,
			`	fmt.Println("Hello")`,
			`}`),
		key:            `/`,
		ctrl:           true,
		selectionStart: 18, // after `fmt`
		selectionEnd:   18,
		wantCode: lines(
			`func main() {`,
			`	// fmt.Println("Hello")`,
			`}`),
		wantSelectionStart: 21, // selection adjusted for added `// `s
		wantSelectionEnd:   21,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `uncomment caret`,
		code: lines(
			`func main() {`,
			`	// fmt.Println("Hello")`,
			`}`),
		key:            `/`,
		ctrl:           true,
		selectionStart: 21, // after `fmt`
		selectionEnd:   21,
		wantCode: lines(
			`func main() {`,
			`	fmt.Println("Hello")`,
			`}`),
		wantSelectionStart: 18, // selection adjusted for removed `// `s
		wantSelectionEnd:   18,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `comment only moves selection if after changes`,
		code: lines(
			`func main() {`,
			`	if true {`,
			`		fmt.Println("Hello")`,
			`	}`,
			`}`),
		key:            `/`,
		ctrl:           true,
		selectionStart: 14, // at front of line 2
		selectionEnd:   48, // at front of line 4
		wantCode: lines(
			`func main() {`,
			`	// if true {`,
			`	// 	fmt.Println("Hello")`,
			`	// }`,
			`}`),
		wantSelectionStart: 14, // before added `// `s
		wantSelectionEnd:   54, // before last added `// `s
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name: `uncomment only moves selection if after changes`,
		code: lines(
			`func main() {`,
			`	// if true {`,
			`	// 	fmt.Println("Hello")`,
			`	// }`,
			`}`),
		key:            `/`,
		ctrl:           true,
		selectionStart: 14, // at front of line 2
		selectionEnd:   54, // at front of line 4
		wantCode: lines(
			`func main() {`,
			`	if true {`,
			`		fmt.Println("Hello")`,
			`	}`,
			`}`),
		wantSelectionStart: 14, // before added `// `s
		wantSelectionEnd:   48, // before last added `// `s
		wantPreventDefault: true,
	})
}

func Test_Editor_ProcessKeyDown_Callback(t *testing.T) {
	runKeyDownTest(t, testKeyDown{
		name:               `Save`,
		code:               "func main() {}",
		key:                `s`,
		ctrl:               true,
		wantPreventDefault: true,
		wantEventCalls: map[common.Event]int{
			common.SaveEvent: 1,
		},
	})

	runKeyDownTest(t, testKeyDown{
		name:               `s without ctrl does default`,
		code:               "func main() {}",
		key:                `s`,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Escape`,
		code:               "func main() {}",
		key:                `Escape`,
		wantPreventDefault: true,
		wantEventCalls: map[common.Event]int{
			common.EscapeEvent: 1,
		},
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Undo with ctrl z`,
		code:               "func main() {}",
		key:                `z`,
		ctrl:               true,
		wantPreventDefault: true,
		wantEventCalls: map[common.Event]int{
			common.UndoEvent: 1,
		},
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Redo with shift ctrl z`,
		code:               "func main() {}",
		key:                `z`,
		ctrl:               true,
		shift:              true,
		wantPreventDefault: true,
		wantEventCalls: map[common.Event]int{
			common.RedoEvent: 1,
		},
	})

	runKeyDownTest(t, testKeyDown{
		name:               `z without ctrl does default`,
		code:               "func main() {}",
		key:                `z`,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Redo with ctrl y`,
		code:               "func main() {}",
		key:                `y`,
		ctrl:               true,
		wantPreventDefault: true,
		wantEventCalls: map[common.Event]int{
			common.RedoEvent: 1,
		},
	})

	runKeyDownTest(t, testKeyDown{
		name:               `y without ctrl does default`,
		code:               "func main() {}",
		key:                `y`,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `ctrl y with shift does default`,
		code:               "func main() {}",
		key:                `y`,
		ctrl:               true,
		shift:              true,
		wantPreventDefault: false,
	})
}

func Test_Editor_ProcessKeyDown_InsertPair(t *testing.T) {
	runKeyDownTest(t, testKeyDown{
		name:               `Insert double quotes`,
		code:               `fmt.Println()`,
		key:                `"`,
		selectionStart:     12,
		selectionEnd:       12,
		wantCode:           `fmt.Println("")`,
		wantSelectionStart: 13, // caret between the quotes
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert with selection`,
		code:               `fmt.Println(cat)`,
		key:                `"`,
		selectionStart:     12, // select `cat``
		selectionEnd:       15,
		wantCode:           `fmt.Println("cat")`,
		wantSelectionStart: 13,
		wantSelectionEnd:   16,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert with ctrl`,
		code:               `fmt.Println(cat)`,
		key:                `"`,
		ctrl:               true,
		selectionStart:     12, // select `cat``
		selectionEnd:       15,
		wantPreventDefault: false, // allow default behavior
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert single quotes`,
		code:               `fmt.Println()`,
		key:                `'`,
		selectionStart:     12,
		selectionEnd:       12,
		wantCode:           `fmt.Println('')`,
		wantSelectionStart: 13, // caret between the quotes
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert backticks`,
		code:               `fmt.Println()`,
		key:                "`",
		selectionStart:     12,
		selectionEnd:       12,
		wantCode:           "fmt.Println(``)",
		wantSelectionStart: 13, // caret between the ticks
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert parentheses`,
		code:               `fmt.Println()`,
		key:                `(`,
		selectionStart:     12,
		selectionEnd:       12,
		wantCode:           `fmt.Println(())`,
		wantSelectionStart: 13, // caret between the parentheses
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert square brackets`,
		code:               `fmt.Println()`,
		key:                `[`,
		selectionStart:     12,
		selectionEnd:       12,
		wantCode:           `fmt.Println([])`,
		wantSelectionStart: 13, // caret between the brackets
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert curly brackets`,
		code:               `fmt.Println()`,
		key:                `{`,
		selectionStart:     12,
		selectionEnd:       12,
		wantCode:           `fmt.Println({})`,
		wantSelectionStart: 13, // caret between the brackets
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Angle brackets do not pair`,
		code:               `fmt.Println()`,
		key:                `<`,
		selectionStart:     12,
		selectionEnd:       12,
		wantPreventDefault: false,
	})
}

func Test_Editor_ProcessKeyDown_MatchingPair(t *testing.T) {
	runKeyDownTest(t, testKeyDown{
		name:               `Insert matching double quote`,
		code:               `fmt.Println("")`,
		key:                `"`,
		selectionStart:     13, // caret between quotes
		selectionEnd:       13,
		wantCode:           `fmt.Println("")`,
		wantSelectionStart: 14, // caret after last quote
		wantSelectionEnd:   14,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert matching single quote`,
		code:               `fmt.Println('')`,
		key:                `'`,
		selectionStart:     13, // caret between the quotes
		selectionEnd:       13,
		wantCode:           `fmt.Println('')`,
		wantSelectionStart: 14, // caret after last quote
		wantSelectionEnd:   14,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert matching backtick`,
		code:               "fmt.Println(``)",
		key:                "`",
		selectionStart:     13, // caret between the ticks
		selectionEnd:       13,
		wantCode:           "fmt.Println(``)",
		wantSelectionStart: 14, // caret after last tick
		wantSelectionEnd:   14,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert matching parenthesis`,
		code:               `fmt.Println()`,
		key:                `)`,
		selectionStart:     12, // caret between the parentheses
		selectionEnd:       12,
		wantCode:           `fmt.Println()`,
		wantSelectionStart: 13, // caret after `)`
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert matching square bracket`,
		code:               `fmt.Println[]`,
		key:                `]`,
		selectionStart:     12, // caret between the brackets
		selectionEnd:       12,
		wantCode:           `fmt.Println[]`,
		wantSelectionStart: 13, // caret after `]`
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert matching curly bracket`,
		code:               `fmt.Println{}`,
		key:                `}`,
		selectionStart:     12, // caret between the brackets
		selectionEnd:       12,
		wantCode:           `fmt.Println{}`,
		wantSelectionStart: 13, // caret after `}`
		wantSelectionEnd:   13,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert curly bracket at front`,
		code:               `fmt`,
		key:                `}`,
		selectionStart:     0, // before `fmt`
		selectionEnd:       0,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `Insert into not tight pair`,
		code:               `{fmt`,
		key:                `}`,
		selectionStart:     1, // after `}`
		selectionEnd:       1,
		wantPreventDefault: false,
	})
}

func Test_Editor_ProcessKeyDown_MultilineComment(t *testing.T) {
	runKeyDownTest(t, testKeyDown{
		name:               `Insert comment`,
		code:               `fmt.Println(/)`,
		key:                `*`,
		shift:              true,
		selectionStart:     13,
		selectionEnd:       13,
		wantCode:           `fmt.Println(/**/)`,
		wantSelectionStart: 14, // caret between the asterisks
		wantSelectionEnd:   14,
		wantPreventDefault: true,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `with ctrl does default`,
		code:               `fmt.Println(/)`,
		key:                `*`,
		shift:              true,
		ctrl:               true,
		selectionStart:     13,
		selectionEnd:       13,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `without shift does default`,
		code:               `fmt.Println(/)`,
		key:                `*`, // shouln't be possible because this would be an `8`.`
		selectionStart:     13,
		selectionEnd:       13,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `with selection does default`,
		code:               `fmt.Println(/cat)`,
		key:                `*`,
		shift:              true,
		selectionStart:     13,
		selectionEnd:       16,
		wantPreventDefault: false,
	})

	runKeyDownTest(t, testKeyDown{
		name:               `without preceding / does default`,
		code:               `fmt.Println()`,
		key:                `*`,
		shift:              true,
		selectionStart:     12,
		selectionEnd:       12,
		wantPreventDefault: false,
	})
}

type testKeyDown struct {
	name           string
	code           string
	key            string
	shift          bool
	ctrl           bool
	selectionStart int
	selectionEnd   int

	wantCode           string
	wantSelectionStart int
	wantSelectionEnd   int
	wantPreventDefault bool
	wantEventCalls     map[common.Event]int
}

func runKeyDownTest(t *testing.T, tt testKeyDown) {
	t.Helper()
	t.Run(tt.name, func(t *testing.T) {
		cb := &fakeCodeBox{
			initCode:           tt.code,
			initSelectionStart: tt.selectionStart,
			initSelectionEnd:   tt.selectionEnd,
		}
		gotPreventDefault := ProcessKeyDown(cb, tt.key, tt.shift, tt.ctrl)
		check(t, `code`, cb.gotCode, tt.wantCode)
		check(t, `selectedStart`, cb.gotSelectionStart, tt.wantSelectionStart)
		check(t, `selectedEnd`, cb.gotSelectionEnd, tt.wantSelectionEnd)
		check(t, `preventDefault`, gotPreventDefault, tt.wantPreventDefault)
		check(t, `eventCalls`, cb.gotEventCalls, tt.wantEventCalls)
	})
}

type fakeCodeBox struct {
	initCode           string
	initSelectionStart int
	initSelectionEnd   int

	gotCode           string
	gotSelectionStart int
	gotSelectionEnd   int
	gotEventCalls     map[common.Event]int
}

var _ common.CodeBox = (*fakeCodeBox)(nil)

func (cb *fakeCodeBox) Code() string { return cb.initCode }

func (cb *fakeCodeBox) EmitEvent(event common.Event) {
	if cb.gotEventCalls == nil {
		cb.gotEventCalls = map[common.Event]int{}
	}
	cb.gotEventCalls[event]++
}

func (cb *fakeCodeBox) GetSelection() common.Selection {
	return common.Selection{Start: cb.initSelectionStart, End: cb.initSelectionEnd}
}

func (cb *fakeCodeBox) SetCode(sel common.Selection, code string) {
	if cb.gotCode != "" {
		panic(errors.New(`SetCode called multiple times`))
	}
	cb.gotCode = code
	cb.gotSelectionStart = sel.Start
	cb.gotSelectionEnd = sel.End
}

func lines(lines ...string) string {
	return strings.Join(lines, "\n")
}

func check[T any](t *testing.T, name string, got, want T) {
	t.Helper()

	switch any(want).(type) {
	case string:
		wantStr, gotStr := any(want).(string), any(got).(string)
		wantLines := strings.Split(wantStr, "\n")
		gotLines := strings.Split(gotStr, "\n")
		if diff := cmp.Diff(wantLines, gotLines); len(diff) > 0 {
			diff = strings.ReplaceAll(diff, "\n", "\n    ")
			t.Errorf("%s was not as expected:\n"+
				"  want: %q\n"+
				"  got:  %q\n"+
				"  diff:\n%s", name, wantStr, gotStr, diff)
		}
		return
	}

	kind := reflect.TypeOf(want).Kind()
	if kind == reflect.Slice || kind == reflect.Map || kind == reflect.Struct {
		if diff := cmp.Diff(want, got); len(diff) > 0 {
			diff = strings.ReplaceAll(diff, "\n", "\n    ")
			t.Errorf("%s was not as expected:\n"+
				"  want: %v\n"+
				"  got:  %v\n"+
				"  diff:\n%s", name, want, got, diff)
		}
		return
	}

	if !reflect.DeepEqual(got, want) {
		t.Errorf("%s was not as expected:\n"+
			"  want: %v\n"+
			"  got:  %v", name, want, got)
	}
}
