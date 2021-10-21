
import {PRICE_MIN, PRICE_MAX, ROOM_MIN, ROOM_MAX, GUEST_MIN, GUEST_MAX, LAT_MIN, LAT_MAX, LNG_MIN, LNG_MAX, ADVERTS_AMOUNT} from '/js/constants.js';
import {TITLE_LIST, TYPE_LIST, CHECKIN_LIST, CHECKOUT_LIST, FEATURES_LIST, DESCRIPTION_LIST, PHOTOS_LIST} from '/js/arrays.js';
import {getRandomArrayElement} from '/js/get-random-array-element.js';
import {getSomeRandomArrayElements} from '/js/get-some-random-array-elements.js';
import {genAvatarUrl, userPicks} from '/js/gen-avatar-urls.js';


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
