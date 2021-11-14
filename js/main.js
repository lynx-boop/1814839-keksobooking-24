import { setFormListeners } from './form.js';
import { initMap } from './map.js';
import { setFilterListeners } from './filters.js';

initMap(); // добавялет карту
setFormListeners(); // добавляет листенеры из формы для управления поведением инпутов формы
setFilterListeners();
