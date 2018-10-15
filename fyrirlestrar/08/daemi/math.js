
console.log(Math.PI); // 3.141592653589793

console.log(Math.E); // 2.718281828459045

console.log(Math.cos(Math.PI)); // -1

console.log(Math.log(Math.E)); // 1

console.log(Math.max(1, 5, 3)); // 5

console.log(Math.min(1, 5, 3)); // 1

console.log(Math.floor(1.5)); // 1

console.log(Math.ceil(1.5)); // 2

console.log(Math.round(1.5)); // 2

console.log(Number.isInteger(1)); // true

console.log(Number.isInteger(1.5)); // false

console.log(Number.MAX_VALUE); // einhver mjög há tala

// Þar sem við höfum ekki fullkomna nákvæmni í brotum er 0.1 + 0.2 ekki jafnt 0.3
console.log(0.1 + 0.2 === 0.3); // false

// Þurfum að bera saman við "epsilon" gildi
// færum yfir jafnaðarmerki og athugum hvort algildi útkomu sé minni en epsilon
console.log(Math.abs(0.3 - (0.1 + 0.2)) < Number.EPSILON); // true
