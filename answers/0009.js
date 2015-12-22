'use strict';

const _ = require('lodash');

function findThreeNumbersThatAddTo(num) {
  let numbersSets = [];
  for (let i = 1; i <= (num - 2); i++) {
    for (let j = i; j <= (num - i - 1); j++) {
      numbersSets.push([i, j, num - (i + j)]);
    }
  }
  return numbersSets;
}

function getProductOfPythagoreanTripletAddingTo(num) {
  let numberSets = findThreeNumbersThatAddTo(num);

  let pythagoreanTriplet = _.find(numberSets,
    numberSet => Math.pow(numberSet[0], 2) +
    Math.pow(numberSet[1], 2) ===
    Math.pow(numberSet[2], 2));

  if (pythagoreanTriplet) {
    return pythagoreanTriplet[0] * pythagoreanTriplet[1] *
    pythagoreanTriplet[2];
  } else {
    return null;
  }
}

module.exports = getProductOfPythagoreanTripletAddingTo;
