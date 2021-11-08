import {activateElements} from './form.js';
import {createAdverts} from './data.js';
import {createCard} from './card.js';

const address = document.querySelector('#address');
const tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileLayerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const SIMILAR_ADVERT_COUNT = 10;
const MAIN_PIN_SIZE = 52;
const REGULAR_PIN_SIZE = 40;

const tokyo = {
  lat: 35.658581,
  lng: 139.745438,
  mapZoom: 12,
};

const map = L.map('map-canvas')
  .on('load', () => {
    activateElements();
  })

  .setView({
    lat: tokyo.lat,
    lng: tokyo.lng,
  }, tokyo.mapZoom);

L.tileLayer(
  tileLayer,
  {
    attribution: tileLayerAttribution,
  },
).addTo(map);


const createPinIcon = (url, size, anchor) => L.icon({
  iconUrl: url,
  iconSize: size,
  iconAnchor: anchor,
});

const createPin = (lat, lng, draggable, icon, cityMap) => {
  const pin = L.marker(
    {
      lat: lat,
      lng: lng,
    },
    {
      draggable: draggable,
      icon: icon,
    },
  );
  pin.addTo(cityMap);
  return pin;// не надо ретурнами, надо как в образце
};

const createPinBaloon = (lat, lng, baloonCntnt, icon, cityMap) => {
  const pin = createPin(lat, lng, false, icon, cityMap);
  pin.bindPopup(baloonCntnt);
};

const mainPinIcon = createPinIcon(
  './img/main-pin.svg',
  [MAIN_PIN_SIZE, MAIN_PIN_SIZE],
  [MAIN_PIN_SIZE / 2 , MAIN_PIN_SIZE],
);

const regularPinIcon = createPinIcon(
  './img/pin.svg',
  [REGULAR_PIN_SIZE, REGULAR_PIN_SIZE],
  [REGULAR_PIN_SIZE / 2, REGULAR_PIN_SIZE],
);

const mainPin = createPin(
  tokyo.lat,
  tokyo.lng,
  true,
  mainPinIcon,
  map,
);

mainPin.on('moveend', (evt) => {
  address.value = `${evt.target._latlng.lat.toFixed(5)}, ${evt.target._latlng.lng.toFixed(5)}`;
});

const data = createAdverts(SIMILAR_ADVERT_COUNT);

data.forEach((element) => {
  createPinBaloon(
    element.location.lat,
    element.location.lng,
    createCard(element),
    regularPinIcon,
    map,
  );
});

address.value = `${tokyo.lat.toFixed(5)}, ${tokyo.lng.toFixed(5)}`;

const initMap = () => {
  map.on('whenReady', () => {
    activateElements();
  })

    .setView({
      lat: tokyo.lat,
      lng: tokyo.lng,
    }, tokyo.mapZoom);

  L.tileLayer(
    tileLayer,
    {
      attribution: tileLayerAttribution,
    },
  ).addTo(map);
};

export {
  initMap
};
