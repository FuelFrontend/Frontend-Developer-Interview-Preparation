/*
	for-in loop: is used to iterate the objects

	Reference:
	1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
*/ 

// Example

var obj = {
	name: "Gokul";
	age: 25
};

for (var i in obj) {
	console.log(obj[i]); // will print the properties
	// Except if check's in its prototype as well. 
	// to avoid it we can use `hasOwnProperty()` method 
	if (obj.hasOwnProperty(i)) {
		console.log(obj[i]); // will only print `obj` property
	}
}