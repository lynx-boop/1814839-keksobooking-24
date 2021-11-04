const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFilterElements = document.querySelectorAll('fieldset, select');

const disableFormElements = (elements) => elements.forEach((element) => element.disabled = true);
const activateFormElements = (elements) => elements.forEach((element) => element.disabled = false);

//неактивное состояние
const disableElements = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('.map__filters--disabled');

  disableFormElements(mapFilterElements);
  disableFormElements(adForm);
};

disableElements();
//активное состояние
const activateElements = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('.map__filters--disabled');

  activateFormElements(mapFilterElements);
  activateFormElements(adForm);
};
