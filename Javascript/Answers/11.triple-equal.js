/*
	# === - triple equal to operator is same as double equal to operator except it will only check for equality (no type conversion).

	# Truth table - https://dorey.github.io/JavaScript-Equality-Table/
	
	## Reference 
	1. http://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons?answertab=active#tab-top
	2. https://appendto.com/2016/02/vs-javascript-abstract-vs-strict-equality/
*/

// Examples using Number and String

console.log(0 === ""); // false

console.log(0 === "0"); // false

console.log(0 === 0); // true

console.log(1 === true); // false & same goes for in reverse

console.log(1 === 1); // true

console.log(-1 === "-1"); // false

console.log(-1 === -1); // true

// Examples using Array
console.log([1] === true); // false

console.log([] === true); // false

var arr1 = [1];
var arr2 = [2];

console.log(arr1 === arr2); // false

console.log([0] === true); // false

console.log([0] === false); // false

console.log([[]] === false); // false

console.log([1,2,3] === "1,2,3"); // false

// Examples using Object
var obj1 = {a: 1};
var obj2 = {a: 1};

console.log(obj1 === obj2); // false

console.log(undefined === null); // false

console.log("xyz" === new String("xyz")); // false

console.log(typeof "xyz"); // string

console.log(typeof new String("xyz")); // object