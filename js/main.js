let random = function (min, max) {
  if (min >= max) {
    return ('Неверный диапазон! Поменяйте числа местами или задйте другой диапазон!');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;

}

let randomWithDot = function (min, max, dot) {
  if (min > max || min < 0 || max <= 0) {
    return ('Неверный диапазон! Поменяйте числа местами или задйте другой диапазон!');
  }

  let dotsAfter = 10 ** dot;
  return ((Math.random() * (max - min) + min) * dotsAfter) / dotsAfter;
}
