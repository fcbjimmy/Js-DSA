function maxSubarraySum(arr: number[], num: number): number | null {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < num) {
    return null;
  }

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    // console.log(arr[i])
    tempSum = tempSum - arr[i - num] + arr[i];
    // console.log(tempSum)
    maxSum = Math.max(tempSum, maxSum);
  }

  console.log(maxSum);

  return maxSum;
}
