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

const createPinIcon = (url, size, anchor) => L.icon({
  iconUrl: url,
  iconSize: size,
  iconAnchor: anchor,
});

const createPin = (lat, lng, drg, icn, map) => {
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

const createPinBaloon = (lat, lng, baloonCntnt, icn, map) => {
  const p = createPin(lat, lng, false, icn, map);
  p.bindPopup(baloonCntnt);
};

export {
  createPinBaloon,
  createMap,
  createPin,
  createPinIcon
};
