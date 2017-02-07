/*
 	Chaining: repeatedly calling one method on another method in a continuous line of code.

 	Reference:
 	1. http://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/
 	2. https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html
*/ 

// Example in jQuery
$(".container").css("background", "#000").height().fadeIn(fast);

// Example in JS

// Creating a class
var Car = function(name) {
	this.name = name;
	this.model = "";
	this.price = "";
};

// Adding methods to its prototype
Car.prototype.setModel = function(modelName) {
	this.model = modelName;
	return this; // By returning `this`, we can chain our methods
}

Car.prototype.setPrice = function(price) {
	this.price = price;
	return this;
}

Car.prototype.save = function() {
	console.log("Saving the car details...");
	return this;
}

var myCar = new Car("Gokul");
// accessing the methods via chaining
myCar.setModel("Benz").setPrice("1CR").save();

console.log(myCar); // {name: "Gokul", model: "Benz", price: "1CR"}