import {
  getRandomArrayElement,
  getSomeRandomArrayElements
} from '/js/utils.js';

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

const PRICE_MIN = 1000;
const PRICE_MAX = 30000;
const ROOM_MIN = 1;
const ROOM_MAX= 60;
const GUEST_MIN = 1;
const GUEST_MAX = 10;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const ADVERTS_AMOUNT = 10;

let userPicks = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

const genAvatarUrl = () => {
  const num = getRandomArrayElement(userPicks);
  userPicks = userPicks.filter((item) => item !== num); //кусок со стаковерфлоу, удаляет элемент из массива

  return `img/avatars/user${num}.png`;
};

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
  return Array.from({length: count}, createAdvert);
};

// eslint-disable-next-line no-console
console.log(createAdverts(ADVERTS_AMOUNT));
