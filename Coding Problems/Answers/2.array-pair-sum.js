/*	
	Problem: 
	Given an integer array, output all pairs that sum up to a specific value `x`. 
	Consider the fact that the same number cannot add up to `x` with its duplicates in the array and print the pair only once.

	Example 1: [1, 1, 2, 3, 4] and the desired sum is 4
	Output: is [[1, 3]] not [[1, 3], [3, 1]]

	Example 2: [3, 4, 5, 4, 4] and the desired sum is 8
	Output: is [[3, 5], [4, 4]]
*/ 

function findPairSum(arr, sum) {
	if (arr.length < 1 || sum === undefined) return false;
	var tempArr = [];
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			var sumString = arr[i] + ", " + arr[j];
			if (!obj[sumString] && (arr[i] + arr[j]) === sum) {
				obj[sumString] = true;
				tempArr.push([arr[i], arr[j]]);
			}
		}
	}
	return tempArr;
}

// Example
findPairSum([3, 4, 5, 4, 4], 8); // [[3, 5], [4, 4]]
findPairSum([3, 4, 5, 6, 7], 10); // [[3, 7], [4, 6]]
findPairSum([1, 1, 2, 3, 4], 4); // [[1, 3]]
//  Complexity: O(n²) of above solution

// Problem 2 - Optimize the above solution to O(n)

function findPairSumOptimized(arr, x) {
  var temp = [];
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var sum = x - arr[i];
    if (obj[sum] === false) {
      temp.push([arr[i], sum]);
      obj[sum] = true;
    }

    if (!obj[sum]) {
      obj[arr[i]] = false;
    }
  }
  return temp;
}

findPairSum([3, 4, 5, 6, 7], 10); // [[6, 4], [7, 3]]
//  Complexity: O(n) of above solution