/*
	Private Methods: In javascript, we can create private methods and variables by wrapping it in a self executing anonymous function. 	
*/ 

// Example

var myPrivateFunz = (function () {
	function myPrivateFunz(a, b) {
		this.a = a;
		this.b = b;

		// Private method
		return doSomething(this);
	}

	function doSomething(self) {
		return self.a + self.b;
	}

	return myPrivateFunz;
})();