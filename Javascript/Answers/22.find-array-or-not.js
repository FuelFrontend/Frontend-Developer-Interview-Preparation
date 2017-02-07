/*
	Find array or not: if you noticed, in javascript `typeof` will give object for an [1,2,3]. Because JS treats array as object in a way.

	Multiple ways to find a variable is array or not:
	1. checking a variable is instanceof Array
	2. comparing variable.constructor is an Array
	3. using Array.isArray();

	Reference:
	1. http://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript
*/ 

// Example 1
var arr = [1];
console.log(arr instanceof Array); // true

var arr = {};
console.log(arr instanceof Array); // false

// Example 2
var arr = [1];
console.log(arr.constructor === Array); // true

var arr = {};
console.log(arr.constructor === Array); // false
console.log(arr.constructor === Object); // true

// Example 3
var arr = [1];
console.log(Array.isArray(arr)); // true

// Example 4
var arr = [1];
console.log(Object.prototype.toString.call(arr) === "[object Array]"); // true
