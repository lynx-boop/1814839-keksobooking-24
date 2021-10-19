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

// ПЕРЕМЕННЫЕ
const PRICE_MIN = 1000;
const PRICE_MAX = 30000;
const ROOM_MIN = 1;
const ROOM_MAX= 60;
const GUEST_MIN = 1;
const GUEST_MAX = 10;

// ФУНКЦИИ
const genAvatarUrl = () => {
  const num = _.random(1, 10);
  if (num < 10) {
    return `img/avatars/user0${num}.png`;
  }
  return `img/avatars/user${num}.png`;
};

const getRandomArrayElement = (array) => (array[_.random(0, array.length - 1)]);

const getSomeRandomArrayElements = (array) => {
  let result = [];

  for (const feature of array) {
    if (_.random(0,1)) {
      result.push(feature);
    }
  }

  return result;
};

// ОСНОВНАЯ ФУНКЦИЯ ДЗ
const createAdvert = () => {
  const lt = _.random(35.65000, 35.70000).toFixed(5);
  const lg = _.random(35.65000, 35.70000).toFixed(5);

  return {
    author: {
      avatar: genAvatarUrl(),
    },
    location: {
      lat: lt,
      lng: lg,
    },
    offer: {
      title: getRandomArrayElement(TITLE_LIST),
      address: `${lt}, ${lg}`,
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

for (let i = 0; i < 10; i++) {
  console.log(createAdvert());
}
