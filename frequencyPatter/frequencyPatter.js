function same(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var frequencyCounter1 = {};
    var frequencyCounter2 = {};
    for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
        var val = str1_1[_i];
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (var _a = 0, str2_1 = str2; _a < str2_1.length; _a++) {
        var val = str2_1[_a];
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (var key in frequencyCounter1) {
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
console.log(same("rat", "car"));
// console.log(same<string>("anagram", "nagaram"));
