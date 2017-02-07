/*
	If you understand scope in javascript then you can understand this.
	setTimeout: is method in javascript to run a particular given interval.

	Task:  is to print a values of an array in for-loop inside a setTimeout

	Reference: 
	1. http://www.w3schools.com/jsref/met_win_settimeout.asp
*/ 

// Example
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	setTimeout(function () {
		console.log(arr[i]); // should print from 1 to 5
	}, 0);
}

// But it will print undefined 5 times.
// To fix this we have to reference the `i` to setTimeout. there are many ways

// Example 1 - Passing i as argument
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	setTimeout(function (i) {
		console.log(arr[i]); // will print from 1 to 5
	}(i), 0); // By passing `i` argument we can fix it
}

// Example 2 - using closure 
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	(function (index) {
		setTimeout(function () {
			console.log(arr[index]); // will print from 1 to 5
		}, 0);
	})(i);
}

// Example 3 - using bind()
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	setTimeout(function () {
		// will print from 1 to 5
		console.log(arr[this]); // this refers to `i` as we are binding it
	}.bind(i), 0);
}