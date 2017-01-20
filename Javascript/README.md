# Javascript

> Contains basic and advanced questions

- [x] Hoisting

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


- [x] Closure

  > Closure is when a function 'remembers' its lexical scope even when the function is executing outside that lexical scope. ~ Kyle Simpson

  A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains:
    - It has access to its own scope (variables defined between its curly brackets)
    - It has access to the outer function’s variables
    - It has access to the global variables

  The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.

  ```js
  var pizza = function() {
    var crust = "thin";
    var toppings = 3;
    var hasBacon = true;

    var getToppings = function() {
      return toppings;
    }

    var pizzaInfo = {};
    pizzaInfo.getToppings = getToppings;

    return pizzaInfo;
  }

  var pizzaA = new pizza();

  pizzaA.getToppings(); // returns 3
  ```

  - Closures are useful in hiding the implementation of functionality while still revealing the interface
  - Closure is one way of supporting first-class functions; it is an expression that can reference variables within its scope (when it was first declared), be assigned to a variable, be passed as an argument to a function, or be returned as a function result.

  More Details: [Link](http://javascriptissexy.com/understand-javascript-closures-with-ease/)


- [x] - Bind

  The bind() method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

  The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular this value.

  ```js
  this.x = 9;    // this refers to global "window" object here in the browser
  var module = {
    x: 81,
    getX: function() { return this.x; }
  };

  module.getX(); // 81

  var retrieveX = module.getX;
  retrieveX();   
  // returns 9 - The function gets invoked at the global scope
  // New programmers might confuse the
  // global var x with module's property x

  // Create a new function with 'this' bound to module
  var boundGetX = retrieveX.bind(module);
  boundGetX(); // 81
  ```

  References
  1. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
  2. http://stackoverflow.com/questions/2236747/use-of-the-javascript-bind-method

- [ ] - Scope in JS
- [ ] - Call and Apply
- [ ] - How this works?
- [ ] - Diff between null and undefined?
- [ ] - Diff between DOMContentLoaded and onload?
- [ ] - Data types in JS
- [ ] - === vs == and Type casting
- [ ] - Eval()
- [ ] - Prototypal inheritance
- [ ] - How to create native methods in JS ([].duplicate())
- [ ] - Event delegation
- [ ] - Event Bubbling
- [ ] - IIFE, Anonymous Function
- [ ] - Global, Local Variables
- [ ] - Diff between {} and new Object()
- [ ] - JSOP
- [ ] - Ajax
- [ ] - XML HTTP Request
- [ ] - Use Strict
- [ ] - Event Loop
- [ ] - What is Function Declaration and Definition?
- [ ] Javascript Function Parameters, Arguments, Argument Objects
- [ ] - How do you find an variable is Array or not?
- [ ] - DOM API’s and operations.
- [ ] - Geolocation
- [ ] - Web Workers
- [ ] - Service Workers
- [ ] - CROS and Same origin policy
- [ ] - SetTimeout in for-loop
- [ ] - For-in Loop
- [ ] - OO programming in JS
- [ ] - How do you create private methods
- [ ] - Design patters (Singleton, Modular etc,)
- [ ] - Chaining in js similar to Jquery
- [ ] - Curing in JS
- [ ] - Associative Array
- [ ] - Execution Context
- [ ] - Callbacks
- [ ] - Promises
- [ ] - Callback vs Promise
- [ ] - InstanceOf(), Typeof()
- [ ] - Cloning an object
- [ ] - Cloning an array
- [ ] - Deep checking in object
- [ ] - Sorting abc in array ([1,11,12,21,2,3])
- [ ] - Pass by value or reference (string, number, boolean, array, objects)

# ES6

- [ ] - What is ES6 and ECMA ?
- [ ] - New features of ES6?

Reference:

- [H5BP](https://github.com/h5bp/Front-end-Developer-Interview-Questions#css-questions)
- [Medium](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.iybw0vavi)
- [JS Interview Questions](https://github.com/gokulkrishh/js-interview-questions)
- [Codementor](https://www.codementor.io/javascript/tutorial/21-essential-javascript-tech-interview-practice-questions-answers)
- [Site Point](https://www.sitepoint.com/5-javascript-interview-exercises/)
- [123 Essential JavaScript](https://github.com/nishant8BITS/123-Essential-JavaScript-Interview-Question)
- [JS Dude](http://www.thatjsdude.com/interview/js2.html)
- [JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden/)
