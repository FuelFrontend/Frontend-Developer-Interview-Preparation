/*
	Array are pass by reference so by mistake a reference value is changed, value will be changed in source as well.

	Cloning an array: copy the source of an array as new array
*/ 

// Example
var arr = [1, 2, 3, 4];

Array.prototype.clone = function() {
	return this.slice(0);
};

var arr2 = arr.clone();
arr2.push(5);

console.log(arr2); // [1, 2, 3, 4, 5] - changed
console.log(arr1); // [1, 2, 3, 4] - same