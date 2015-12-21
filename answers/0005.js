'use strict';

function smallestMultipleFromRange(max) {
  let tryVal = (max * (max - 1)) - max;
  let lastCheckVal = max;
  do {
    tryVal += max;
    lastCheckVal = max;
    while (tryVal % lastCheckVal === 0 && lastCheckVal--) {}
  } while (lastCheckVal > 0);
  return tryVal;
}

module.exports = smallestMultipleFromRange;
