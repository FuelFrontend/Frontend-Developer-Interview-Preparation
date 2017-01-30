/*
	# Eval - if the argument is an expression then it evaluates expression, else the argument is a statement (can be one or more) then it the executes the statement.

	Note: Before running,
	1. `eval()` dangerous function, make sure you know what you are doing. 
	2. Running eval could affect the user's machine with malicious code.
	3. `eval()` is slow.
	
	## Reference 
	1. http://stackoverflow.com/questions/86513/why-is-using-the-javascript-eval-function-a-bad-idea
	2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
*/

// Example

var x = 10;
var y = 20;

// evaluates the expression
eval("x + y"); // 30

// Adding some statements as string
var str = "if (true) console.log('From eval')";
eval(str); // executes the statement
