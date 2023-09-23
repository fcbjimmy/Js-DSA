function countUniqueValues<T>(arr: T[]): number {
  //create two pointers pointer1 and pointer2
  let pointer1 = 0;
  let pointer2 = 1;
  let num = 0;
  if (arr.length < 1) {
    return num;
  }

  //compare pointer1 to pointer2 if pointer1===pointer2, move pointer2
  for (let i = 0; i < arr.length; i++) {
    if (arr[pointer1] === arr[pointer2]) {
      pointer2++;
    } else {
      //compare pointer1 to pointer2 if pointer1!==pointer2, move pointer1 and change arr[pointer1] to arr[pointer2] and move pointer2
      pointer1++;
      arr[pointer1] = arr[pointer2];
      if (i < arr.length - 1) pointer2++;
    }
    //when pointer2 reaches the end of the array, then assign the
    if (i === arr.length - 1) {
      num = pointer1;
    }
  }
  //when j reaches the end of the array return i + 1, it will give the unique value
  return num;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// 7
console.log(countUniqueValues([]));
// 0
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
// 4
