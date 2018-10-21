const list = [1, 2, 3];

const [a, , b] = list;

console.log(a, b); // 1 3

const obj = { foo: 1, bar: 'baz' };

const { foo, bar, baz } = obj;

console.log(foo, bar, baz); // 1 "baz" undefined
