const API_URL = 'https://24.javascript.pages.academy/keksobooking';

const loadData = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error ('Ошибка полученя данных!');
    })
    .then((data) => onSuccess(data))
    .catch(() => onFail());
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {loadData, sendData};
