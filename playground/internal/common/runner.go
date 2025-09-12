package common

// Runner is the interface describing the functions to compile and run Go code
// via GopherJS in the playground.
type Runner interface {

	// Preload asynchronously starts loading standard library packages needed
	// to run the given code. A running preload will be cancelled when Run,
	// Stop, or another Preload is called.
	Preload(code string)

	// Run asynchronously compiles and runs the given code.
	// If this is called again while a previous Run is still in progress,
	// the previous Run is cancelled.
	Run(code string)
}
