'use strict';

const _ = require('lodash');

function sumSquareDiff(toNum) {
  let squareSum = _.range(1, toNum + 1).reduce((sum, i) => {
    sum += (i * i);
    return sum;
  }, 0);

  let sumSquare = _.range(1, toNum + 1).reduce((sum, i) => {
    sum += i;
    return sum;
  }, 0);
  sumSquare = sumSquare * sumSquare;

  if (squareSum > sumSquare) {
    return squareSum - sumSquare;
  } else {
    return sumSquare - squareSum;
  }
}

module.exports = sumSquareDiff;
