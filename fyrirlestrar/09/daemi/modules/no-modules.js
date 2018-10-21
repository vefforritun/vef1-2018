// Forrit 1, skrifað af okkur

function calculate(a, b) {
  return a + b;
}

function myProgram() {
  const x = 2;
  const y = 3;

  console.log('Niðurstaða úr forriti 1 = ', calculate(x, y));
}

// Forrit 2, skrifað af öðrum

// þetta er eina calculate fallið sem verður í boði
function calculate(a, b) {
  return a * b;
}

function myProgram2() {
  const x = 10;
  const y = 5;

  console.log('Niðurstaða úr forriti 2 = ', calculate(x, y));
}

// "vitlaust" m.v. okkar forsendur
myProgram();

myProgram2();
