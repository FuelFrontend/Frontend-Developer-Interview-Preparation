/*
	# Event Delegation - Allow us to add event listener to parent element, instead of each individual child elements.

	
	## Reference 
	1. https://davidwalsh.name/event-delegate
	2. http://stackoverflow.com/questions/1687296/what-is-dom-event-delegation
	
*/

// Example HTML

/* 
	<div class="parent"> 
		<span>Child 1</span>
		<span>Child 2</span>
		<span>Child 3</span>
		<span>Child 4</span>
		<span>Child 5</span>
		<span>Child 6</span>
		<span>Child 7</span>
		<span>Child 8</span>
		<span>Child 9</span>
		<span>Child 10</span>
	</div>
*/

// Example JS
var parentElement = document.querySelector(".parent");

// Adding click event listener to parent
parentElement.addEventListener("click", function(event) {
	console.log(event.target); // gives you the clicked element

	// Check current clicked element is span or not
	if (event.target.matches("span")) {
		console.log("Span element is clicked");
	}
});