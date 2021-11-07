import {activateElements} from './form.js';

const createMap = (lat, lng, scale, selector) => {
  const mapCanvas = L.map(selector)
    .on('load', () => {
      activateElements();
    })

    .setView({
      lat: lat,
      lng: lng,
    }, scale);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(mapCanvas);
  return mapCanvas;
};

const map = createMap(35.652832, 139.839478, 12, 'map-canvas');

const createPinIcon = (url, size, anchor) => L.icon({
  iconUrl: url,
  iconSize: size,
  iconAnchor: anchor,
});

const mainPinIcon = createPinIcon(
  './img/main-pin.svg',
  [52, 52],
  [26, 52],
);

const regularIcon = createPinIcon(
  './img/pin.svg',
  [40, 40],
  [20, 40],
);

const createPin = (lat, lng, drg, icn) => {
  const pin = L.marker(
    {
      lat: lat,
      lng: lng,
    },
    {
      draggable: drg,
      icon: icn,
    },
  );
  pin.addTo(map);
  return pin;
};

const mainPin = createPin(
  35.652832,
  139.839478,
  true,
  mainPinIcon);

const address = document.querySelector('#address');

mainPin.on('moveend', (evt) => {
  address.value = `${evt.target._latlng.lat.toFixed(5)}, ${evt.target._latlng.lng.toFixed(5)}`;
});

//

const createPinBaloon = (lat, lng, baloonCntnt) => {
  const p = createPin(lat, lng, false, regularIcon);
  p.bindPopup(baloonCntnt);
};

export {createPinBaloon};
