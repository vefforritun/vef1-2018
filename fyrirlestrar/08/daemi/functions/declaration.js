hello('world'); // 'hello, world!'

hello(1); // 'hello, 1!'

// skilgreinum fall eftir að það hefur verið kallað í það.
// Það má því áður en kóði er keyrður eru öll föll fundin og gerð aðgengileg
function hello(name) {
  return `hello, ${name}!`;
}
