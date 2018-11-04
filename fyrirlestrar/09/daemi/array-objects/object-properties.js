const a = '1';
const b = '2';
const c = { a, b };

console.log(c); // { a: "1", b: "2" }

const d = {
  foo: 'bar',

  // eigindi úr segð
  [`foo${c.a}`]: 'bar',
};

console.log(d); // { foo: "bar", foo1 : "bar" }

const utils = {

  // í staðinn fyrir sum: function (x, y)
  sum(x, y) {
    return x + y;
  },
};

console.log(utils.sum(1, 2)); // 3
