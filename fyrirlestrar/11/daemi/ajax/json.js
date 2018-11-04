const obj = {
  a: 1,
  string: 'Halló, heimur',
  obj: {
    b: 'foo',
    c: [1, 2, 3],
  },
};

const json = JSON.stringify(obj);
const back = JSON.parse(json);

console.log(back);

try {
  JSON.parse('{');
} catch (e) {
  console.error(e);
}
