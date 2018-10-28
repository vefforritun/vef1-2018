function futureMessage (msg) {
  return new Promise((resolve, reject) => {
    if (msg === 'foo') reject('No foo allowed!');

    setTimeout(() =>
      resolve(`${msg} from the future!`), 2000);
  });
}

futureMessage('Hi!')
  .then(msg => { console.log(msg); });
// "Hi! from the future!" eftir 2 sek

futureMessage('foo')
 .then(msg => { console.log(msg); })
 .catch(e => { console.log(e); });
// "No foo allowed!" strax

const p = futureMessage('hmm');

function foo(p) {
  console.log(p);

  p.then(msg => { console.log(msg); });

  return 'Handling promise...';
}

foo(p);
