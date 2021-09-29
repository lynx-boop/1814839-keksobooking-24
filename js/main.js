const getRandom = (min, max) => {
  if (min < max || min < 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    throw new getRandom;
  }
};

console.log(getRandom(12, 20));

const getFloatingRandom = (min, max, dot) => {
  if (min > max || min < 0) {
    return ('Неверный диапазон! Поменяйте числа местами или задайте другой диапазон!');
  }

  const dotsAfter = 10 ** dot;
  return ((Math.random() * (max - min) + min) * dotsAfter) / dotsAfter;
};

console.log(getFloatingRandom(12, 24));

