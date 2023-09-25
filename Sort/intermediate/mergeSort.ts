function merge(arr1: number[], arr2: number[]): number[] {
  //compare arr1[0] with arr2[0]
  //whichever is smaller, push it to the empty array
  //shift pointer of the arr which just had one element pushed to the right
  //whenever one array is exhausted, take the other array's remaining values and pushed to the empty array
  const empty: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      empty.push(arr2[j]);
      j++;
    } else {
      empty.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    empty.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    empty.push(arr2[j]);
    j++;
  }
  return empty;
}

// Recrusive Merge Sort
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 76, 73]);
