import { setFormListeners } from './form.js';
import { initMap } from './map.js';
import { setFilterListener } from './filters.js';

initMap(); // добавялет карту
setFormListeners(); // добавляет листенеры из формы для управления поведением инпутов формы
setFilterListener();
