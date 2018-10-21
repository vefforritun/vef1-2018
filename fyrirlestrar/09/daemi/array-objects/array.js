const list = [1, 2, 3];

console.log(list.length); // 3

// má þó að við höfum skilgreint sem const
list[100] = 1;
console.log(list.length); // 101

// Þar sem við skilgreinum list með const mun eftirfarandi kasta villu
// list = ''; // TypeError

const a = 'hello world';
a.length; // 11
console.log(a['length']); // 11
console.log(a['1%-foo']); // undefined

// Óleyfilegt nafn, mun kasta villu
// console.log(a.1%-foo); // SyntaxError

console.log(a.toUpperCase()); // "HELLO WORLD"

const foo = [0, 1, 2];
console.log(foo[0]); // 0

console.log(foo.push('foo')); // 4

console.log(foo.join(', ')); // '0, 1, 2, foo'

console.log(foo.pop()); // 'foo'
