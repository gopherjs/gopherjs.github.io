package workers

import (
	"sync"
	"time"
)

// Throttle will reduce the number of times that some event occurs within
// a given time frame.
//
// Calling `Trigger` will start a timer, unless a timer has already been
// started. After a specific amount of time since the timer was first started,
// an event is emitted via the callback and the timer is stopped.
//
// This is useful for handling things like periodically evaluating some value
// where the trigger may occur rapidly but we only want to occationally
// perform the event. The event fires at the end of the time frame
// (opposite from debounce) so that when the event fires, it will be run on
// the most up-to-date information.
//
// The throttle can be susprended and resumed. When suspended, the event will
// not occur when a trigger is called and any running timer will be stopped,
// When resumed, if any event is still pending or a trigger has been called
// while suspended, the timer will be started on resume.
type throttle struct {
	lock     *sync.Mutex
	dur      time.Duration
	timer    *time.Timer
	pending  bool
	suspend  bool
	callback func()
}

func newThrottle(dur time.Duration, callback func()) *throttle {
	return &throttle{
		lock:     &sync.Mutex{},
		dur:      dur,
		timer:    nil,
		pending:  false,
		callback: callback,
	}
}

func (t *throttle) startTimer() {
	if t.timer == nil {
		t.timer = time.AfterFunc(t.dur, t.timeout)
	} else if !t.pending {
		t.timer.Reset(t.dur)
	}
}

func (t *throttle) stopTimer() {
	if t.timer != nil {
		t.timer.Stop()
		t.timer = nil
	}
}

func (t *throttle) timeout() {
	t.lock.Lock()
	defer t.lock.Unlock()

	if t.pending && !t.suspend {
		t.callback()
		t.pending = false
	}
}

func (t *throttle) Trigger() {
	t.lock.Lock()
	defer t.lock.Unlock()

	t.pending = true
	if !t.suspend {
		t.startTimer()
	}
}

func (t *throttle) Suspend() {
	t.lock.Lock()
	defer t.lock.Unlock()

	if !t.suspend {
		t.suspend = true
		t.stopTimer()
	}
}

func (t *throttle) Resume() {
	t.lock.Lock()
	defer t.lock.Unlock()

	if t.suspend {
		t.suspend = false
		if t.pending {
			t.startTimer()
		}
	}
}
