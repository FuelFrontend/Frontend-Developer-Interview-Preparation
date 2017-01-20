/*
	Object are pass by reference so by mistake a reference value is changed, value will be changed in source as well.

	Cloning an object: copy the source of an object as new object
*/ 

// Example 1 - cloning only object's property
var obj = {name: "Gokul", age: 25};

// Creating a native cloning method
Object.prototype.clone = function() {
	var newObj = {};
	for (var i in this) {
		// Checking i is property of cloning object only
		if (this.hasOwnProperty(i)) {
			newObj[i] = this[i];
		}
	}
	return newObj;
};

var myNewObj = obj.clone();
myNewObj.age = 100; // changing the value of cloned object

console.log(myNewObj); // {name: "Gokul", age: 100}
console.log(obj); // {name: "Gokul", age: 25} - source remains the same