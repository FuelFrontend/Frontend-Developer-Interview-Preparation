/*
	use strict: is way to telling the JS engine to interpret the code in strict mode.

	Reference:
	1. http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
	1. http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
*/ 

// Example 1 - non strict mode
var bar = 011; // (octal literal) and non-strict mode takes this a value 9 (in base of 10)

// Example 2 - strict mode throughout the file
"use strict"; // Top
var foo = 100;
var bar = 011; // Uncaught SyntaxError: Octal literals are not allowed in strict mode.

// Example 2 - inside a function
(function(){
  "use strict";
  x = 1; // Uncaught ReferenceError: x is not defined
})();