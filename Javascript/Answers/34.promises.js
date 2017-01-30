/*
	Promises (is asynchronous): is similar to events in javascript except the following
	
	1. Promise can succeed or fail once and it cannot switch sucess with failure or vice versa.
	2. Even if the event you attached with promise took earlier, we can attach a success/failure callback to listen to them accordingly.

	Reference: 
	1. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
	2. https://developers.google.com/web/fundamentals/getting-started/primers/promises
*/ 

// Promise have 4 stages
// 1. Fulfilled - succeeded.
// 2. Rejected - failed.
// 3. Pending - hasn't fulfilled or rejected.
// 4. Settled - has fulfilled or rejected.

// Example 1
// Promise is added in ES6
var promise = new Promise(function (resolve, reject) {
	// Async operation will happen here
	if (/* some operation succeeded */) {
		resolve("Worked");
	}
	else {
		reject(new Error("Failed"));
	}
});

// Now we call listen to success or failure using below
// Also we can chain then callbacks
promise.then(function (msg) {
	console.log(msg); // Worked
}, function (err) {
	console.log(err); // Error: Failed
});

// Example 2 - Promise.all
// Lets say you want to multiple async operation, so handling each of them in then/error callback means we have to write more code
// Thats where `Promise.all([])` comes in.

var morePromise = new Promise.all([promise1, promise2, promise3]) // Array of promises

morePromise.then(function (data) {
	// data comes in the same order as in the [promise1, promise2, promise3]
}, function (err) {
	// Error comes in the same order as in the [promise1, promise2, promise3]
	console.log(err)
});