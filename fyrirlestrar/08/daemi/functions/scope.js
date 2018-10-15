let a = 1;
{
  let a = 2;
  console.log(a); // 2
}
console.log(a); // 1

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40

var i = 10;

function add(x) {
  // i er aðgengileg úr global scope
  return x + i;
}

add(10); // 20
