function add(x, y) {
  // sum fer hér í global scope!
  sum = x + y;
  return sum;
}

add(1, 2); // 3

console.log(sum); // 3

var sum = 5;

console.log(add(5, 6)); // 11

console.log(sum); // 11
