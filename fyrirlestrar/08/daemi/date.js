
let a = new Date(); // Núna

let b = new Date(2020, 0, 1, 00, 00, 00);

let until = b - a; // í millisekúndum

let days = until / 1000 / 60 / 60 / 24;

console.log(`${days.toFixed(0)} dagar þangað til 1. jan 2020`);
