'use strict';

function findLargestPrimeFactor(num, result) {
  const root = Math.sqrt(num); //Max number to try
  result = result || []; //default to array

  let tryFactor = 2;

  if(num % 2 !== 0){ //iterate only odd numbers
    tryFactor = 3;
    while(num % tryFactor !== 0 && (tryFactor += 2) < root) {}
  }

  //Push found factor or num as it is a prime number
  let factor = (tryFactor <= root) ? tryFactor : num;
  result.push(factor);

  if (factor === num) { // found them all return largest
    return result[result.length - 1];
  }

  //recursive call haven't found them all
  return findLargestPrimeFactor(num/factor, result);
}

module.exports = findLargestPrimeFactor;
