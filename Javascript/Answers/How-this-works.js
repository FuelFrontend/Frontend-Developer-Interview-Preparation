/*
	# this - When a function executes, it gets `this`. `this` is a value of the object which invokes the function.

	Note: When using `use strict`, `this` is undefined for global function. It doesn't bound to any object in anonymous function.

	## Reference 
	1. http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
	2. http://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work
*/

// Example 1
// An object with name, age & a method to print its Name and Age.

var name = "Gokul Global";
var age = "25 Global";

function print() {
	return "Name: " + this.name + " Age: " + this.age;
}

var myObj = {
	name: "Gokul",
	age: 25,
	print: function() {
		return "Name: " + this.name + " Age: " + this.age;
	}
};

// Here we are invoking using `window` so it points to the global function which has this.name & this.age in global
console.log(window.print()); // Name: Gokul Global Age: 25 Global

// Here we are invoking `myObj` which has its own name and age.
console.log(myObj.print()); // Name: Gokul Age: 25

// New Object with diff name & age
var newObj = {
	name: "New Obj",
	age: 1
};

// Using `Bind` method we can change the context of `this`
var myBindFunz = myObj.print.bind(newObj);
console.log(myBindFunz()); // Name: New Obj Age: 1

var myBindGlobalFunz = window.print.bind(newObj);
console.log(myBindGlobalFunz()); // Name: New Obj Age: 1

// Example 2 - Jquery
/* HTML
	<button>Button 1</button>
	<button>Button 2</button>
	<button>Button 3</button>
*/

// Attaching the click event to the above buttons
$(button).on("click", function () {
	console.log($(this).text()); // $(this) depends on the which button invokes the click event.
});

// Example 3 - ofcourse, you can use call() & apply()

var newObj2 = {
	name: "New Obj 2",
	age: 2
};

// Apply() - Inkoves automatically
console.log(myObj.print.apply(newObj2)); // Name: New Obj 2 Age: 2

// Call() - Inkoves automatically
console.log(myObj.print.call(newObj2)); // Name: New Obj 2 Age: 2
