/*
	Callback: is function in javascript which is passed to another function as parameter, then callback function is executed inside another function.

	Reference:
	1. http://dreamerslab.com/blog/en/javascript-callbacks/ 
	2. http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
*/ 

// Example using Jquery
// Click is a function and we are passing a anonymous function in parameter
// So that when click event is triggered, callback is executed to do some work
// Also callback becomes a closure for the click function
$("button").click(function () {
	console.log("Button is clicked.");
});

// Example 1
var arr = [];

// Our callback function
function print(users) {
	console.log(users);
}

// Main function
function getUserNames(options, callback) {
	arr.push(options); // Doing some operation
	callback(options); // calling callback function here
}

getUserNames([{name: "Gokul"}, {name: "Krishh"}], print); // [{name: "Gokul"}, {name: "Krishh"}]

// Example 2 - Callback Hell

function successCallback() {}
function failureCallback() {}
function completeCallback() {}

// In below case, having many callback will result in difficult following the code and in debugging.
// Which is called as `Callback Hell`
$.ajax({
	"https://google.com",
	success: successCallback
	failure: failureCallback
	complete: completeCallback
});

// Example 3 - More Callback Hell
var getUsers = new DB();

// In below, there are so many series of callback and its very difficult to followup and 
// When we get a problem, it is difficult to debug as well.
getUsers(function (err, successGetUsers) {
	getUser(function (err, successGetUser) {
		getUserEmail(function (err, successGetUserEmail) {
			findUserEmailExists(function (err, successUserEmailExists) {
				console.log(successUserEmailExists);
			});
		});
	})
});