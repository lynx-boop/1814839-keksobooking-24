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

const tokyo = {
  lat: 35.658581,
  lng: 139.745438,
};

//экспортировать из мап
const map = createMap(tokyo.lat, tokyo.lng, 12, 'map-canvas');

//экспортировать из мап
const mainPinIcon = createPinIcon(
  './img/main-pin.svg',
  [52, 52],
  [26, 52],
);

//экспортировать из мап
const regularPinIcon = createPinIcon(
  './img/pin.svg',
  [40, 40],
  [20, 40],
);

//должно остаться здесь
data.forEach((element) => {
  createPinBaloon(
    element.location.lat,
    element.location.lng,
    createCard(element),
    regularPinIcon, //это импортировать из мап
    map, //это импортировать из мап
  );
});

const mainPin = createPin(
  tokyo.lat,
  tokyo.lng,
  true,
  mainPinIcon, //это импортировать из мап
  map,
);


address.value = `${tokyo.lat.toFixed(5)}, ${tokyo.lng.toFixed(5)}`; //остается здесь

mainPin.on('moveend', (evt) => {
  address.value = `${evt.target._latlng.lat.toFixed(5)}, ${evt.target._latlng.lng.toFixed(5)}`; //остается здесь
});

setFormListeners();
