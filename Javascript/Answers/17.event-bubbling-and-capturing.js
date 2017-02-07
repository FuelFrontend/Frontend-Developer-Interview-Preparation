/*
	Sometimes click event is attached to a `parent element`, somehow the click event is trigged even clicking on the children.
	This is due to event bubbling.

	Event Bubbling: click event from the child to parent.

	Event Capturing: click event from parent to child.

	Example - Event Bubbling : element.addEventListener(function(){}, false); // False by default
	Example - Event Capturing: element.addEventListener(function(){}, true); // event capturing
	
	Reference: 
	1. https://javascript.info/tutorial/bubbling-and-capturing
	2. http://www.w3schools.com/jsref/event_bubbles.asp
*/ 

// Example

/* HTMl
	<div class="parent">
		<div>Child 1
			<div>Child 2
				<div>Child 3</div>
			</div>
		</div>
	</div>
*/

// Example -Event Bubbling

// Adding `click event` handler to `parent element`
document.querySelector(".parent").addEventListener(function () {
	// child 3 --> child 2 --> child 1 --> parent
	console.log(event.bubbles); // true
	console.log(event.target);

	// To stop event bubbling up to parent
	event.stopPropagation();
}, false);

// Example - Event Capturing
document.querySelector(".parent").addEventListener(function () {
	//parent --> child 1 --> child 2 --> child 3
	console.log(event.target);

	// To stop event capturing
	event.stopPropagation();
}, true); // To enable event capturing


