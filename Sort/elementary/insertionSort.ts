function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]; //1,2,9,76,0 arr[4]/currentVal=0
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(i, j, arr[i], arr[j]);
      arr[j + 1] = arr[j];
      index = j;
      console.log(arr);
    }
    // console.log('how Array is looking:',arr)
    arr[index] = currentVal;
    // console.log('how Array is looking after:',arr)
  }

  return arr;
}

// console.log(insertionSort([34,22,10,19,17]))
console.log(insertionSort([2, 1, 9, 76, 0]));
