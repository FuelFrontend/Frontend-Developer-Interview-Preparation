/*
	# Bind - creates a new function that will have `this` set to the 1st parameter passed to `.bind()` method (will not auto executes).
	
	## Reference 
	1. http://www.javascripture.com/Function#bind
	2. http://stackoverflow.com/questions/2236747/use-of-the-javascript-bind-method
*/

// Bind Function
Function.prototype.bind = function() {
	var funz = this;
	var args = Array.prototype.slice.call(arguments); // Converting arguments into `Array`
	var thisContext = args.shift(); // Getting the 1st arugment
	return function() {
		return funz.apply(thisContext, args.concat(Array.prototype.slice.call(arguments))); // Concating newly passed arg as well
	}
};

// Example
function sum(X, Y) {
  return X + Y;
}

var sum1 = sum(5, 5);
console.log(sum1); //10

var sum2 = sum.bind(null, 15); // Binding the context and passing X

// `sum2` return new funz() and calling it below with Y
console.log(sum2(10)); // 25