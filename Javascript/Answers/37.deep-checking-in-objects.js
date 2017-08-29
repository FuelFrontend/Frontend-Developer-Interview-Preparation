/*
	Checking an object whether a property exists or not.

	var obj = {name: "Gokul", age: 21};

	console.log(obj.name); // Gokul
	console.log(obj.location); // undefined

	But if you try to access some property without knowing it exists or not, will result in Uncaught TypeError.
	And javascript will halt the execution of further code.

	// Example
	console.log(obj.location.age); // Uncaught TypeError: Cannot read property 'age' of undefined

	To avoid this error, we have to check in the object where a property exists or not. It can involve many levels.
	This is called `Deep checking`
*/

// Example

// To check if passed value is an object or not
function isObject(obj) {
	return Object.prototype.toString.call(obj) === "[object Object]"
}

// To check if passed value is an array or not
function isArray(obj) {
	return Object.prototype.toString.call(obj) === "[object Array]"
}

function deepCheck(obj, property) {
  if (obj === undefined || obj === null) return;
  // property matches then return true
  if (obj.hasOwnProperty(property)) {
    return true;
  }
  // Iterating obj
  for (var i in obj) {
  	if (obj.hasOwnProperty(i)) {
  		if (isObject(obj[i])) {
  			return deepCheck(obj[i], property); // Recursion
  		}
  		else if (isArray(obj[i])) {
  			return deepCheck(obj[i], property); // Recursion
  		}
  		else if (obj[i] === property) {
  			return true;
  		}
    }
  }
  return false; // property doesn't then return false;
}

// An objec with deep properties
var obj = {
	age: 1,
	name: "Gokul",
	location: {
		city: "Bangalore",
		state: "Karnataka",
		place: [{
			placename: "BTM",
			pincode: 560068,
			shopname: "KFC",
			landmark: "Near HSR Bridge"
		},
		{
			placename: "Silkbarod",
			pincode: 56006,
			shopname: "CoffeeDay",
			landmark: "Near Silkboard Bridge",
			country: "India"
		},
		{
			placename: "Marathalli",
			pincode: 56068,
			shopname: "A2B",
			landmark: "Near Marathalli Bridge"
		}]
	}
};

console.log(deepCheck(obj, "state")); // true
console.log(deepCheck(obj, "placename")); // true
console.log(deepCheck(obj, "shop")); // false
console.log(deepCheck(obj, "country")); // false
