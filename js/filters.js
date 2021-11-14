import { offers, renderPins, resetRegularPins, OFFER_NUMBER } from './map.js';

const housingTypeInput = document.querySelector('#housing-type');
const priceInput = document.querySelector('#housing-price');
const roomsInput = document.querySelector('#housing-rooms');
const guestsInput = document.querySelector('#housing-guests');

const filterAdverts = (advert) => {
  if (housingTypeInput.value !== 'any' && advert.offer.type !== housingTypeInput.value) {
    return false;
  }

  switch (priceInput.value) {
    case 'low':
      if (Number(advert.offer.price) > 10000) {
        return false;
      }
      break;
    case 'middle':
      if (10000 > Number(advert.offer.price) || 50000 < Number(advert.offer.price)) {
        return false;
      }
      break;

    case 'high':
      if (Number(advert.offer.price) < 50000) {
        return false;
      }
      break;
  }

  if (roomsInput.value !== 'any' && Number(roomsInput.value) !== advert.offer.rooms) {
    return false;
  }

  if (guestsInput.value !== 'any' && Number(guestsInput.value) !== advert.offer.guests) {
    return false;
  }

  return true;
};

const filtration = () => {
  const filteredOffers = offers.filter(filterAdverts);
  resetRegularPins();
  renderPins(filteredOffers.slice(0, OFFER_NUMBER));
};

const setFilterListeners = () => {
  housingTypeInput.addEventListener('change', filtration);
  priceInput.addEventListener('change', filtration);
  roomsInput.addEventListener('change', filtration);
  guestsInput.addEventListener('change', filtration);
};

export { setFilterListeners };
