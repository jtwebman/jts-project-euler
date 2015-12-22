'use strict';

const _ = require('lodash');

function sumDivisibleBy(target, num) {
  let p = Math.floor(target / num);
  return Math.floor(num * (p * (p + 1)) / 2);
}

function sumMutiplesOf3And5(num) {
  let target = num - 1;
  return sumDivisibleBy(target, 3) + sumDivisibleBy(target, 5) -
  sumDivisibleBy(target, 15);
}

module.exports = sumMutiplesOf3And5;
