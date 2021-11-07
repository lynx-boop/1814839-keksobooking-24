import {setFormListeners} from './form.js';
import './map.js';
import {createAdverts} from './data.js';
import {createPinBaloon} from './map.js';
import {createCard} from './card.js';

const SIMILAR_ADVERT_COUNT = 10;
const data = createAdverts(SIMILAR_ADVERT_COUNT);

setFormListeners();

data.forEach((element) => {
  createPinBaloon(
    element.location.lat,
    element.location.lng,
    createCard(element),
  );
});
