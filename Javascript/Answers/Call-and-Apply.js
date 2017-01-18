/*
	# Call - method to set `this` context and invoked immediately. Arguments are passed as comma seperate
	
	// Example for call() method
	function funz(a, b, c) {}
	funz.call(this, 1, 2, 3); // invokes immediately

	# Apply - method is similar to `call()` except arguments are passed as an Array.

	// Example for apply() method
	function funz(a, b, c) {}
	funz.apply(this, [1, 2, 3]); // invokes immediately
	
	## Reference 
	1. http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply
	2. https://hangar.runway7.net/javascript/difference-call-apply
*/

// Example for call()
var obj = {
	name: "Call"
};

function funz(a, b, c) {
	return a + b + c + this.name;
}

console.log(funz.call(obj, 1, 2, 3)); // 6Call

// Example for apply()
var obj = {
	name: "Apply"
};

function funz(a, b, c) {
	return a + b + c + this.name;
}

console.log(funz.apply(obj, [1, 2, 3])); // 6Apply