const API_URL = 'https://24.javascript.pages.academy/keksobooking/data';

const loadData = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error ('Ошибка полученя данных!');
    })
    .then((data) => onSuccess(data))
    .catch(() => onFail);
};

export {loadData};
