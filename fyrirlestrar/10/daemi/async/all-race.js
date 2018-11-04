function snooze(s, msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, s * 1000);
  });
}

const snoozefestAll = Promise.all([
  snooze(5, 'Vakna'),
  snooze(3, 'Vakna núna!'),
  snooze(1, 'VAKNA!!!'),
])
  .then(result => console.log(result));

console.log(snoozefestAll);
// Promise {<pending>}
// 5s seinna..
// ["Vakna", "Vakna núna!", "VAKNA!!!"]


Promise.race([
  snooze(5, 'Vakna'),
  snooze(3, 'Vakna núna!'),
  snooze(1, 'VAKNA!!!'),
])
  .then(result => console.log(result));

// 1s seinna..
// "VAKNA!!!"
