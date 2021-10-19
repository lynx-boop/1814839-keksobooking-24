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

const genAvatarUrl = () => {
  const num = _.random(1, 10);
  if (num < 10) {
    return `img/avatars/user0${num}.png`;
  }
  return `img/avatars/user${num}.png`;
};

let genType = () => {
  const randomType = _.random(0, TYPE_LIST.length - 1);
  return randomType
};

const getRandomArrayElement = (array) => {
array[_.random(0, array.length - 1)];
return
}

const createAdvert = () => {
  // console.log(1);
  return {
    author: {
      avatar: genAvatarUrl(),
    },
    offer: {
      title: getRandomArrayElement(TITLE_LIST),
      address: location.lat + location.lng,
      price: _.random(PRICE_MIN, PRICE_MAX),
      type: getRandomArrayElement(TYPE_LIST),
      rooms: _.random(ROOM_MIN, ROOM_MAX),
      guests: _.random(GUEST_MIN, GUEST_MAX),
      checkin: getRandomArrayElement(CHECKIN_LIST),
      checkout: getRandomArrayElement(CHECKOUT_LIST),
      features: ???,
      description: getRandomArrayElement(DESCRIPTION_LIST),
      photos: ???,
    },
    location: {
      lat: _.random(35.65000, 35.70000),
      lng: _.random(35.65000, 35.70000),
    },
  };
};

console.log(createAdvert());


// let getLocation = () => {
//   return {
//     'lat': _.random(35.65000, 35.70000),
//     'lng': _.random(139.70000, 139.80000),
//   }
// };
