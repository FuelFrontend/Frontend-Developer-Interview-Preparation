/*
	Anagram: A word or a pharse can be formed by rearranging the letters of another word or pharse

	Problem 1:

	Write a function that accepts two parameters, word1 and word2 which will be a strings. 
	Determine the word2 is anagram of the word1.

	Problem 2:
	Write a function that accepts one parameter, array of words as string. 
	Determine the number of anagram present and return also list the anagrams.
*/ 

// Problem 1
// To detect 2 words are anagram or not
function anagram(word1, word2) {
	// Check if wording lengths are not same then return false
	if (word1.length !== word2.length) return false;

	// remove whitespace > lowercase > array > sorting > word
	var word1 = word1.replace(/\s/g, "").toLowerCase().split("").sort().join("");
	var word2 = word2.replace(/\s/g, "").toLowerCase().split("").sort().join("");

	// If both the words are same, then its anagram
	if (word1 === word2) return true

	// else its not a anagram
	return false;
}

// Problem 2
// To detect an array of words and group them accordingly
function anagramAll(arrOfWords) {
	var obj = {};
	for (var i = 0; i < arrOfWords.length; i++) {
		// remove whitespace > lowercase > array > sorting > word
		var word = arrOfWords[i].replace(/\s/g, "").toLowerCase().split("").sort().join("");
		// Checking temp obj has word, if not create an array inside obj
		if (!obj.hasOwnProperty(word)) {
			obj[word] = [];
		}
		obj[word].push(arrOfWords[i]); // push the words to anagram accordingly
	}
	return obj;
}