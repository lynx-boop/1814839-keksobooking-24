import {getRandomArrayElement} from '/js/get-random-array-element.js';

let userPicks = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

const genAvatarUrl = () => {
  const num = getRandomArrayElement(userPicks);
  userPicks = userPicks.filter((item) => item !== num); //кусок со стаковерфлоу, удаляет элемент из массива

  return `img/avatars/user${num}.png`;
};

export {genAvatarUrl, userPicks};
