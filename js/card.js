const offerTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createCard = (ad) => {
  const advert = cardTemplate.cloneNode(true);
  const advertType = advert.querySelector('.popup__type');
  const popupPhotos = advert.querySelector('.popup__photos');
  const photoElement = advert.querySelector('.popup__photo');
  const popupFeatures = advert.querySelector('.popup__features');

  advert.querySelector('.popup__avatar').src = ad.author.avatar;
  advert.querySelector('.popup__title').textContent = ad.offer.title;
  advert.querySelector('.popup__text--address').textContent = ad.offer.address;
  advert.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  advert.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  advert.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkin}`;
  advert.querySelector('.popup__description').textContent = ad.offer.description;
  advertType.textContent = offerTypes[ad.offer.type];

  if ('features' in ad.offer && ad.offer.features.length > 0) {
    popupFeatures.innerHTML = '';
    ad.offer.features.forEach((feature) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature', `popup__feature--${feature}`);
      popupFeatures.appendChild(featureItem);
    });
  }

  if ('photos' in ad.offer && ad.offer.photos.length > 0) {
    popupPhotos.innerHTML = '';
    ad.offer.photos.forEach((photo) => {
      const photoItem = photoElement.cloneNode(true);
      photoItem.src = photo;
      popupPhotos.appendChild(photoItem);
    });
  }

  return advert;
};

export { createCard };
