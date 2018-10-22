function avg(...rest) {
  let sum = 0;
  for (let i of rest) {
    sum += i;
  }
  return sum / rest.length;
}

const list = [1, 2, 3];
console.log(...list); // 1 2 3

// sama og að hafa gert
console.log(1, 2, 3);

function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(...list)); // 6

// sama og að hafa gert
console.log(sum(1, 2, 3));


// getum gert í bland við önnur argument
console.log(avg(1, ...list, 10)); // 3.4

console.log([1, ...list, 10]); // [1, 1, 2, 3, 10]

// afritum fylki
console.log([...list]); // [1, 2, 3]

