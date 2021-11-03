const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFilter = document.querySelectorAll('.map__filter');

// ПОКА НЕ СМОТРИ НА ЭТО
// const titleInput = document.querySelector('#title');
// const MIN_TITLE_LENGTH = 30;
// const MAX_TITLE_LENGTH = 100;
// const priceInput = document.querySelector('#price');
// const MAX_PRICE = 1000000;

// const roomNumber = document.querySelector('#room_number');
// const capacity = document.querySelector('#capacity');

// неактивное состояние
const disableElements = () => {
  const disableForm = () => {
    adForm.classList.add('ad-form--disabled');
    adForm.setAttribute('disabled', 'disabled');
  };

  const disableFilter = () => {
    mapFilters.classList.add('.map__filters--disabled');

    mapFilter.forEach((filter) => {
      filter.setAttribute('disabled', 'disabled');
    });
  };

  disableForm();
  disableFilter();
};

disableElements();

// FIXME пыталась сделать код более универсальным, но ничего не вышло, почему?
// const disableElement = (element) => {
//   element.classList.add(`${element}--disabled`);
//   element.forEach(((element) => {
//     element.setAttribute('disabled', 'disabled');
//   }));
// };

// disableElement(adForm);

//активное состояние
const ableElements = () => {
  const ableForm = () => {
    adForm.classList.remove('ad-form--disabled');
    adForm.removeAttribute('disabled', 'disabled');
  };

  const ableFilter = () => {
    mapFilters.classList.remove('.map__filters--disabled');

    mapFilter.forEach((filter) => {
      filter.removeAttribute('disabled', 'disabled');
    });
  };

  ableForm();
  ableFilter();
};

ableElements();

// НА ЭТО ПОКА ТОЖЕ НЕ СМОТРИ, тем более оно не работает
// валидаторы;
// titleInput.addEventListener('input', () => {
//   const valueLength = titleInput.value.length;
//   if (valueLength < MIN_TITLE_LENGTH) {
//     titleInput.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - valueLength} симв.`);
//   } else if (valueLength > MAX_TITLE_LENGTH) {
//     titleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH } симв.`);
//   } else {
//     titleInput.setCustomValidity('');
//   }

//   titleInput.reportValidity();
// });

// priceInput.addEventListener('input', () => {
//   if (priceInput > MAX_PRICE) {
//     priceInput.setCustomValidity('Цена слишком большая! Максимальная цена - 1.000.000');
//   } else {
//     priceInput.setCustomValidity('');
//   }
// }); не работает! пофиксить в следующей домашке

// const setRoomGuests = () => {
//   if (roomNumber.value = 1) {
//здесь нужно найти все option, у которых value != 1 и добавить disabled на них, но я не знаю как и не понимаю, как загуглить
//   }
// };
