let hi = function(name) {
  return `hello, ${name}`;
}

console.log(hi('world'));
// 'hello, world!'

hi = null; // fallið horfið!

// fáum villu: TypeError: hi is not a function
console.log(hi('world'));
