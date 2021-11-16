import { renderPins, resetRegularPins, OFFER_NUMBER } from './map.js';
import { debounce } from './utils/debounce.js';

const filterForm = document.querySelector('.map__filters');
const housingTypeInput = filterForm.querySelector('#housing-type');
const priceSelect = filterForm.querySelector('#housing-price');
const roomsSelect = filterForm.querySelector('#housing-rooms');
const guestsSelect = filterForm.querySelector('#housing-guests');
const features = filterForm.querySelectorAll('.map__checkbox');

const DEFAULT_VALUE = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const filterByType = (advert) => {
  housingTypeInput.value === DEFAULT_VALUE || advert.offer.type === housingTypeInput.value;
};

const filterByRooms = (advert) => {
  roomsSelect.value === DEFAULT_VALUE || advert.offer.rooms === Number(roomsSelect.value);
};

const filterByGuests = (advert) => {
  guestsSelect.value === DEFAULT_VALUE || advert.offer.guests === Number(guestsSelect.value);
};

const filterByPrice = (advert) => {
  if (priceSelect.value === DEFAULT_VALUE) {
    return true;
  }

  switch (priceSelect.value) {
    case 'low':
      if (Number(advert.offer.price) <= MIN_PRICE) {
        return true;
      }
      break;
    case 'middle':
      if (Number(advert.offer.price) > MIN_PRICE && Number(advert.offer.price) < MAX_PRICE) {
        return true;
      }
      break;

    case 'high':
      if (Number(advert.offer.price) >= MAX_PRICE) {
        return true;
      }
      break;
  }

  return false;
};

const filterByFeatures = (advert) => {
  if (!advert.offer.features) {
    return false;
  }
  const checkedFeatures = Array.from(features).filter((feature) => feature.checked);
  return checkedFeatures.every((feature) => advert.offer.features.includes(feature.value));
};

const filterAdverts = (advert) => (
  filterByType(advert) && filterByRooms(advert) && filterByGuests(advert) && filterByPrice(advert) && filterByFeatures(advert)
);

filterForm.reset();

const onFilterChange = (offers) => {
  console.log(offers);
  const filteredOffers = offers.filter(filterAdverts);
  resetRegularPins();
  renderPins(filteredOffers.slice(0, OFFER_NUMBER));
};

const setFilterListener = (offers) => {
  filterForm.addEventListener('change', debounce(() => onFilterChange(offers)));
  filterForm.addEventListener('reset', debounce(() => onFilterChange(offers)));
};

export { setFilterListener };
