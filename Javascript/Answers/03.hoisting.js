/*
	# Hoisting - All the variable declarations happens at the the top. Same goes for function declaration as well.
	
	## Reference 
	1. https://code.tutsplus.com/tutorials/javascript-hoisting-explained--net-15092
	2. https://www.sitepoint.com/back-to-basics-javascript-hoisting/
	3. http://javascript.info/tutorial/initialization
*/

// Example 1
console.log(foo); // Undefined
var foo = 10;
console.log(foo); // 10

// Above example goes like below
var foo; // Declaration
console.log(foo); // Undefined
foo = 10; // Initialization (happens at the `execution`)
console.log(foo); // 10

// Example 2
// Calling before declaration.
bar(); // Bar
function bar() {
	console.log("Bar");
}

// Above example goes like below
// Function declaration happens at the top
function bar() {
	console.log("Bar");
}
bar(); // Bar