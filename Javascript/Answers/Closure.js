/*
	# Closure - is when a function has a function inside it thats when a closure is created. In other word, the inner function has access
		to the outer function variables even after the outer function has executed. Same goes for the outer function arguments.
	
	## Reference 
	1. http://www.w3schools.com/js/js_function_closures.asp
	2. http://stackoverflow.com/questions/111102/how-do-javascript-closures-work?answertab=active#tab-top
*/


// Example 1
function outerFunz() {
	var x = 10;
	return function(y) {
		return x + y; // x is available here 
	}
}

var funz = outerFunz();
var innerFunz = funz(10); // Passing `y` and calling `inner anonymous` function
console.log(innerFunz); // 20

// Example 2
function outerFunz(z) {
	var x = 10;
	function innerFunz() {
		return x + z; // x & z is available here 
	}
	innerFunz(); // calling `innerFunz` after outer function
}

console.log(outerFunz(15)); // 25