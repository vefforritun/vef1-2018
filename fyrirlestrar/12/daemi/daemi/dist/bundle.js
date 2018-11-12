(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * Niðurteljari!
   */
  var Countdown =
  /*#__PURE__*/
  function () {
    /**
     * Finnur container fyrir niðurteljara og form.
     * Bindur submit eventhandler við form.
     */
    function Countdown() {
      _classCallCheck(this, Countdown);

      this.keyName = 'countdown';
      this.container = document.querySelector('.countdown');
      this.form = document.querySelector('form'); // til þess að submit hafi þennan klasa sem "this" verðum við
      // að nota bind hér (og í öðrum föllum sem við bindum!)

      this.form.addEventListener('submit', this.submit.bind(this));
    }
    /**
     * Sækir gögn úr localStorage eftir this.keyName
     * Ef gögn eru til, hleður þeim inn með því að kalla í this.create()
     */


    _createClass(Countdown, [{
      key: "load",
      value: function load() {
        var savedData = window.localStorage.getItem(this.keyName);

        if (savedData) {
          var parsed = JSON.parse(savedData);
          var date = new Date(parsed.date);
          this.create(parsed.title, date);
        }
      }
      /**
       * Tekur við title sem streng og date sem Date hlut
       * Vistar sem json gögn í localStorage undir this.keyName
       */

    }, {
      key: "save",
      value: function save(title, date) {
        var data = {
          title: title,
          date: date
        };
        var json = JSON.stringify(data);
        window.localStorage.setItem(this.keyName, json);
      }
      /**
       * Handler fyrir submit á formi.
       * Sækir gögn úr formi og kallar í this.parseDate()
       * Vistar gögn með this.save() og sýnir niðurteljara með this.create()
       */

    }, {
      key: "submit",
      value: function submit(e) {
        e.preventDefault();
        var title = this.form.querySelector('input[type=text]');
        var date = this.form.querySelector('input[type=date]');
        var time = this.form.querySelector('input[type=time]');
        var parsedDate = this.parseDate(date.value, time.value);
        this.save(title.value, parsedDate);
        this.create(title.value, parsedDate);
      }
      /**
       * Tekur við:
       *  - date sem streng á forminu "yyyy-mm-dd", t.d. "2017-11-06"
       *  - time sem streng á forminu "hh:mm", t.d. "09:00"
       * Skilar date hlut með gögnum úr date og time
       */

    }, {
      key: "parseDate",
      value: function parseDate(date, time) {
        var d = date.split('-');
        var t = time.split(':');
        var year = parseInt(d[0], 10);
        var month = parseInt(d[1], 10) - 1;
        var day = parseInt(d[2], 10);
        var hour = parseInt(t[0], 10);
        var min = parseInt(t[1], 10);
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

    }, {
      key: "create",
      value: function create(title, date) {
        this.date = date;
        var h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(title));
        h2.classList.add('countdown__heading');
        this.container.appendChild(h2);
        var countdown = document.createElement('div');
        this.container.appendChild(countdown);
        this.element = countdown;
        var deleteButton = document.createElement('button');
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

    }, {
      key: "hideForm",
      value: function hideForm() {
        this.form.classList.add('form__hidden');
      }
      /**
       * Sýnir form með CSS
       */

    }, {
      key: "showForm",
      value: function showForm() {
        this.form.classList.remove('form__hidden');
      }
      /**
       * Byrjar niðurteljara með this.count() og keyrir á 1000ms fresti
       * með window.setInterval
       */

    }, {
      key: "startCounter",
      value: function startCounter() {
        this.count();
        this.interval = window.setInterval(this.count.bind(this), 1000);
      }
      /**
       * Stöðvar teljara með window.clearInterval
       */

    }, {
      key: "stopCounter",
      value: function stopCounter() {
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

    }, {
      key: "createElement",
      value: function createElement(num, title) {
        var el = document.createElement('div');
        el.classList.add('countdown__box');
        var numEl = document.createElement('span');
        numEl.classList.add('countdown__num');
        numEl.appendChild(document.createTextNode(num));
        var titleEl = document.createElement('span');
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

    }, {
      key: "delete",
      value: function _delete() {
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

    }, {
      key: "countdown",
      value: function countdown(remaining) {
        var totalSecs = remaining / 1000;
        var days = Math.floor(totalSecs / (60 * 60 * 24));
        var hours = Math.floor(totalSecs / (60 * 60) % 24);
        var mins = Math.floor(totalSecs / 60 % 60);
        var secs = Math.floor(totalSecs % 60);
        var container = document.createElement('div');
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

    }, {
      key: "count",
      value: function count() {
        if (this.element.firstChild) {
          this.element.removeChild(this.element.firstChild);
        }

        var diff = this.date - new Date();

        if (diff <= 0) {
          this.element.appendChild(document.createTextNode('Komið!'));
          this.stopCounter();
        } else {
          var countdown = this.countdown(diff);
          this.element.appendChild(countdown);
        }
      }
    }]);

    return Countdown;
  }();

  document.addEventListener('DOMContentLoaded', function () {
    var countdown = new Countdown();
    countdown.load();
  });

}());
//# sourceMappingURL=bundle.js.map
