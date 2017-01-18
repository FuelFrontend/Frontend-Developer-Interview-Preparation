# HOISTING

In javscript, `all the variable declaration` happens at the `top of the scope`. Same goes for `function declaration` as well.

## Example 1

```js
console.log(foo); // Undefined
var foo = 10;
console.log(foo); // 10
```

**Above example goes like below**

```js
var foo; // Declaration
console.log(foo); // Undefined
foo = 10; // Initialization (happens at the `execution`)
console.log(foo); // 10
```

## Example 2

```js
// Calling before declaration.
bar(); // Bar
function bar() {
	console.log("Bar");
}
```

**Above example goes like below**

```js
// Function declaration happens at the top
function bar() {
	console.log("Bar");
}
bar(); // Bar
```

#### Reference

- [Initialization of functions and variables](http://javascript.info/tutorial/initialization)