import { setFormListeners, disablePage } from './form.js';
import { initMap } from './map.js';

disablePage();
initMap(); // добавялет карту
setFormListeners(); // добавляет листенеры из формы для управления поведением инпутов формы
