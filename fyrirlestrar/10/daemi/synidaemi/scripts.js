
const text = (() => {
  // skilgreina "private" breytur sem við notum í forriti
  let input; // input fyrir fyrirsögn
  let textarea; // textarea fyrir texta

  let textContainer; // div sem inniheldur texta
  let errorContainer; // div sem inniheldur villuskilaboð

  let invert; // checkbox fyrir hvort eigi að vera inverted
  let uppercase; // checkbox fyrir hvort fyrirsögn eigi að vera í hástöfum

  function setError(textValue) {
    if (errorContainer.childNodes.length > 0) {
      errorContainer.removeChild(errorContainer.childNodes[0]);
    }

    if (textValue && textValue.length > 0) {
      errorContainer.appendChild(document.createTextNode(textValue));
    }
  }

  function validHeading(value) {
    return value.length > 0 && value.length <= 100;
  }

  function validText(value) {
    return value.length > 0 && value.length <= 1000;
  }

  function addText(heading, textValue, isInverted, isUppercase) {
    const divElement = document.createElement('div');
    divElement.classList.add('text');

    if (isInverted) {
      divElement.classList.add('inverted');
    }

    const headingElement = document.createElement('h2');
    headingElement.appendChild(document.createTextNode(heading));

    if (isUppercase) {
      headingElement.classList.add('uppercase');
    }

    const textElement = document.createElement('p');
    textElement.appendChild(document.createTextNode(textValue));

    divElement.appendChild(headingElement);
    divElement.appendChild(textElement);

    textContainer.appendChild(divElement);
  }

  function clearForm() {
    input.value = '';
    textarea.value = '';
    invert.checked = false;
    uppercase.checked = false;
  }

  function submit(e) {
    e.preventDefault();

    const heading = input.value;
    const textValue = textarea.value;
    const isInverted = invert.checked;
    const isUppercase = uppercase.checked;
    let valid = true;

    if (!validHeading(heading)) {
      setError('Fyrirsögn má ekki vera tóm eða yfir 100 stafi löng');
      input.classList.add('invalid');
      return;
    }

    input.classList.remove('invalid');

    if (!validText(textValue)) {
      setError('Texti má ekki vera tómur eða yfir 1.000 stafa langur');
      textarea.classList.add('invalid');
      valid = false;
    } else {
      textarea.classList.remove('invalid');
    }

    if (valid) {
      addText(heading, textValue, isInverted, isUppercase);
      setError('');
      clearForm();
    }
  }

  function init(form, texts) {
    input = form.querySelector('.heading input');
    textarea = form.querySelector('.textarea textarea');
    textContainer = texts;
    errorContainer = form.querySelector('.error');
    invert = form.querySelector('.invert');
    uppercase = form.querySelector('.uppercase');

    form.addEventListener('submit', submit);
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  const texts = document.querySelector('.texts');

  text.init(form, texts);
});
