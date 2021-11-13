// import {resetMap} from './map.js';
import {sendData} from './api.js';
import {renderSuccessPopup, renderErrorPopup} from './popup.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFilterElements = document.querySelectorAll('fieldset, select');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const room = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityOptions = capacity.querySelectorAll('option');
const housingType = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const roomsCapacity = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const minPriceByType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

//неактивное состояние
const disableFormElements = (elements) => elements.forEach((element) => element.disabled = true);

const disableElements = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('.map__filters--disabled');

  disableFormElements(mapFilterElements);
};

disableElements();

//активное состояние
const activateFormElements = (elements) => elements.forEach((element) => element.disabled = false);

const activateElements = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('.map__filters--disabled');

  activateFormElements(mapFilterElements);
};

// валидаторы;
const onTitleInput = () => {
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
};

const onPriceInput = () => {
  const minPrice = priceInput.min;

  if (priceInput.value > MAX_PRICE) {
    priceInput.setCustomValidity('Цена слишком большая! Максимальная цена - 1.000.000');
  } else if (priceInput.value < minPrice) {
    priceInput.setCustomValidity(`Цена слишком маленькая! Минимальная цена - ${minPrice}`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
};

const onRoomChange = () => {
  const roomValue = Number(room.value);

  const currentRoomCapacity = roomsCapacity[roomValue];
  capacity.value = currentRoomCapacity[0];

  capacityOptions.forEach((option) => {
    if (currentRoomCapacity.includes(Number(option.value))) {
      option.disabled = false;
    } else {
      option.disabled = true;
    }
  });
};

const syncCapacity = () => onRoomChange();

const onHousingTypeChange = () => {
  const housingValue = housingType.value;

  priceInput.placeholder = minPriceByType[housingValue];
  priceInput.min = minPriceByType[housingValue];
};

const syncHousingType = () => onHousingTypeChange();

const onTimeInChange = () => {
  timeOut.value = timeIn.value;
};

const onTimeOutChange = () => {
  timeIn.value = timeOut.value;
};

const syncTimeIn = () => onTimeInChange();
const syncTimeOut = () => onTimeOutChange();

const resetForms = () => {
  adForm.reset();
  // resetMap();
};

const onSendLoad = () => {
  resetForms();
  renderSuccessPopup();
};

const onSendError = () => {
  renderErrorPopup();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(adForm);

  sendData(onSendLoad, onSendError, formData);
};

//управляющий код
const setFormListeners = () => {
  syncCapacity();
  syncHousingType();
  syncTimeIn();
  syncTimeOut();
  titleInput.addEventListener('input', onTitleInput);
  priceInput.addEventListener('input', onPriceInput);
  room.addEventListener('change', onRoomChange);
  housingType.addEventListener('change', onHousingTypeChange);
  timeIn.addEventListener('change', onTimeInChange);
  timeOut.addEventListener('change', onTimeOutChange);
  adForm.addEventListener('submit', onFormSubmit);
  adForm.addEventListener('reset', resetForms);
};

export {setFormListeners};
export {activateElements};
