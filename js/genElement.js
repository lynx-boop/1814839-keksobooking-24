import {createAdverts} from './data.js';

const map = document.querySelector('.map');


const cardTemplate = document.querySelector('#card')
  .content;

let popupTemplate = cardTemplate.querySelector('.popup');

const popupPhotos = popupTemplate.querySelector('.popup__photos');

const photoElement = popupPhotos.querySelector('.popup__photo');

const similarAdverts = createAdverts();

similarAdverts.forEach((advert) => {
  const advertElement = popupTemplate.cloneNode(true);
  advertElement.querySelector('.popup__avatar').src = advert.author.avatar;
  advertElement.querySelector('.popup__title').textContent = advert.offer.title;
  advertElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  advertElement.querySelector('.popup__text--price').textContent = `${advert.offer.price} ₽/ночь`;

  switch (advert.offer.type) {
    case 'flat':
      advertElement.querySelector('.popup__type').textContent = 'Квартира';
      break;

    case 'bungalow':
      advertElement.querySelector('.popup__type').textContent = 'Бунгало';
      break;

    case 'house':
      advertElement.querySelector('.popup__type').textContent = 'Дом';
      break;

    case 'palace':
      advertElement.querySelector('.popup__type').textContent = 'Дворец';
      break;

    case 'hotel':
      advertElement.querySelector('.popup__type').textContent = 'Отель';
      break;

    default:
      advertElement.querySelector('.popup__type').textContent = 'Свинарник! Как у меня дома :)';
      break;
  }

  advertElement.querySelector('.popup__text--capacity').textContent =`${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkin}`;
  advertElement.querySelector('.popup__features').textContent = advert.offer.features;
  advertElement.querySelector('.popup__description').textContent = advert.offer.description;

  // FIXME: хотела сделать так, чтобы первое фото отображалось нормально, но не получилось
  //  переписать на рабочий вариант
  for (const i in advert.offer.photos) {
    if (i !== 0) {
      const photoItem = photoElement.cloneNode(true);
      photoItem.src = advert.offer.photos[i];
      popupPhotos.appendChild(photoItem);
    } else {
      popupTemplate.querySelector('.popup__photo').src = advert.offer.photos[i];
    }
  }

  map.appendChild(advertElement);
});

//Предотвращает появление пустых элементов в обьявлении

const templateFragment = document.createDocumentFragment();

similarAdverts.array.forEach((element) => {
  const templateItem = popupTemplate.querySelector(`.popup__${  element}`);

  if (templateItem) {
    templateFragment.append(templateItem);
  }

});

popupTemplate = '';
popupTemplate.appendChild(templateFragment);
