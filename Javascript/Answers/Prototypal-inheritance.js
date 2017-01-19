/*
	In javascript, most of them are objects (Even functions).
	
	# Points to remember:
	1. In general, inheritance means when an object or class is based on another object or class.
	2. So if say `inheritance` in javascript, then objects inherit from other objects.

	Reference:
	1. https://medium.com/@kevincennis/prototypal-inheritance-781bccc97edb#.h7q4uvxul
	2. https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
*/ 

// Example 1 - Construction function
// Creating a function.
function Cat() {}

// Note: (keep in mind)
// At any time of function creation, that function will have a method called `prototype` (initialized as an empty object).

console.log(typeof Cat.prototype); // object

// By using `new()` keyword, we can create an instance of Cat()
// This is called as constructor function.
var myCat = new Cat();
// So `myCat` doesn't do anything. Its just a cat. So lets add a method.

// Example 1.1 - Adding method to `Cat()` function's prototype object
Cat.prototype.meow = function() {
	console.log("Meow!!");
};

var myCat2 = new Cat(); // one more instance of Cat()

console.log(myCat.meow()); // Meow!!
console.log(myCat2.meow()); // Meow!!
// Note: (keep in mind)
// So by placing a method in `Cat()` function's prototype. We made it available for all the instance of `Cat()`

// Note: (keep in mind)
// this doesn't mean `meow()` method is copied from 'Cat()' to `myCat` or `myCat2`, instead they looks up to its parent's prototype (in our case its Cat()) via invisible link (__proto__).

// More explanation for example
// 1. Javascript will look for `meow()` method, when you call it from `myCat` or `myCat2`.
// 2. If its doesn't found it, then Javascript will looks upto its parent's prototype (in our case its Cat()).
// 3. Then it finds and calls `meow()` from Cat() prototype.

// Note: (keep in mind)
// If you noticed, `Cat.prototype.meow` is created after `myCat` instance. Yes, we can modify or extend a class (class means Cat()) even after creating it.

// Example 1.3 - Lets add a method to native `Array` in Javascript
var arr = [1, 2, 3, 4, 5];

// Adding a new method to Array
Array.prototype.duplicate = function() {
	return this.slice(0);
};

var myNewArr = arr.duplicate();
console.log(myNewArr); // [1, 2, 3, 4, 5]

// `arr` variable was created before `duplicate()` method, but still it was able to access `duplicate()` because it available for Array's prototype.

// Example 2 - Inherit method of one Class to another Class
// Class 1
function Class1(name) {
	this.name = name;
}

// Adding a method
Class1.prototype.print = function() {
	console.log(this.name);
}

var myClass2Instance = new Class1("Gokul"); // `this.name` is bound to the created object. That is `Class1("Gokul")`
console.log(myClass2Instance.print()); // Gokul

// Class 2
function Class2(name) {
	this.name = name;
}

// Now lets inherit methods from Class1 to Class2
Class2.prototype = Object.create(Class1.prototype); // Object.create() will create a new object

// Note: Whats happening above line (keep in mind)
// By create a new object of `Class1.prototype` with `Object.create(Class1.prototype)` and assigning it to `Class2.prototype`. 
// We inherited the methods from Class1 to Class2.
// Thats all.

var myClass2Instance = new Class2("Krishh"); // `this.name` is bound to the created object. That is `Class2("Krishh")`
console.log(myClass2Instance.print()); // Krishh
// print() method inherited from Class1
console.log(myClass2Instance.hasOwnProperty("print")); // false, since print() is inherited from Class1.prototype not Class2 method
console.log(Class2.prototype.hasOwnProperty("print")); // false
console.log(Class1.prototype.hasOwnProperty('print')); // true

// Using `getPrototypeOf()` method, we can check from where Class2.prototype inherited from?
console.log(Object.getPrototypeOf(Class2.prototype) === Class1.prototype); // true
