const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFilterElements = document.querySelectorAll('fieldset, select');

const titleInput = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const priceInput = document.querySelector('#price');
const MAX_PRICE = 1000000;
let minPrice = 1000;

const room = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityOptions = capacity.querySelectorAll('option');
const housingType = document.querySelector('#type');
const roomsCapacity = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

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

const minPriceByType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const onHousingTypeChange = () => {
  const housingValue = housingType.value;

  minPrice = minPriceByType[housingValue];
  priceInput.placeholder = minPrice;
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
};

export {setFormListeners};
