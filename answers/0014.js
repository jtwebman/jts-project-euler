'use strict';

function longestCollatzSeqStartingUnder(num) {
  let longestCollatzSeq = 0;
  let longestStartNumber = 0;
  let numbersChecked = {};

  for (let i = 1; i <= num; i++) {
    let currentNumber = i;
    let count = 0;

    while (currentNumber !== 1) {
      count++;
      if (currentNumber % 2 === 0) {
        currentNumber = currentNumber / 2;
      } else {
        currentNumber = 3 * currentNumber + 1;
      }

      if (numbersChecked[currentNumber]) {
        count += numbersChecked[currentNumber];
        break;
      }
    }

    numbersChecked[i] = count;

    if (count > longestCollatzSeq) {
      longestCollatzSeq = count;
      longestStartNumber = i;
    }
  }

  return longestStartNumber;
}

module.exports = longestCollatzSeqStartingUnder;
