const API_URL = 'http://apis.is/car?number=';

document.addEventListener('DOMContentLoaded', function () {
  const cars = document.querySelector('.cars');

  program.init(cars);
});

/**
 * Bílaleit. Sækir gögn með Ajax á apis.is.
 */
const program = (() => {

  function init() {
    console.log(API_URL); /* eslint-disable-line */
  }

  return {
    init,
  }
})();
