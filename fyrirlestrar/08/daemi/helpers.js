
console.log(isNaN(1)); // false

console.log(isNaN('a')) // true

console.log(isNaN('1')) ;// false

console.log(isFinite(1)); // true

console.log(isFinite(1 / 0)); // false

console.log(parseInt('0100', 10)); // 100

console.log(parseInt('a100', 10)); // NaN

console.log(parseInt('0100a', 10)); // 100

console.log(parseInt('0100', 2)); // 4

console.log(parseInt('ff', 16)); // 255

console.log(parseFloat('100.123')); // 100.123

console.log(100.66.toFixed(1)); // 100.7
