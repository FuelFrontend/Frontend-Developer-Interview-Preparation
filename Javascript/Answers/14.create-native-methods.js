/*
	Native Method: like map, filter are from the Array which are built-in methods. 

	How to add native methods:

	1. Add a method to a Data type's prototype.
	2. It will be available throughout the application
*/ 

// Example - extending a method in Array
Array.prototype.duplicate = function() {
	return this.slice(0);
};

console.log([1,2,3].duplicate()); // [1,2,3]

// Example - extending a method in String

String.prototype.isPalindrome = function() {
	return this.replace(/[^A-Z0-9]/ig, "").toLowerCase() === this.split("").reverse().join("");
};

console.log("madam".isPalindrome()); // true
console.log("str".isPalindrome()); // false