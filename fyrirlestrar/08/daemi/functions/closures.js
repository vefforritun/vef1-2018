function makeAdder(x) {
  // þetta fall hefur alltaf aðgang að x
  return y => x + y;
}

function outer(a) {
  const x = 1;
  function inner(b) {
    const y = 2;
    function innerinner(c) {
      const z = 3;
      return x + y + z + c;
    }
    return innerinner(b);
  }
  return inner(a);
}
outer(10); // 16
