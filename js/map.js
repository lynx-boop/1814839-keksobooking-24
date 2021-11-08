import {activateElements} from './form.js';

const createMap = (lat, lng, mapZoom, selector) => {
  const mapCanvas = L.map(selector)
    .on('load', () => {
      activateElements();
    })

    .setView({
      lat: lat,
      lng: lng,
    }, mapZoom);

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
  return pin;
};

const createPinBaloon = (lat, lng, baloonCntnt, icon, cityMap) => {
  const pin = createPin(lat, lng, false, icon, cityMap);
  pin.bindPopup(baloonCntnt);
};

export {
  createPinBaloon,
  createMap,
  createPin,
  createPinIcon
};
