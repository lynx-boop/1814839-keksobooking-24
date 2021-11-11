import {renderPins} from './map.js';

const ADVERTS_COUNT = 10;

const loadData = () => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adverts) => renderPins(adverts.slice(0, ADVERTS_COUNT)));
};

export {loadData};
