function power(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1

console.log(power(2, 2)); // 4
//what is really happening step by step
//1st return 2 * power(2,1)
//2nd                     return 2 * power(2,0)
//3rd                                       coz exponent===0; it returns 1
//4th 1 (3rs step) * 2 (2nd step) * 2 (1st step) = 4

console.log(power(2, 4)); // 16
