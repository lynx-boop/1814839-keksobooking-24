const getRandom = (lower, upper) => {
  if (lower < upper || lower < 0) {
    const min = Math.ceil(lower); // а можно вот так сделать, не добавлять новые переменные min max, как в видео?
    const max = Math.floor(upper);
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    throw new getRandom;
  }
};

console.log(getRandom(12, 20));

const getFloatingRandom = (lower, upper, dot) => {
  if (lower > upper || lower < 0) {
    return ('Неверный диапазон! Поменяйте числа местами или задайте другой диапазон!');
  }
  const min = lower;
  const max = upper;
  return (Math.random() * (max - min) + min).toFixed(dot);
};

console.log(getFloatingRandom(12, 24, 5));

