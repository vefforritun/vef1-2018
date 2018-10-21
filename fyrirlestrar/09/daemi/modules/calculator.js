const calculator = function() {
  const pi = Math.PI;
  let last = null;

  function add(x, y) {
    const result = x + y;
    last = result;
    return result;
  }

  function subtract(x, y) {
    const result = x - y;
    last = result;
    return result;
  }

  // getum ekki gefið aðgang að private breytu
  // þurfum að gera gegnum fall
  function getLast() {
    return last;
  }

  return {
    constant: pi,
    add,
    subtract,
    last: getLast,
  }
}();

console.log(calculator.add(1, 1));
console.log(calculator.add(calculator.last(), 2));
