
function foo(x, y, ...rest) {
  return x + y + rest.length;
}

console.log(foo(1, 2)); // 3
console.log(foo(1, 2, 3, 4)); // 5

function avg(...rest) {
  let sum = 0;
  for (const i of rest) {
    sum += i;
  }
  return sum / rest.length;
}

console.log(avg(1, 2, 3, 4, 5, 6)); // 3.5
