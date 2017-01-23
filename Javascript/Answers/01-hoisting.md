### Hoisting

A variable **declaration** lets the system know that the variable exists while **definition** assigns it a value.

Variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.

Just remember, variable declarations and function definitions are hoisted to the top. Variable definitions are not, even if you declare and define a variable on the same line.

```js
function doTheThing() {
  // ReferenceError: notDeclared is not defined
  console.log(notDeclared);

  // Outputs: undefined
  console.log(definedLater);
  var definedLater;

  definedLater = 'I am defined!'
  // Outputs: 'I am defined!'
  console.log(definedLater)

  // Outputs: undefined
  console.log(definedSimulateneously);
  var definedSimulateneously = 'I am defined!'
  // Outputs: 'I am defined!'
  console.log(definedSimulateneously)

  // Outputs: 'I did it!'
  doSomethingElse();

  function doSomethingElse() {
    console.log('I did it!');
  }

  // TypeError: undefined is not a function [Because functionVar is a variable]
  functionVar();

  var functionVar = function() {
    console.log('I did it!');
  }
}
```

To make things easier to read

- Declare all of your variables at the top of your function scope so it is clear which scope the variables are coming from.
- Define your variables before you need to use them.
- Define your functions at the bottom of your scope to keep them out of your way.
