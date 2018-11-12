/**
 * Niðurteljari!
 */
export default class Countdown {
  /**
   * Finnur container fyrir niðurteljara og form.
   * Bindur submit eventhandler við form.
   */
  constructor() {
    this.keyName = 'countdown';
    this.container = document.querySelector('.countdown');
    this.form = document.querySelector('form');

    // til þess að submit hafi þennan klasa sem "this" verðum við
    // að nota bind hér (og í öðrum föllum sem við bindum!)
    this.form.addEventListener('submit', this.submit.bind(this));
  }

  /**
   * Sækir gögn úr localStorage eftir this.keyName
   * Ef gögn eru til, hleður þeim inn með því að kalla í this.create()
   */
  load() {
    const savedData = window.localStorage.getItem(this.keyName);

    if (savedData) {
      const parsed = JSON.parse(savedData);
      const date = new Date(parsed.date);

      this.create(parsed.title, date);
    }
  }

  /**
   * Tekur við title sem streng og date sem Date hlut
   * Vistar sem json gögn í localStorage undir this.keyName
   */
  save(title, date) {
    const data = { title, date };
    const json = JSON.stringify(data);
    window.localStorage.setItem(this.keyName, json);
  }

  /**
   * Handler fyrir submit á formi.
   * Sækir gögn úr formi og kallar í this.parseDate()
   * Vistar gögn með this.save() og sýnir niðurteljara með this.create()
   */
  submit(e) {
    e.preventDefault();
    const title = this.form.querySelector('input[type=text]');
    const date = this.form.querySelector('input[type=date]');
    const time = this.form.querySelector('input[type=time]');

    const parsedDate = this.parseDate(date.value, time.value);

    this.save(title.value, parsedDate);
    this.create(title.value, parsedDate);
  }

  /**
   * Tekur við:
   *  - date sem streng á forminu "yyyy-mm-dd", t.d. "2017-11-06"
   *  - time sem streng á forminu "hh:mm", t.d. "09:00"
   * Skilar date hlut með gögnum úr date og time
   */
  parseDate(date, time) {
    const d = date.split('-');
    const t = time.split(':');

    const year = parseInt(d[0], 10);
    const month = parseInt(d[1], 10) - 1;
    const day = parseInt(d[2], 10);
    const hour = parseInt(t[0], 10);
    const min = parseInt(t[1], 10);

    return new Date(year, month, day, hour, min);
  }

  /**
   * Býr til element fyrir niðurteljara og bætir við this.container
   * Setur this.date sem dagsetningu sem talið er niður að
   * Setur this.element sem element sem geymir niðurteljara
   * Bætir við "eyða" takka sem sér um að eyða niðurteljara með this.delete
   * Byrjar niðurteljara með this.startCounter() og
   * felur form með this.hideForm()
   */
  create(title, date) {
    this.date = date;

    const h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(title));
    h2.classList.add('countdown__heading');
    this.container.appendChild(h2);

    const countdown = document.createElement('div');
    this.container.appendChild(countdown);
    this.element = countdown;

    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Eyða'));
    deleteButton.classList.add('button');
    deleteButton.addEventListener('click', this.delete.bind(this));
    this.container.appendChild(deleteButton);

    this.startCounter();
    this.hideForm();
  }

  /**
   * Felur form með CSS
   */
  hideForm() {
    this.form.classList.add('form__hidden');
  }

  /**
   * Sýnir form með CSS
   */
  showForm() {
    this.form.classList.remove('form__hidden');
  }

  /**
   * Byrjar niðurteljara með this.count() og keyrir á 1000ms fresti
   * með window.setInterval
   */
  startCounter() {
    this.count();
    this.interval = window.setInterval(this.count.bind(this), 1000);
  }

  /**
   * Stöðvar teljara með window.clearInterval
   */
  stopCounter() {
    window.clearInterval(this.interval);
  }

  /**
   * Býr til element sem heldur utan um teljara, á forminu:
   * <div class="countdown__box">
   *   <span class="countdown__num">num</span>
   *   <span class="countdown__title">title</span>
   * </div>
   * og skilar element
   */
  createElement(num, title) {
    const el = document.createElement('div');
    el.classList.add('countdown__box');
    const numEl = document.createElement('span');
    numEl.classList.add('countdown__num');
    numEl.appendChild(document.createTextNode(num));
    const titleEl = document.createElement('span');
    titleEl.classList.add('countdown__title');
    titleEl.appendChild(document.createTextNode(title));
    el.appendChild(numEl);
    el.appendChild(titleEl);

    return el;
  }

  /**
   * Eyðir niðurteljara með því að fjarlægja úr localStorage og
   * fjarlægja allt úr this.container.
   * Kallar líka í this.stopCounter() og this.showForm()
   */
  delete() {
    window.localStorage.removeItem(this.keyName);

    this.stopCounter();
    this.showForm();

    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }

  /**
   * Tekur við remaining sem eru millisekúndur í dagsetningu sem talið er
   * niður í.
   * Útbýr og skilar element sem inniheldur element fyrir daga, klukkustundir,
   * mínútur og sekúndur þar til remaining gerist. Hver „partur“ er búinn til
   * með kalli í this.createElement
   */
  countdown(remaining) {
    const totalSecs = remaining / 1000;

    const days = Math.floor(totalSecs / (60 * 60 * 24));
    const hours = Math.floor((totalSecs / (60 * 60)) % 24);
    const mins = Math.floor((totalSecs / 60) % 60);
    const secs = Math.floor(totalSecs % 60);

    const container = document.createElement('div');
    container.classList.add('countdown__container');

    container.appendChild(this.createElement(days, 'Dagar'));
    container.appendChild(this.createElement(hours, 'Klst'));
    container.appendChild(this.createElement(mins, 'Mín'));
    container.appendChild(this.createElement(secs, 'Sek'));

    return container;
  }

  /**
   * Telur niður.
   * Fjarlægir allt úr this.element (ef eitthvað er þar) og athugar síðan hvort
   * this.date (dagsetning sem talið er niður að) sé liðin og ef svo er birtir
   * textann "Komið!" og stoppa teljara með this.stopCounter()
   * Ef ekki liðið uppfærir teljara með því að bæta element úr this.countdown()
   * við this.element
   */
  count() {
    if (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }

    const diff = this.date - new Date();

    if (diff <= 0) {
      this.element.appendChild(document.createTextNode('Komið!'));
      this.stopCounter();
    } else {
      const countdown = this.countdown(diff);
      this.element.appendChild(countdown);
    }
  }
}
