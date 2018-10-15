
let i = 1;
while (i++ < 5) {
  console.log(i);
}
// 2, 3, 4, 5

let j = 1;
do {
  console.log(j);
} while (j++ < 5)
// 1, 2, 3, 4, 5

// svo lengi sem við fáum ekki truthy gildi munum við verða spurð um nafn
let name;
do {
  name = prompt('Who are you?');
} while (!name);
console.log(name);

for (let i = 0; i < 100; i++) {

  // continue leyfir okkur að byrja ítrun aftur
  if (i % 2 === 1) {
    continue;
  }

  if (i > 5) {
    console.log('Yfir 5, hættum!');

    // break stöðvar ítrun
    break;
  }

  console.log(i);
}
// 0, 2, 4, "Yfir 5, hættum!"

let a = 2;
switch (a) {
  case 1:
    console.log('a = 1');
    break;
  case 2:
    console.log('a = 2');
    break;
  default:
    console.log('a = ???');
}
// a = 2

switch (prompt('What is the weather like?')) {
  case 'rainy':
    console.log('Remember to bring an umbrella.');
    break;
  case 'sunny':
    console.log('Dress lightly.');
  case 'cloudy':
    console.log('Go outside.');
    break;
  default:
    console.log('Unknown weather type!');
    break;
}
