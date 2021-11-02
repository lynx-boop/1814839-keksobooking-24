const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFilter = document.querySelectorAll('.map__filter');

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
