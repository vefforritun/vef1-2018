function iThrowErrors() {
  throw Error('Villa!');
}

try {
  iThrowErrors();
} catch (e) {
  console.log('Greip villu!', e);
}
console.log('Ég keyri!');
