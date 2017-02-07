/*	
	pass by value - means value being passed cannot be changed to difference value

	pass by reference - means if a value of reference is changed, then it will be changed in value of source as well.

	Primitive types are pass by value
	1. Number
	2. String
	3. Boolean

	Other types such are pass by reference
	1. Array
	2. Objects
*/ 

// Example - pass by value
// Strings
var str = "A";
var str1 = str;
str1 = "B"; // Changing value in reference
console.log(str1); // B
console.log(str); // A - remain the same

// Number
var num = 1;
var num1 = num;
num1 = 2; // Changing value in reference
console.log(num1); // 2
console.log(num); // 1 - remain the same

//Boolean
var bool = true;
var bool1 = bool;
bool1 = false; // Changing value in reference
console.log(num1); // false
console.log(num); // true - remain the same

// Example - pass by reference
// Array
var arr = [1, 2, 3];
var arr1 = arr;
arr1.push(4);  // Changing value in reference
console.log(arr1); // [1, 2, 3, 4]
console.log(arr); // [1, 2, 3, 4] - value changed in source as well

// Object
var obj = {name: "Gokul", age: 25};
var obj1 = obj;
obj1.age = 100; // Changing value in reference
console.log(obj1); // {name: "Gokul", age: 100}
console.log(obj); // {name: "Gokul", age: 100} - value changed in source as well