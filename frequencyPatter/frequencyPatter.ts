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
