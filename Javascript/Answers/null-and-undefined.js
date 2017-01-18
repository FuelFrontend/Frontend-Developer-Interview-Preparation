/*
	# Null - is an assignment value
	
	# Undefined - is when you declare a variable and but value is not yet assigned.

	## Reference 
	1. http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript
	2. http://stackoverflow.com/questions/5101948/javascript-checking-for-null-vs-undefined-and-difference-between-and
*/

// Example
var a; 
console.log(a); // Undefined

var b = null; 
console.log(b); // null

console.log(null == undefined); // true
console.log(null === undefined); // false