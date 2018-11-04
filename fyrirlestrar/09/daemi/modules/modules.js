// Forrit 1, skrifað af okkur, í einingu
const myProgram = (() => {
  function calculate(a, b) {
    return a + b;
  }

  return () => {
    const x = 2;
    const y = 3;

    console.log('Niðurstaða úr forriti 1 = ', calculate(x, y));
  };
})();

// Forrit 2, skrifað af öðrum, í einingu
const myProgram2 = (() => {
  function calculate(a, b) {
    return a * b;
  }

  return () => {
    const x = 10;
    const y = 5;

    console.log('Niðurstaða úr forriti 2 = ', calculate(x, y));
  };
})();

myProgram();
myProgram2();
