const getRandomArrayElement = (array) => (array[_.random(0, array.length - 1)]);

const ALERT_SHOW_TIME = 5000;
const getSomeRandomArrayElements = (array) => {
  const result = [];

  for (const item of array) {
    if (Math.random() < 0.5) {
      result.push(item);
    }
  }

  return result;
};

//показывает сообщение об ошибке
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomArrayElement,
  getSomeRandomArrayElements,
  showAlert
};
