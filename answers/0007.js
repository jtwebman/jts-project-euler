'use strict';

function isPrime(num) {
  if (num % 2 === 0) {
    return false;
  }

  const root = Math.sqrt(num);
  let tryFactor = 3;
  while(num % tryFactor !== 0 && (tryFactor += 2) < root) {}

  if (tryFactor > root) {
    return true;
  } else {
    return false;
  }
}

function findPrimeAt(location) {
  let found = 2; // we know 1 and 2 are primes
  let currentNum = 3; // start at 3 so we can just check odd numbers
  let lastFound = 2; // prime last found as 2

  while (found <= location) {
    if (isPrime(currentNum)) {
      found++;
      lastFound = currentNum;
    }
    currentNum++;
  }

  return lastFound;
}

module.exports = findPrimeAt;
