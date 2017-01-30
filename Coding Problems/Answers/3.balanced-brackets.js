/*
	Problem:  A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
	Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. 
	
	There are three types of matched pairs of brackets: 
		[], {}, and ().

	A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. 

	For example: 
	{[(])} is not balanced because the contents in between { and } are not balanced. 
	The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

	By this logic, we say a sequence of brackets is considered to be balanced if the following conditions are met:
		1. It contains no unmatched brackets.
		2. The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
*/ 

function findBalancedBrackets(str) {
	var arr = str.split("").sort(); // To sort the brackets
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) { 
			var bracket = arr[i] + arr[j];
			if (bracket === "()" || bracket === "{}" || bracket === "[]") {
				obj[i] = true;
				obj[j] = true;
				i = j + 1; // if both brackerts match, then set i to j + 1
				j = i; // and j to i, so that j++ to move next to i
			}
			else {
				return "NO";
			}
		}
	}
	return "YES";
}

findBalancedBrackets("{[(]))}"); // No
findBalancedBrackets("{[(])}"); // YES
//  Complexity: O(n²) of above solution