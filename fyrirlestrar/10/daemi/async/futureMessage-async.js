function futureMessage(msg) {
  return new Promise((resolve, reject) => {
    if (msg === 'foo') reject(new Error('No foo allowed!'));

    setTimeout(() => resolve(`${msg} from the future!`), 2000);
  });
}

async function future() {
  try {
    const result = await futureMessage('foo');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

future();
