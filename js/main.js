import { setFormListeners, disableElements } from './form.js';
import { initMap } from './map.js';

disableElements();
initMap(); // добавялет карту
setFormListeners(); // добавляет листенеры из формы для управления поведением инпутов формы
