'use strict';

function sumEvenFibonacci(maxFibonacci) {
  let fibonacciNum1 = 1;
  let fibonacciNum2 = 2;
  let sum = 2; //start with a sum of 2
  let nextNumber = fibonacciNum1 + fibonacciNum2;

  while(nextNumber <= maxFibonacci) {
    if (nextNumber % 2 === 0) {
      sum += nextNumber;
    }

    //Shift values
    fibonacciNum1 = fibonacciNum2;
    fibonacciNum2 = nextNumber;

    nextNumber = fibonacciNum1 + fibonacciNum2;
  }

  return sum;
}

module.exports = sumEvenFibonacci;
