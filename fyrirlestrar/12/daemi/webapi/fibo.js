onmessage = (e) => {
  console.log('Hello from worker');

  const { data } = e;

  function fibo(n) {
    if (n < 2) return 1;

    return fibo(n - 2) + fibo(n - 1);
  }

  const results = [];
  for (let i = 0; i < data; i++) {
    results.push(fibo(i));
  }

  postMessage(results.join(', '));
};
