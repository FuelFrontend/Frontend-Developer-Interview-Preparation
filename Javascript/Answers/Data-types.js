/*
	DataTypes - is a classfication of data which helps compiler or interpreter to determine how it intends to use the data

	5 primitive datatypes:
		1. Number
		2. String
		3. Boolean
		4. Null
		5. Undefined

	Others datatypes:
		1. Object
		2. Array
		3. Function

	Note: Using `typeof` method we can determine a variables datatype, but some datatypes are treat as objects (null, array, object).
	
	Reference:
	1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
	2. http://stackoverflow.com/questions/1288594/what-are-javascript-data-types
*/

// Examples
// 1. Number
var foo = 1; // No specific types such as double etc, Just number.
var bar = 1.1; // Floating number but still data type is number

console.log(typeof foo); // number
console.log(typeof bar); // number

// But if you use Number() constructor, typeof method will return `object`
var foo = new Number(1);
console.log(typeof bar); // object

// 2. String
var foo = "Gokul"; 
var bar = 'Krishh'; 

console.log(typeof foo); // string
console.log(typeof bar); // string

// Similar to Number() contructor, String() contructor return the same.
var bar = new String("bar");
console.log(typeof bar); // object

// 3. Boolean
var foo = true;
var bar = false;

console.log(typeof foo); // boolean
console.log(typeof bar); // boolean

// 4. Undefined
var foo; 
var bar = undefined;
// Above both are same

console.log(typeof foo); // undefined
console.log(typeof bar); // undefined

// 5. Null
var foo = null; // object, weird but it is treat a object in javascript :P 

// 6. Objects
var obj = {
	a: 1, 
	b: 2
};

console.log(typeof obj); // object

// 7. Arrays
var arr1 = new Array();
arr1.push(1);
arr1.push(2);
arr1.push(3);

var arr2 = [1, 2, 3];

console.log(typeof arr1); // object
console.log(typeof arr2); // object

// 8. Functions
// Function declaration
function foo() {}

// Function expression
var bar = function() {};

console.log(typeof foo); // function
console.log(typeof bar); // function
