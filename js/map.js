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

const mainPinIcon = L.icon ({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAIN_PIN_SIZE, MAIN_PIN_SIZE],
  iconAnchor: [MAIN_PIN_SIZE / 2 , MAIN_PIN_SIZE],
});

const mainPin = L.marker(
  {
    lat: tokyo.lat,
    lng: tokyo.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
).addTo(map);

const pinsGroup = L.layerGroup().addTo(map);

const data = createAdverts(SIMILAR_ADVERT_COUNT);

// создает 10 пинов
const renderRegularPins = (element) => {
  const regularPinIcon = L.icon ({
    iconUrl: './img/pin.svg',
    iconSize: [REGULAR_PIN_SIZE, REGULAR_PIN_SIZE],
    iconAnchor: [REGULAR_PIN_SIZE / 2, REGULAR_PIN_SIZE],
  });

  const regularPin = L.marker(
    {
      lat: element.location.lat,
      lng: element.location.lng,
    },
    {
      regularPinIcon,
    },
  );

  regularPin
    .addTo(pinsGroup)
    .bindPopup(createCard(element));
};

data.forEach((element) => {
  renderRegularPins(element);
});

// отдает координаты в инпут адреса
address.value = `${tokyo.lat.toFixed(5)}, ${tokyo.lng.toFixed(5)}`;
mainPin.on('moveend', (evt) => {
  address.value = `${evt.target._latlng.lat.toFixed(5)}, ${evt.target._latlng.lng.toFixed(5)}`;
});
//

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
