'use strict';

const _ = require('lodash');

function sumMutiplesOf3And5(toNumber) {
  return _.range(3, toNumber).reduce(function(sum, value) {
    if (value % 3 === 0 || value % 5 === 0) {
      sum += value;
    }
    return sum;
  }, 0);
}

module.exports = sumMutiplesOf3And5;
