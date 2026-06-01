package page

import (
	"go/format"
	"sync"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/react"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/url"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/imports"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/snippets"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/workers"
)

func Playground() *react.Element {
	return react.CreateElement(playgroundComponent, nil)
}

// Since React can create Refs twice when in "Strict Mode" but we do not
// want any of these resources created twice so they are singletons.
var (
	compiler     = OnceValue(workers.NewCompiler)
	runner       = OnceValue(workers.NewRunner)
	snippetStore = OnceValue(snippets.NewStore)
)

// TODO(grantnelson-wf): Remove when we've reached go1.21
func OnceValue[T any](f func() T) func() T {
	var (
		once   sync.Once
		result T
	)
	return func() T {
		once.Do(func() {
			temp := f
			f = nil
			result = temp()
		})
		return result
	}
}

func playgroundComponent(props react.Props) *react.Element {
	var (
		bannerRef  = react.UseRefLazy(NoopBannerHandle)
		outputRef  = react.UseRefLazy(NoopOutput)
		codeBoxRef = react.UseRefLazy(NoopCodeBoxHandle)

		compilerRef      = react.UseRefLazy(compiler)
		runnerRef        = react.UseRefLazy(runner)
		snippetsStoreRef = react.UseRefLazy(snippetStore)
	)

	// Get version number from compiler webworker.
	// TODO(grantnelson-wf): Idea: Since the compiler is in a webworker we could
	// have multiple versions of the compile app available with a drop down to
	// allow different GopherJS compiler versions to be selected, similar to
	// how <https://go.dev/play/> allows the Go version to be selected.
	react.UseEffect(func() {
		compilerRef.Current().GetVersion(bannerRef.Current().SetVersion)
	}, []any{bannerRef})

	// Listen for changes in the top window's URL query.
	// The query is how we can set specific modes for testing and debugging.
	// `?debug=true` will enable verbose messages from the compiler.
	// `?local=true` will enable local mode for the snippet store to prevent
	// CORS errors while running in a forked repo or debugging.
	urlQueryChanged := react.UseCallback(func() {
		compilerRef.Current().SetVerbose(url.GetQueryBool(`debug`))
		snippetsStoreRef.Current().SetLocalOnly(url.GetQueryBool(`local`))
	}, []any{compilerRef, snippetsStoreRef})

	react.UseEffectWithCleanup(func() func() {
		urlQueryChanged.Invoke()
		return url.SubscribeToQueryChanges(urlQueryChanged)
	}, []any{urlQueryChanged})

	// readSnippet reads a snippet or shared code from the store based on the given hash.
	readSnippet := react.UseCallback(func(hash string) {
		snippetsStoreRef.Current().Read(hash, func(snippet string, err error) {
			o := outputRef.Current()
			o.Clear()
			if err != nil {
				bannerRef.Current().SetShareHash(``)
				o.AddError(err)
			} else {
				// If loading default (empty hash), set to #Hello for consistency
				if hash == `` {
					hash = `#` + snippets.DefaultName
				}
				bannerRef.Current().SetShareHash(hash)
			}
			// even on error, set the code so the default code is shown.
			cb := codeBoxRef.Current()
			cb.SetCode(cb.GetSelection(), snippet)
		})
	}, []any{codeBoxRef, bannerRef, outputRef})

	// This is emitted once on component mount to read the initial snippet
	// and set the initial code based on the url hash or set to the default code.
	react.UseEffect(func() {
		readSnippet.Invoke(url.GetUrlHash())
	}, []any{})

	// This callback is invoked when the top window's URL hash changes.
	// When the window's URL hash changed before the share hash state,
	// we know that the user changed the URL hash manually or via
	// browser navigation, so we need to update the share hash state
	// and load the corresponding snippet.
	urlHashChanged := react.UseCallback(func() {
		if hash := url.GetUrlHash(); hash != bannerRef.Current().ShareHash() {
			readSnippet.Invoke(hash)
		}
	}, []any{bannerRef, readSnippet})

	// This listens for the top window's URL hash changing.
	react.UseEffectWithCleanup(func() func() {
		return url.SubscribeToHashChanges(urlHashChanged)
	}, []any{urlHashChanged})

	// onUserChangedCode is called by the code box to clear the share hash
	// when the user changes the code.
	onUserChangedCode := react.UseCallback(func() {
		bannerRef.Current().SetShareHash(``)
	}, []any{bannerRef})

	// onShare writes the code to the store when the share button is clicked.
	onShare := react.UseCallback(func() {
		code := codeBoxRef.Current().Code()
		snippetsStoreRef.Current().Write(code, func(hash string, err error) {
			output := outputRef.Current()
			output.Clear()
			if err != nil {
				output.AddError(err)
				bannerRef.Current().SetShareHash(``)
				return
			}
			bannerRef.Current().SetShareHash(hash)
		})
	}, []any{codeBoxRef, outputRef, bannerRef})

	// onErrorLines is called when the output is updated. Any error that can be
	// parsed into file name and line numbers are gathered and sent here. This
	// will update the code box with highlights for the error lines.
	onErrorLines := react.UseCallback(func(errLines map[string][]int) {
		cb := codeBoxRef.Current()
		cb.SetErrorLines(errLines[cb.FileName()])
	}, []any{codeBoxRef})

	// onSnippetSelected performs a read when a predefined snippet is selected from the drop down.
	onSnippetSelected := react.UseCallback(func(selection string) {
		readSnippet.Invoke(`#` + selection)
	}, []any{readSnippet})

	// Redirect the output for the compiler and runner to the output box.
	react.UseEffect(func() {
		out := outputRef.Current()
		compilerRef.Current().SetOutput(out)
		runnerRef.Current().SetOutput(out)
	}, []any{outputRef, compilerRef, runnerRef})

	// Whenever the code is changed let the compiler know so that it
	// can start preloading the code.
	onCodeChange := react.UseCallback(func() {
		// TODO(grantnelson-wf): Idea: We could add multiple files where the
		// user can add and remove files (probably shown as tabs or file tree).
		// Currently we only support one file so this is hard coded.
		cb := codeBoxRef.Current()
		compilerRef.Current().SetCode(map[string]string{
			cb.FileName(): cb.Code(),
		})
	}, []any{codeBoxRef, compilerRef})

	// Create a callback for when the run button is pressed.
	onRun := react.UseCallback(func() {
		runnerRef.Current().Stop()
		output := outputRef.Current()
		output.Clear()
		output.AddSystem(`Fetching packages and compiling...`)

		compilerRef.Current().Compile(func(jsCode string, err error) {
			output := outputRef.Current()
			output.Clear()
			if err != nil {
				output.AddError(err)
				output.AddSystem(`GopherJS build failed.`)
				return
			}
			runnerRef.Current().Run(jsCode)
		})
	}, []any{outputRef, runnerRef})

	// Create a callback for the the format button is pressed.
	onFormat := react.UseCallback(func(fmtImports bool) {
		runnerRef.Current().Stop() // stop running code so output is uncluttered
		cb := codeBoxRef.Current()

		var out []byte
		var err error
		if fmtImports {
			// TODO(grantnelson-wf): Need to update the imports since the current
			// version uses ast.Object to determine if a receiver of a select is
			// resolved, however ast.Object is deprecated.
			out, err = imports.Process(cb.FileName(), []byte(cb.Code()), nil)
		} else {
			out, err = format.Source([]byte(cb.Code()))
		}

		output := outputRef.Current()
		output.Clear()
		if err != nil {
			output.AddError(err)
			return
		}
		cb.SetCode(cb.GetSelection(), string(out))
	}, []any{codeBoxRef, outputRef, runnerRef})

	// Create a callback for when the escape key is pressed in the code box.
	// Escape will move focus to the banner (i.e. run button).
	// This is for eccessability so that users can easily run the
	// code after editing. Or at minimum, users can exit the text area
	// like they would be able to with tab stops but our editor is consuming
	// tab key presses so tab stops won't work when in the text area.
	onEscapeCode := react.UseCallback(func() {
		if br := bannerRef.Current(); br != nil {
			br.Focus()
		}
	}, []any{bannerRef})

	// Create a callback for when the Ctrl+S is pressed in the code box.
	// When a customer presses Ctrl+S, it is likely muscle memory for saving
	// the current file. Since popping up a dialog to save the code (like
	// some other playgrounds do) can be annoying, we can just run format
	// like is also done in a lot of IDE's on save.
	onSave := react.UseCallback(func() {
		if br := bannerRef.Current(); br != nil {
			onFormat.Invoke(br.FormatImports())
		}
	}, []any{onFormat, bannerRef})

	return react.Fragment(
		Banner(bannerRef, onRun, onFormat, onShare, onSnippetSelected),
		react.Div(react.Props{}.
			Set(`id`, `code-output-box`),
			CodeBox(codeBoxRef, onCodeChange, onUserChangedCode, onSave, onEscapeCode),
			OutputBox(outputRef, onErrorLines),
		),
	)
}
