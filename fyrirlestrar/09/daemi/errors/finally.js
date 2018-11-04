function iThrowErrorsSometimes() {
  if (Math.random() > 0.5) {
    throw new Error('Villa!');
  }
}

try {
  iThrowErrorsSometimes();
} catch (e) {
  console.log('Greip villu!', e);
} finally {
  console.log('Ég keyri alltaf');
}
