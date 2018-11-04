function getResult() {
  if (Math.random() > 0.5) {
    return null;
  }

  return { s: 'hello' };
}

const result = getResult();
try {
  const string = result.s;
  console.log(s.substr(1));
} catch (e) {
  console.log('Greip villu');

  if (e instanceof TypeError) {
    console.log('Villa er TypeError', e);
  } else if (e instanceof ReferenceError) {
    console.log('Villa er ReferenceError', e);
  }
}
