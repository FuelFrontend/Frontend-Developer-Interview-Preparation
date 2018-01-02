function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

selectionSort([2, 7, 4, 1, 8, 9, 111, 9, 11, 5, 3]); // Time Complexity = O(n^2)

// Reference
// 1. https://www.youtube.com/watch?v=GUDLRan2DWM
