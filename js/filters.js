import { renderPins, resetRegularPins, MAX_OFFER_NUMBER } from './map.js';
import { debounce } from './utils/debounce.js';

const DEFAULT_VALUE = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const filterForm = document.querySelector('.map__filters');
const housingTypeInput = filterForm.querySelector('#housing-type');
const priceSelect = filterForm.querySelector('#housing-price');
const roomsSelect = filterForm.querySelector('#housing-rooms');
const guestsSelect = filterForm.querySelector('#housing-guests');
const features = filterForm.querySelectorAll('.map__checkbox');

const filterByType = (advert) => (
  housingTypeInput.value === DEFAULT_VALUE || advert.offer.type === housingTypeInput.value
);

const filterByRooms = (advert) => (
  roomsSelect.value === DEFAULT_VALUE || advert.offer.rooms === Number(roomsSelect.value)
);

const filterByGuests = (advert) => (
  guestsSelect.value === DEFAULT_VALUE || advert.offer.guests === Number(guestsSelect.value)
);

const filterByPrice = (advert) => {
  switch (priceSelect.value) {
    case 'low':
      return (Number(advert.offer.price) <= MIN_PRICE);

    case 'middle':
      return (Number(advert.offer.price) > MIN_PRICE && Number(advert.offer.price) < MAX_PRICE);

    case 'high':
      return (Number(advert.offer.price) >= MAX_PRICE);

    default:
      return true;
  }
};

const filterByFeatures = (advert) => {
  if (!advert.offer.features) {
    return false;
  }
  const checkedFeatures = Array.from(features).filter((feature) => feature.checked);
  return checkedFeatures.every((feature) => advert.offer.features.includes(feature.value));
};

const filterAdverts = (adverts) => {
  const filteredOffers = [];

  for (const advert of adverts) {
    if (filterByType(advert)
      && filterByRooms(advert)
      && filterByGuests(advert)
      && filterByPrice(advert)
      && filterByFeatures(advert)) {
      filteredOffers.push(advert);
    }

    if (filteredOffers.length === MAX_OFFER_NUMBER) {
      return filteredOffers;
    }
  }

  return filteredOffers;
};

const onFilterChange = (offers) => {
  const filteredOffers = filterAdverts(offers);
  resetRegularPins();
  renderPins(filteredOffers);
};

const setFilterListener = (offers) => {
  filterForm.addEventListener('change', debounce(() => onFilterChange(offers)));
  filterForm.addEventListener('reset', debounce(() => onFilterChange(offers)));
};

export { setFilterListener };
