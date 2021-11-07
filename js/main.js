import {setFormListeners} from './form.js';
import {createAdverts} from './data.js';
import {
  createPinBaloon,
  createMap,
  createPin,
  createPinIcon
} from './map.js';
import {createCard} from './card.js';

const SIMILAR_ADVERT_COUNT = 10;

const address = document.querySelector('#address');

const data = createAdverts(SIMILAR_ADVERT_COUNT);

const map = createMap(35.652832, 139.839478, 12, 'map-canvas');

const mainPinIcon = createPinIcon(
  './img/main-pin.svg',
  [52, 52],
  [26, 52],
);

const regularPinIcon = createPinIcon(
  './img/pin.svg',
  [40, 40],
  [20, 40],
);

data.forEach((element) => {
  createPinBaloon(
    element.location.lat,
    element.location.lng,
    createCard(element),
    regularPinIcon,
    map,
  );
});

const mainPin = createPin(
  35.652832,
  139.839478,
  true,
  mainPinIcon,
  map,
);

mainPin.on('moveend', (evt) => {
  address.value = `${evt.target._latlng.lat.toFixed(5)}, ${evt.target._latlng.lng.toFixed(5)}`;
});

setFormListeners();
