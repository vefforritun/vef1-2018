const API_URL = 'http://apis.is/car?number=';

document.addEventListener('DOMContentLoaded', function () {
  const cars = document.querySelector('.cars');

  program.init(cars);
});

/**
 * Bílaleit. Sækir gögn með Ajax á apis.is.
 */
const program = (() => {
  let cars;

  function displayCar(carsList) {
    if (carsList.length === 0) {
      displayError('Fann ekki bíl');
      return;
    }

    const [{ factoryNumber, color }] = carsList;

    const dl = document.createElement('dl');

    const factoryElement = document.createElement('dt');
    factoryElement.appendChild(document.createTextNode('Verksmiðjunúmer'));
    dl.appendChild(factoryElement);

    const factoryValueElement = document.createElement('dd');
    factoryValueElement.appendChild(document.createTextNode(factoryNumber));
    dl.appendChild(factoryValueElement);

    const container = cars.querySelector('.results');

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.appendChild(dl);
  }

  function displayError(error) {
    const container = cars.querySelector('.results');

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.appendChild(document.createTextNode(error));
  }

  function fetchData(number) {
    fetch(`${API_URL}${number}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Villa kom upp');
      })
      .then((data) => {
        displayCar(data.results);
      })
      .catch((error) => {
        displayError('Villa!');
        console.error(error);
      })
  }

  function onSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');

    // TODO höndla tómastreng

    fetchData(input.value);
  }

  function init(_cars) {
    cars = _cars;

    const form = cars.querySelector('form');
    form.addEventListener('submit', onSubmit);
  }

  return {
    init,
  }
})();
