function same<T extends string | any[]>(str1: T, str2: T): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter1: Record<string | number, number> = {};
  const frequencyCounter2: Record<string | number, number> = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  return true;
}

console.log(same<string>("rat", "car"));
// console.log(same<string>("anagram", "nagaram"));

function sameFrequency(num1: number[], num2: number[]): boolean {
  // good luck. Add any arguments you deem necessary.
  // const str1=num1.toString();
  // const str2=num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }

  const frequencyCounter1: Record<string | number, number> = {};
  const frequencyCounter2: Record<string | number, number> = {};

  for (let val of num1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of num2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(Number(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[Number(key) ** 2]) {
      return false;
    }
  }

  return true;
}

// console.log(sameFrequency([1,2,3,2],[9,1,4,4]))
console.log(sameFrequency([2, 5, 9, 3], [4, 25, 81, 9]));
