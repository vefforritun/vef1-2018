let foo;
// foo er skilgreind breyta með engu gildi — undefined
console.log(typeof foo); // undefined

// ef við myndum keyra línu að neðan myndum við fá SyntaxError
// og forritið okkar myndi hætta keyrslu
// let foo = 'bar';

let foo2 = 'bar';

// breytur í JavaScript eru dýnamískar
let a = 'halló heimur';

console.log(a); // "halló heimur"

a = 1;

console.log(a); // 1

a = false;

console.log(a); // false

a = undefined;

console.log(a); // undefined

const FOO = 1;

// ef við myndum keyra línu að neðan myndum við fá TypeError
// og forritið okkar myndi hætta keyrslu
// FOO = 2;

// getum nefnt breytur með $, _ og íslenskum stöfum
// en megum ekki byrja á tölustaf

let jó$$$ = '😎';

// ef við myndum keyra línur að neðan myndum við fá SyntaxError
// og forritið okkar myndi hætta keyrslu
// let foo#% = 1;
// let 1bar = 2;
// let class = 'foo';

// window inniheldur umhverfið í vafra en process í node.js
console.log(window);

// hlutir sem eru almennt aðgengilegir eru bundnir við window
console.log(window.parseInt === parseInt); // true
