function mergeSort(array) {
  let leftPointer = 0;
  let middlePointer = Math.floor(array.length / 2);
  let rightPointer = array.length - 1;
  let leftArray = [];
  let rightArray = [];

  // base case
  if (array.length > 1) {
    for (let i = leftPointer; i < middlePointer; i++) {
      leftArray.push(array[i]);
    }

    for (let i = middlePointer; i <= rightPointer; i++) {
      rightArray.push(array[i]);
    }

    // keep running of merge until the array length is less 2
    mergeSort(leftArray);
    mergeSort(rightArray);
    // merge the two array of left and right until the end of array
    merge(leftArray, rightArray, array);
  }

  return array;
}

// this function merges two divided of arrays and sort them accordingly
function merge(leftArray, rightArray, array) {
  // counter for pushing
  let leftPointer = 0;
  let rightPointer = 0;
  let arrayPointer = 0;

  //  runs until one of the arrays is false
  while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
    // replace element of array that is lower than those two array
    if (leftArray[leftPointer] < rightArray[rightPointer]) {
      array[arrayPointer] = leftArray[leftPointer];
      leftPointer++;
    } else {
      array[arrayPointer] = rightArray[rightPointer];
      rightPointer++;
    }
    arrayPointer++;
  }

  //   if there are leftover items of the left array continue pushing items on original array
  while (leftPointer < leftArray.length) {
    array[arrayPointer] = leftArray[leftPointer];
    leftPointer++;
    arrayPointer++;
  }
  //   if there are leftover items of the right array continue pushing items on original array
  while (rightPointer < rightArray.length) {
    array[arrayPointer] = rightArray[rightPointer];
    rightPointer++;
    arrayPointer++;
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

console.log(mergeSort([105, 79, 100, 110]));
