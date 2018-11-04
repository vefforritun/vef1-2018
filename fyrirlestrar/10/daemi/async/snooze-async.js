function snooze(s, msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, s * 1000);
  });
}

async function snoozer() {
  alert(await snooze(5, 'Vakna'));
  alert(await snooze(3, 'Vakna núna'));
  alert(await snooze(1, 'VAKNA!!!'));
}

snoozer();
