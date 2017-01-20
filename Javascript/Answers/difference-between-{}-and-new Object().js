/*
	new Object(): is a way of creating a object using contructor.

	{}: is short cut for new Object();

	Reference: 
	1. http://stackoverflow.com/questions/4597926/what-is-the-difference-between-new-object-and-object-literal-notation

*/ 

// Example - new Object;

var myObj = new Object();
myObj.name = "Gokul";
myObj.age = 25;

// Example - {} object literal

var myObj = {
	name: "Gokul",
	age: 25
};
// Short is more convenient and good practice 