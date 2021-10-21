
import {PRICE_MIN, PRICE_MAX, ROOM_MIN, ROOM_MAX, GUEST_MIN, GUEST_MAX, LAT_MIN, LAT_MAX, LNG_MIN, LNG_MAX, ADVERTS_AMOUNT} from '/js/constants.js';

// МАССИВЫ
const TITLE_LIST = ['Заголовок-1', 'Заголовок-2', 'Заголовок-3', 'Заголовок-4'];
const TYPE_LIST = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN_LIST = ['12:00', '13:00', '14:00'];
const CHECKOUT_LIST = ['12:00', '13:00', '14:00'];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION_LIST = ['Описание-1', 'Описание-2', 'Описание-3', 'Описание-4'];
const PHOTOS_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
let userPicks = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

// ФУНКЦИИ
const getRandomArrayElement = (array) => (array[_.random(0, array.length - 1)]);

const getSomeRandomArrayElements = (array) => {
  const result = [];

  for (const item of array) {
    if (_.random(0, 1)) {
      result.push(item);
    }
  }

  return result;
};

const genAvatarUrl = () => {
  const num = getRandomArrayElement(userPicks);
  userPicks = userPicks.filter((item) => item !== num); //кусок со стаковерфлоу, удаляет элемент из массива

  return `img/avatars/user${num}.png`;
};

// ОСНОВНЫЕ ФУНКЦИИ ДЗ
const createAdvert = () => {
  const lat = _.random(LAT_MIN, LAT_MAX).toFixed(5);
  const lng = _.random(LNG_MIN, LNG_MAX).toFixed(5);

  return {
    author: {
      avatar: genAvatarUrl(),
    },
    location: {
      lat: lat,
      lng: lng,
    },
    offer: {
      title: getRandomArrayElement(TITLE_LIST),
      address: `${lat}, ${lng}`,
      price: _.random(PRICE_MIN, PRICE_MAX),
      type: getRandomArrayElement(TYPE_LIST),
      rooms: _.random(ROOM_MIN, ROOM_MAX),
      guests: _.random(GUEST_MIN, GUEST_MAX),
      checkin: getRandomArrayElement(CHECKIN_LIST),
      checkout: getRandomArrayElement(CHECKOUT_LIST),
      features: getSomeRandomArrayElements(FEATURES_LIST),
      description: getRandomArrayElement(DESCRIPTION_LIST),
      photos: getSomeRandomArrayElements(PHOTOS_LIST),
    },
  };
};

const createAdverts = (count) => {
  if (count > userPicks.length) {
    count = userPicks.length;
  }

  Array.from({length: count}, createAdvert);
};

// eslint-disable-next-line no-console
console.log(createAdverts(ADVERTS_AMOUNT));
