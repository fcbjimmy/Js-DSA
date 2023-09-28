//This function should return the minimal length of a contiguous subarray of which
//the sum is greater than or equal to the integer passed to the function.
//If there isn't one, return 0 instead.

function minSubArrayLen(arr: number[], sum: number): number {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))// 0

// let minLen = Infinity;
// let total = 0;
// let start = 0; //
// let end = 0; //

// 2 iteration
// let minLen = Infinity;
// total=2
// start=0
// end=1

// 3 iteration
// let minLen = Infinity;
// total=5
// start=0
// end=2

// 4 iteration
// let minLen = Infinity;
// total=6
// start=0
// end=3

// 5 iteration
// let minLen = Infinity;
// total=8
// start=0
// end=4

// 6 iteration
// **2nd condition
// minLen=4
// total=6
// start=1
// end=4

// 7 iteration
// minLen=1
// total=10
// start=1
// end=5

// 8 iteration
// **2nd condition
// minLen=5-1=4
// total=10-3=7
// start=2
// end=5

// 9 iteration
// **2nd condition
// minLen=5-2=3
// total=7-1=6
// start=3
// end=5

// 10 iteration
// minLen=3
// total=6+3=9
// start=3
// end=6

// 11 iteration
// **2nd condition
// minLen=3
// total=9-2=7
// start=4
// end=6

// 12 iteration
// **2nd condition
// minLen=2
// total=7-4=3
// start=5
// end=6

// Since start=5 it doesnt fulfill while loop condition
// break
// minLen=2
