const getRandomArrayElement = (array) => (array[_.random(0, array.length - 1)]);

const getSomeRandomArrayElements = (array) => {
  const result = [];

  for (const item of array) {
    if (Math.random() < 0.5) {
      result.push(item);
    }
  }

  return result;
};

export {
  getRandomArrayElement,
  getSomeRandomArrayElements
};
