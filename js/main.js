import {createAdverts} from './data.js';
import {createCard} from './card.js';

const SIMILAR_ADVERT_COUNT = 10;
const map = document.querySelector('.map__canvas');
const data = createAdverts(SIMILAR_ADVERT_COUNT);
const card = createCard(data[0]);

map.appendChild(card);
