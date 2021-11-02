const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const offerTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
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
  advertElement.querySelector('.popup__description').textContent = advert.offer.description;
  advertType.textContent = offerTypes[advert.offer.type];

  if (advert.offer.features.length > 0) {
    popupFeatures.innerHTML = '';
    advert.offer.features.forEach((feature) => {
      const featureItem =  document.createElement('li');
      featureItem.classList.add('popup__feature', `popup__feature--${feature}`);
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

export {createCard};
