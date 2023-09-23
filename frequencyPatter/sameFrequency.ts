function sameFrequency(arg1: number, arg2: number): boolean {
  // good luck. Add any arguments you deem necessary.
  const numberStr1 = arg1.toString();
  const numberStr2 = arg2.toString();

  //create object to store
  const frequencyCounter1: Record<string | number, number> = {};
  const frequencyCounter2: Record<string | number, number> = {};

  //loop through numberStr1 and store the frequency of each number in frequencyCounter1
  for (let val of numberStr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  //loop through numberStr1 and store the frequency of each number in frequencyCounter2
  for (let val of numberStr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // console.log(frequencyCounter1);
  // console.log(frequencyCounter2);

  //check if there is same key from frequencyCounter1 in frequencyCounter2 and
  //if the keys match then check if the frequency are the same
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
