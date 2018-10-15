
var foo = 1;
(function() {
  console.log(foo); // undefined, ekki 2
  var foo = 2;
  console.log(foo); // 2
})()

// kóði að ofan er túlkaður svona útaf hoisting á var:

var foo = 1;
(function() {
  var foo; //  undefined
  console.log(foo); // undefined
  foo = 2;
  console.log(foo); // 2
})()
