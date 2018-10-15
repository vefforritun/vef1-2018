
let num = Number(prompt('Veldu tölu'));
if (!Number.isNaN(num)) {
  console.log(`Talan þín er kvaðratrótin af ${num * num}`);
} else {
  console.log(`Þetta er ekki tala`);
}

let a = 5;

if (a > 5) {
  console.log('stærri en 5');
} else if (a > 1) {
  console.log('stærri en 1');
} else {
  console.log('1 eða minni')
}
