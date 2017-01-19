/*
	IIFE - Immediately Invoked Function Expression is invoked when JS interpreter reaches this function.
	
	Anonymous function - is a function without a name. 

	Reference:
	1. http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
	2. http://stackoverflow.com/questions/1140089/why-do-you-need-to-invoke-an-anonymous-function-on-the-same-line
*/ 

// Example - IIFE

(function () { 
	console.log("IIFE");
})();

// logs - IIFE

// Example - Anonymous function

var foo = function() {
	console.log("I am anonymous assigned to a variable");
};

foo(); // I am anonymous assigned to a variable