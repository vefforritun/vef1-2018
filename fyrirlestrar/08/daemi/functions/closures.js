function makeAdder(x) {
  // þetta fall hefur alltaf aðgang að x
  return y => x + y;
}

function outer(a) {
  let x = 1;
  function inner(b) {
    let y = 2;
    function innerinner(c) {
      let z = 3;
      return x + y + z + c;
    }
    return innerinner(b);
  }
  return inner(a);
}
outer(10); // 16
