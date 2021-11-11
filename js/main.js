import {setFormListeners} from './form.js';
import {initMap} from './map.js';
import {loadData} from './fetch.js';

initMap(); // добавялет карту
setFormListeners(); // добавляет листенеры из формы для управления поведением инпутов формы
loadData();
