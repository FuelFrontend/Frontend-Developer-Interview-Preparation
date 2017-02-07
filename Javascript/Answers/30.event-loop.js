/*
	Javascript is single threaded.
	
	Event loop: 

	// Points to remember
	1. In javascript, all most all the `I/O operations` are `non-blocking` (which includes http request, db operations and disk read & write) 
	2. Browser ask this single thread to perform an operation and provides a callback function and move on to next operation. 
	3. Such as letting the user to do mouse click or key press, while an XML request or a timer is triggered.

	Reference: 
	1. https://danmartensen.svbtle.com/events-concurrency-and-javascript
	2. https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop#Runtime_concepts
*/ 

// Example

/* HTMl
	<button>Click me</button>
*/ 

// Attaching click event listener to above button
document.querySelector("button").addEventListener("click", () => {
	console.log("Button Clicked");
});

// Step - 1 - UI
// User clicks the button

// Step - 2 - Web API's
// Web API's such as `DOM API`, `XMLHttpRequest`, `setTimout` etc,. these API's are exposed to javascript via window object.. 
// In our case, its a `DOM API` to handle a click event.

// Step - 3 - Event Queue
// Click event callback is pushed to `Event Queue` also called task queue.

// Step - 4 - Event Loop
// Event loop which chooses which callback needs to be pushed on the javascript `Call Stack`.

// Step 5 - Javascript Runtime
// Event callback enters into javascript Runtime.
// Javascript Runtime executes the event handler callback in its `call stack`. A new stack frame is create (execution object) and top of the stack is being executed.
// Stack frames are pushed and poped out of `Stack` once the function is returned.


// More about Javscript's Call Stack
// 1. JS engine is multi threaded but its call stack is single thread allowing only one code to execute at a time.
// 2. No task swithcing of task is done in call stack. A task is carried out to completion.
// 3. They are non-blocking.