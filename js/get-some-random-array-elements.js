const getSomeRandomArrayElements = (array) => {
  const result = [];

  for (const item of array) {
    if (_.random(0, 1)) {
      result.push(item);
    }
  }

  return result;
};

export {getSomeRandomArrayElements};
