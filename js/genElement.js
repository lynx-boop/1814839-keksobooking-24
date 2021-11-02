import {createAdverts} from './data.js';

const map = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getCardType = (advert) => {
  switch (advert.offer.type) {
    case 'flat':
      return 'Квартира';

    case 'bungalow':
      return 'Бунгало';

    case 'house':
      return 'Дом';

    case 'palace':
      return 'Дворец';

    case 'hotel':
      return 'Отель';

    default:
      return 'Свинарник! Как у меня дома :)'; // throw new Error('Unknown card type ' + advert.offer.type);
  }
};

const createCard = (advert) => {
  const advertElement = cardTemplate.cloneNode(true);
  const advertType = advertElement.querySelector('.popup__type');
  const popupPhotos = advertElement.querySelector('.popup__photos');
  const photoElement = advertElement.querySelector('.popup__photo');
  const popupFeatures = advertElement.querySelector('.popup__features');


  advertElement.querySelector('.popup__avatar').src = advert.author.avatar;
  advertElement.querySelector('.popup__title').textContent = advert.offer.title;
  advertElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  advertElement.querySelector('.popup__text--price').textContent = `${advert.offer.price} ₽/ночь`;
  advertElement.querySelector('.popup__text--capacity').textContent =`${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkin}`;
  advertElement.querySelector('.popup__features').textContent = advert.offer.features;
  advertElement.querySelector('.popup__description').textContent = advert.offer.description;
  advertType.textContent = getCardType(advert); //Отель

  if (advert.offer.features.length > 0) {
    popupFeatures.innerHTML = '';
    advert.offer.features.forEach((feature) => {
      const featureItem =  document.createElement('li');
      featureItem.classList.add('popup__feature', `popup__feature--${  feature}`);
      popupFeatures.appendChild(featureItem);
    });
  }

  if (advert.offer.photos.length > 0) {
    popupPhotos.innerHTML = '';
    advert.offer.photos.forEach((photo) => {
      const photoItem = photoElement.cloneNode(true);
      photoItem.src = photo;
      popupPhotos.appendChild(photoItem);
    });
  }

  return advertElement;
};


const similarAdverts = createAdverts();

const card = createCard(similarAdverts[0]);
map.appendChild(card);


// Предотвращает появление пустых элементов в обьявлении
//FIXME вроде как не работает, надо проверить, не понимаю этот кусок

// const templateFragment = document.createDocumentFragment();

// similarAdverts.array.forEach((element) => {
//   const templateItem = popupTemplate.querySelector(`.popup__${  element}`);

//   if (templateItem) {
//     templateFragment.append(templateItem);
//   }

// });

// popupTemplate = '';
// popupTemplate.appendChild(templateFragment);
