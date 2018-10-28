function snooze(s, msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg)
    }, s * 1000);
  });
}

snooze(5, 'Vakna')
  .then((msg) => alert(msg))
  .then(() => snooze(3, 'Vakna núna!'))
  .then((msg) => alert(msg))
  .then(() => snooze(1, 'VAKNA!!!'))
  .then((msg) => alert(msg));
