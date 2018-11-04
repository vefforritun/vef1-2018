
function foo(x, g) {
  return x + g();
}
foo(1, () => 2);
// 3

function add(a = 0, b = 0) {
  return a + b;
}

console.log(add()); // 0
console.log(add(1)); // 1
console.log(add(1, 2)); // 3

function avg() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

console.log(avg(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
