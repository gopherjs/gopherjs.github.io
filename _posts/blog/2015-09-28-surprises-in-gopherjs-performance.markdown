---
layout: post
title:  "Surprises in GopherJS Performance"
date:   2015-09-28
author: Dmitri Shuralyov
---

The GopherJS project first caught my attention about 2 years ago, back when few parts of the Go spec were implemented.
However, I noticed the incredible pace at which Richard was working, making multiple sophisticated commits per day, as well as fixing reported compiler issues within hours.
A few months later, I decided to download it and give it try on a relatively [large pure Go package](https://godoc.org/github.com/shurcooL/markdownfmt/markdown?import-graph&hide=1) for formatting Markdown, and I was quite shocked when it... [simply worked](https://github.com/shurcooL/atom-markdown-format/commit/6b5f21c4457309f8eba3a78b82e0c9a458ff13b4).

Since then, GopherJS has made significant progress, both in feature support (by now, full support for goroutines, channels, select statement, and the rest of the Go language spec), as well as quite a few performance leaps.
For example, in [issue 142](https://github.com/gopherjs/gopherjs/issues/142), I reported a case where the GopherJS performance was pretty bad, taking nearly 30 seconds to do what native Go did in under 100 ms.
Fast forward just a few days later, and Richard came up with optimizations that lead to a [10x improvement](https://github.com/gopherjs/gopherjs/issues/142#issuecomment-68664354) in performance!

One day, I was perusing the golang.org home page and decided to play with the [concurrent pi](https://play.golang.org/p/RdbPXQcZHi) sample.
I wanted to see how much overhead using goroutines was (they were used to demonstrate how lightweight they are compared to threads, but it's still suboptimal for performance), so I converted the program to a purely iterative one.
It looked like this:

```Go
// Play with benchmarking a tight loop with many iterations and a func call, compare gc vs GopherJS performance.
package main

import (
	"fmt"
	"math"
	"time"
)

func term(k float64) float64 {
	return 4 * math.Pow(-1, k) / (2*k + 1)
}

// pi performs n iterations to compute an approximation of pi using math.Pow.
func pi(n int32) float64 {
	f := 0.0
	for k := int32(0); k <= n; k++ {
		f += term(float64(k))
	}
	return f
}

func main() {
	// Start measuring time from now.
	started := time.Now()

	const n = 50 * 1000 * 1000
	fmt.Printf("approximating pi with %v iterations.\n", n)
	fmt.Println(pi(n))

	fmt.Println("total time taken is:", time.Since(started))
}
```

I ran the program on my computer:

```bash
$ go run main.go
approximating pi with 50000000 iterations.
3.1415926735902504
total time taken is: 8.358498915s
```

8.35 seconds to perform 50 million iterations, not bad.
Then I got curious how long it would take if compiled to JavaScript via GopherJS.

I realized that this is a very tight loop, so any overhead incurred by the conversion of Go to JavaScript would be multiplied and be very visible.
Still, I was curious, so fired up GopherJS and ran the same program by compiling it to JavaScript and running it with node:

```bash
$ gopherjs run main.go
approximating pi with 50000000 iterations.
3.1415926735902504
total time taken is: 2.317s
```

23 seconds, that's actually... wait, WHAT!?

2.3 seconds! That's 4 times faster than the native Go version.
For a few minutes, I looked at the two numbers in disbelief.
Then I decided to investigate what's going on.
Is the same code running in both cases?
Is the program correct?
Is node doing something weird?

I tried running it in the [GopherJS Playground](http://www.gopherjs.org/playground/#/K7r0-q_Jwc), which you can also do:

<http://www.gopherjs.org/playground/#/K7r0-q_Jwc>

And got the same time in Chrome browser (stable channel).

The calculated value of pi was the same, and after adding some debugging statements I was sure the calculation was indeed correct, and iterations were not being skipped.

But how could it be that taking this Go program and compiling it to JavaScript and executing that would be 4 times faster?
I had to get to the bottom of it.

The first thing I needed to ensure, was the same code being run in both cases?
The entire code is plain Go, with the exception of `math.Pow`.
So I looked at how [Go implements it](http://gotools.org/math#Pow).
Pretty straightforward Go code.
Now I knew GopherJS uses some JavaScript native APIs to implement parts of the standard library, so I checked how [it implemented `math.Pow`](https://github.com/gopherjs/gopherjs/blob/master/compiler/natives/math/math.go#L157).
Aha! It's not the same code after all.
GopherJS implements it by using [JavaScript's `Math` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), so it translates to the following JavaScript code:

```JavaScript
Math.pow(x, y)
```

That's when it hit me.
In this code, which was taken from a snippet that optimized for brevity and demonstration purposes rather than performance, `math.Pow` was being used with the first argument of -1, and the second argument are values 0, 1, 2, 3, etc., in sequence.
The output of that is an alternating sequence of 1, -1, 1, -1, 1, -1, etc.
But using `math.Pow` for that is extremely inefficient, since it's meant to work with arbitrary inputs that are much harder to calculate.
This can be trivially rewritten with an if statement.

So, in order to ensure the same code runs in both cases, I did that and tried this program:

```Go
// Play with benchmarking a tight loop with many iterations and a func call, compare gc vs GopherJS performance.
//
// An alternative more close-to-metal implementation that doesn't use math.Pow.
package main

import (
	"fmt"
	"time"
)

func term(k int) float64 {
	if k%2 == 0 {
		return 4 / (2*float64(k) + 1)
	} else {
		return -4 / (2*float64(k) + 1)
	}
}

// pi performs n iterations to compute an approximation of pi.
func pi(n int) float64 {
	f := 0.0
	for k := int(0); k <= n; k++ {
		f += term(k)
	}
	return f
}

func main() {
	// Start measuring time from now.
	started := time.Now()

	const n = 1000 * 1000 * 1000
	fmt.Printf("approximating pi with %v iterations.\n", n)
	fmt.Println(pi(n))

	fmt.Println("total time taken is:", time.Since(started))
}
```

Let's try that:

```bash
$ go run main.go
approximating pi with 1000000000 iterations.
3.1415926545880506
total time taken is: 10.916861037s

$ gopherjs run main.go
approximating pi with 1000000000 iterations.
3.1415926545880506
total time taken is: 6.585s
```

I had to bump up the number of iterations to 1 billion, because this code runs so much faster than the naive `math.Pow`-using version, in both cases.
But GopherJS version is still faster.

Aha, then I realized that [GopherJS emulates a 32-bit architecture](https://github.com/gopherjs/gopherjs#architecture).
But I'm running native Go on a 64-bit machine.
So the size of `int` is 32-bit for GopherJS code but 64-bit for Go code.
Let's make it use `int32` consistently and try again:

```bash
$ go run main.go
approximating pi with 1000000000 iterations.
3.1415926545880506
total time taken is: 6.658s

$ gopherjs run main.go
approximating pi with 1000000000 iterations.
3.1415926545880506
total time taken is: 6.549s
```

As expected, the GopherJS time did not change because it was a no-op, but the native Go performance has now caught up to the GopherJS version!

Just to be sure, I wanted to see if 6.5 seconds was as fast as these 1 billion iterations could happen, even if you were to implement this in a low-level language like C:

```C
#include <stdio.h>
#include <time.h>

double term(int k) {
	if (k%2 == 0) {
		return 4.0 / (2.0*(double)(k) + 1.0);
	} else {
		return -4.0 / (2.0*(double)(k) + 1.0);
	}
}

// pi performs n iterations to compute an approximation of pi.
double pi(int n) {
	double f = 0.0;
	for (int k = 0; k <= n; k++) {
		f += term(k);
	}
	return f;
}

int main() {
	int n = 1000 * 1000 * 1000;
	printf("approximating pi with %d iterations.\n", n);
	printf("%.16f\n", pi(n));

	return 0;
}
```

The [timing library](http://en.cppreference.com/w/c/chrono) of C isn't as friendly to use as the Go time package, so I gave up and just used `time` instead:

```bash
$ gcc main.c
$ time ./a.out
approximating pi with 1000000000 iterations.
3.1415926545880506

real    0m11.385s
user    0m11.377s
sys     0m0.006s
```

11.3 seconds? Slower?
Ah, of course, I was too used to `go` build tool that uses optimization by default, and forgot that C compilers don't do that.

```bash
$ gcc -O3 main.c
$ time ./a.out
approximating pi with 1000000000 iterations.
3.1415926545880506

real    0m6.434s
user    0m6.427s
sys     0m0.004s
```

Nice, it's the same time as the Go and GopherJS versions.
That means a few things.

The V8 JavaScript engine is incredible.
It's able to take Go code that is compiled to JavaScript code, and just-in-time compile to it to machine instructions that are as efficient as the native Go compiler.

The JavaScript `Math.pow` implementation is faster when value of x is -1 and values of y are integers.
I haven't compared its performance for other inputs; let me know if you do.
However, using `Pow` with such inputs is silly and should not be done, as you can see by the 50 million to 1 billion iteration increase when rewriting it with an equivalent if statement.

You can try the final optimized version of GopherJS in your browser via the GopherJS Playground:

<http://www.gopherjs.org/playground/#/sDEYM2TwC7>

It's fascinating to think about what happens when you do that.
The GopherJS compiler, written in pure Go, has compiled itself to JavaScript, which runs in your browser.
That compiler takes your input Go program, compiles it to JavaScript and runs it.
The V8 engine (or whatever JavaScript engine your browser uses) takes the generated JavaScript and JITs it to the equivalent machine code as produced by a low-level C implementation compiled with -O3, the max optimization setting.

There are still cases where the code GopherJS generates does not translate to something JS engines can optimize really well.
For example, in [issue 276](https://github.com/gopherjs/gopherjs/issues/276), GopherJS version runs an unusually 1000x slower than native version.
But I'm sure with some work, significant performance improvements can be made there, and in most other cases the performance is much better.

With the prospects of asm.js and the upcoming WebAssembly, I think there's a bright future for having Go language as a viable choice for the browser.
I suggest you give it a try for your next little frontend project, or play with compiling any pure Go package to run in the browser.
You may end up being pleasantly surprised, like I was.
