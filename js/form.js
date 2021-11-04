const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFilterElements = document.querySelectorAll('fieldset, select');

//неактивное состояние
const disableFormElements = (elements) => elements.forEach((element) => element.disabled = true);

const disableElements = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('.map__filters--disabled');

  disableFormElements(mapFilterElements);
  disableFormElements(adForm);
};

//активное состояние
const activateFormElements = (elements) => elements.forEach((element) => element.disabled = false);

const activateElements = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('.map__filters--disabled');

  activateFormElements(mapFilterElements);
  activateFormElements(adForm);
};

// валидаторы;
const titleInput = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const priceInput = document.querySelector('#price');
const MAX_PRICE = 1000000;

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

priceInput.addEventListener('input', () => {
  if (priceInput.value > MAX_PRICE) {
    priceInput.setCustomValidity('Цена слишком большая! Максимальная цена - 1.000.000');
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

capacity[0].disabled = true;
capacity[1].disabled = true;
capacity[3].disabled = true;
capacity[2].selected = true;

roomNumber.onchange = (event) => {
  switch (event.target.value) {
    case '1':
      capacity[0].disabled = true;
      capacity[1].disabled = true;
      capacity[2].disabled = false;
      capacity[3].disabled = true;
      capacity[2].selected = true;
      break;
    case '2':
      capacity[0].disabled = true;
      capacity[1].disabled = false;
      capacity[2].disabled = false;
      capacity[3].disabled = true;
      capacity[2].selected = true;
      break;
    case '3':
      capacity[0].disabled = false;
      capacity[1].disabled = false;
      capacity[2].disabled = false;
      capacity[3].disabled = true;
      capacity[2].selected = true;
      break;
    case '100':
      capacity[0].disabled = true;
      capacity[1].disabled = true;
      capacity[2].disabled = true;
      capacity[3].disabled = false;
      capacity[3].selected = true;
      break;
  }
};
