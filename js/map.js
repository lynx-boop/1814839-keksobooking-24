import { activateElements } from './form.js';
import { createCard } from './card.js';
import { loadData } from './api.js';
import { showAlert } from './utils.js';
import { setFilterListener } from './filters.js';

const address = document.querySelector('#address');
const tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileLayerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// let offers = [];
// сложим сюда точки на карте

const MAIN_PIN_SIZE = 52;
const REGULAR_PIN_SIZE = 40;
const OFFER_NUMBER = 10;

const tokyo = {
  lat: 35.675,
  lng: 139.745,
  mapZoom: 13,
};

const map = L.map('map-canvas')
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

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAIN_PIN_SIZE, MAIN_PIN_SIZE],
  iconAnchor: [MAIN_PIN_SIZE / 2, MAIN_PIN_SIZE],
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

const setAddress = () => {
  address.value = `${tokyo.lat.toFixed(5)}, ${tokyo.lng.toFixed(5)}`;
};

// создает 10 пинов
const renderRegularPin = (element) => {
  const regularPinIcon = L.icon({
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
      icon: regularPinIcon,
    },
  );

  regularPin
    .addTo(pinsGroup)
    .bindPopup(createCard(element));
};

const renderPins = (data) => {
  data.forEach((element) => {
    renderRegularPin(element);
  });
};

// отдает координаты в инпут адреса
mainPin.on('move', (evt) => {
  address.value = `${evt.target._latlng.lat.toFixed(5)}, ${evt.target._latlng.lng.toFixed(5)}`;
});

const onDataLoad = (data) => {
  renderPins(data.slice(0, OFFER_NUMBER));
  setFilterListener(data);
};

const onDataError = () => {
  showAlert();
};

const initMap = () => {
  map.whenReady(() => {
    activateElements();
    setAddress();
    loadData(onDataLoad, onDataError);
  });

  map.setView({
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

//FIXME вот тут прописываю ресеты для меток, поля координат мэйнпина и карты, но они не работают :(
const resetMap = () => {
  map.setView({
    lat: tokyo.lat,
    lng: tokyo.lng,
  }, tokyo.mapZoom);

  mainPin.lat = tokyo.lat;
  mainPin.lng = tokyo.lng;
};

const resetRegularPins = () => {
  pinsGroup.eachLayer((layer) => { layer.remove(); });
};

export { initMap, renderPins, setAddress, resetMap, resetRegularPins, OFFER_NUMBER };
