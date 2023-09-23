/*
  Write a function that sorts the array without using built in functions.

  Pseudocode:

  1. Start looping from with a variable called i in the end of the array towards the beginning.
  2. Start an inner loop with a variable called j from the beginning until i - 1
  3. If the current element of j is greater than the current element of j + 1, swap those two values.
  4. Return the sorted array.

  Example procedure:

  [37, 45, 29, 8] i = 8 j = 37
  is 37 greater than 45 no.
  increment j
  j = 45
  is 45 greater than 29. Yes then we swap it so the array would look like [37, 29, 45, 8]
  increment j
  j = 45
  is 45 greater than 8. Yes then we swap it so the array now would look like [37, 29, 8, 45]
  Now the first phase of j is complete so we decrement i.

  i = 8
  j = 37
  is 37 greater than 29. Yes then we swap it so the array now would look like [29, 37, 8, 45]
  increment j
  j = 37
  is 37 greater than 8. Yes then we swap it so the array now would look like [29, 8, 37, 45]
  increment j
  j = 37
  is 37 greater than 45. No
  Second phase of j is now complete so we decrement i
  
  i = 8
  j = 29
  is 29 greater than 8. Yes then we swap it so the array now would look like [8, 29, 37, 45]
  Third phase of j is now complete so i now reached the first element
  Done.

  // because of for (let j = 0; j < i - 1; j++) we are not sorting the undefined values
*/

//optimized
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));
