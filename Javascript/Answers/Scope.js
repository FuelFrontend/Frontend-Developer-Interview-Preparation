/*
	# Scope - Refers to the current context of the code and Javascipt has 2 types of scope. Global & Local (Block level is in ES6) 

		**But we can name it like**
			1. Global 
			2. Local
			3. Function
			4. Lexical (closure) or Static
			5. Private & Public
	
	## Reference 
	1. http://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript
	2. https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/

*/

// Example 1 - Global Scope
var a = "Global"; // Global scope
console.log(a); // Global

// Example 2 - Local Scope
function funz() {
	var b = "Local"; // Local scope, avaiable only inside the function
	return b;
}

console.log(funz()); // Local
console.log(b); // Uncaught ReferenceError: b is not defined

// Example 3 - Function Scope
// New functions = new scope (keep in mind)

// Scope A
function A() {
	//Scope B
	function B() {
		//Scope C
		function C() {
			// Scope D
		}
	}
}

// Example 4 - Lexical or Closure Scope
// Scope A
function parent() {
	// Scope B
	var a = 10;
	function child(b) {
		// Scope C
		// a is accessible here
		console.log(a + b); // 30
	}
	child(20);
}

// Lexical scope means any variables defined in parent scope can be accessed by its child functions
parent(); // Logs 30

// Example 5 - Private & Public
// Private methods & variables
(function () {
	// Private methods and variables
	var foo = 1;
	function A() {
		console.log(foo); // 1
	}
	A();
})();

A(); // Uncaught ReferenceError: A is not defined
console.log(foo); // Uncaught ReferenceError: foo is not defined

// Public methods & variables
var A = (function () {
	var foo = 1;
	var myFunz = function() {
		console.log(foo);
	}

	// Exposing the private method and variable to become public
	return {
		foo: foo,
		myFunz: myFunz
	};
})();

console.log(A.foo); // 1
console.log(A.myFunz()); // 1