const person = {
  name: 'Jón Jónsson',

  // óleyfilegt breytunafn án '
  'home-address': 'Aðalgata 1',
  age: 100,
  registered: true,

  // trailing comma
  interests: ['foo', 'bar', 'baz', ],
}


const a = {};
const key = 'bar';

a[key] = 'baz';

console.log(a[key]); // baz

console.log(a.bar); // baz


const obj = { foo: 1 };
console.log(obj.foo); // 1
console.log('foo' in obj); // true

obj.bar = 'foo'; // "foo"
obj['foo-bar'] = true; // true
console.log(delete obj.foo); // true

console.log('foo' in obj); // false
console.log(obj); // { bar: "foo", foo-bar: true}


const foo = { x: 1, y: 2, z: 3 };
console.log(Object.keys(foo)); // ['x', 'y', 'z']
console.log(Object.values(foo)); // [1, 2, 3]

Object.freeze(foo);
console.log(delete foo.x); // false

// afritum foo yfir í bar
const bar = Object.assign({}, foo);

const baz = { a: true, x: 9 };

// afritum foo yfir í baz, yfirskrifar
Object.assign(baz, foo);

console.log(baz); // { a: true, x: 1, y: 2, z: 3  };
