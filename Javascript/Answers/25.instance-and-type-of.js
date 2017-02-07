/*
	InstanceOf - method is used to check a variable is of particular instance

	TypeOf - method is to used to get a variable type.
*/ 

// Example 1 - instanceOf
function Foo() {}

var myFunz = new Foo();

console.log(myFunz instanceof Foo); // True

// Example 2 - typeof
var name = "Gokul";
var age = 25;

console.log(typeof name); // string
console.log(typeof age); // number
