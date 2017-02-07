/*
	sort() - Used to sort an array.
*/ 

// Example 1
var arr = [9, 8, 7, 4, 2, 1, 5];
console.log(arr.sort()); // [1, 2, 4, 5, 7, 8, 9]

// Example 2 

var arr = [10, 20, 30 9, 8, 7, 4, 2, 1, 5];
console.log(arr.sort()); // [1, 10, 2, 20, 30, 4, 5, 7, 8, 9]
// sort method sort alphabetically but not sequentials
// to solve this lets add a callback to sort method and do some operation

// below method will sort sequentially as well
var sortedArr = arr.sort(function (a, b) {
	return a - b;
});

console.log(sortedArr); // [1, 2, 4, 5, 7, 8, 9, 10, 20, 30]

// Example 3 - sorting alphabets
var alphabets = ["a", "y", "v", "b", "d", "c", "i", "h"];
console.log(alphabets.sort()); // ["a", "b", "c", "d", "h", "i", "v", "y"]