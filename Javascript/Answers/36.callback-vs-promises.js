/*
	Callback: is function in javascript which is passed to another function as parameter, then callback function is executed inside another function.

	Promise: is similar to events, but
	
	1. Promise can succeed or fail once and it cannot switch sucess with failure or vice versa.
	2. Even if the event you attached with promise took earlier, we can attach a success/failure callback to listen to them accordingly.

	Promise vs Callback:
	1. Callbacks are hard to maintain and debug if its bigger and code becomes more nastier to read.
	2. But promise code are more clear and readable, you can even dubug async calls in devTools.
	3. Promise comes with a integrated error handler. 
*/ 

// Example - Callback in Jquery Ajax
$.ajax("https://google.com", {  
  success: function(data) {},   // callback
  error: function(error) {} // callback
});

// Example - Promise in Jquery Ajax
$.ajax("https://google.com")
  .done(function(data) {})   // promise
 	.fail(function(error) {}) // callback