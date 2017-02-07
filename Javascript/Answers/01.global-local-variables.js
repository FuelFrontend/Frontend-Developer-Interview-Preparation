/*
	# Global variable - scope of this variable is throughout the application

	# Local variable - scope of this variable is available only in a particular place such as inside a fucntion.

	## Reference 
	1. http://www.dotnettricks.com/learn/javascript/understanding-local-and-global-variables-in-javascript
	2. https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
*/

// Example

var global = "Global"; // Global variable

function foo() {
	var local = "Local"; // Local variable
	console.log(local); // Local
	// Global variable
	console.log(global); // Global
}

// Global variable
console.log(global); // Global

foo(); // Calling `foo` function