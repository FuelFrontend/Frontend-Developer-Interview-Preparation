# Analysis of algorithms

To measure the efficiency of an algorithm not by the constraint of a machine (Low config or High config machine)

## [Asymptotic Analysis](https://en.wikipedia.org/wiki/Analysis_of_algorithms)

Best way to analyse an algorithm.

3 cases for analysing an algorithm

1. Worst Case
2. Best Case
3. Average Case

### Worst Case

Calculating the upper bound of an algorithm, we can find the worst case.

```js
var arr = [1, 2, 5, 10, 23, 35, 40, 50];

function linearSearch(arr, x) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1; //If element is not found
}

linearSearch(arr, 40); //return 6
```

Worst case for the `Linear Search` is

`Time Complexity = O(n)`

### Best Case

Calculating the lower bound of an algorithm. That is we found the searching element in first try itself.

```js
var arr = [1, 2, 5, 10, 23, 35, 40, 50];

linearSearch(arr, 1); //return 0
```

`Time Complexity = O(1)`

### Average Case

Is by taking all the inputs and computing the time for all the inputs (including the element is not present in the array).

```js
var arr = [1, 2, 5, 10, 23, 35, 40, 50];

linearSearch(arr, 1000); //return -1
```

`Time Complexity = O(n)`


#### Reference

1. [Introduction to algorithms](https://www.youtube.com/watch?v=JPyuH4qXLZ0)

1. [Geeksforgeeks](http://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/)
