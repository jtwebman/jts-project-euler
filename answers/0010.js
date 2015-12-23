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

function sumOfPrimeNumbersTo1(num) {
  if (num <= 1) return 0;
  if (num === 2) return 2;
  let sum = 2;

  for (let i = 3; i <= num; i += 2) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}

function sumOfPrimeNumbersTo2(num) {
  if (num <= 1) return 0;
  if (num === 2) return 2;
  const root = Math.sqrt(num);

  let sieve = new Array(num + 1);
  sieve.fill(false);
  sieve[0] = true;
  sieve[1] = true;

  //remove all evens
  for (let i = 4; i <= num; i += 2) {
    sieve[i] = true;
  }

  for (let n = 3; n <= root; n += 2) {
    if (!sieve[n]) {
      for (let m = (n * n); m <= num; m += (n * 2)) {
        sieve[m] = true;
      }
    }
  }

  return sieve.reduce((sum, notPrime, i) => {
    if (!notPrime) sum += i;
    return sum;
  }, 0);
}

function sumOfPrimeNumbersTo3(num) {
  if (num <= 1) return 0;
  if (num === 2) return 2;
  let notPrime = {};
  let sum = 2;

  for (let i = 3; i <= num; i += 2) {
    if (!notPrime[i] && isPrime(i)) {
      sum += i;
      for (let j = i * i; j <= num; j += i * 2) {
        notPrime[j] = true;
      }
    }
  }

  return sum;
}

function sumOfPrimeNumbersTo4(num) {
  if (num <= 1) return 0;
  if (num === 2) return 2;
  const root = Math.sqrt(num);

  let sievebound =  Math.floor((num-1) / 2);
  let sieve = new Array(sievebound + 1);
  sieve.fill(false);
  sieve[0] = true; //make 1 based array for easy math

  for (let i = 1; i <= sievebound; i++) {
    if (!sieve[i]) {
      for (let j = 2 * i * (i + 1); j <= sievebound; j += 2 * i + 1) {
        sieve[j] = true;
      }
    }
  }

  return sieve.reduce((sum, notPrime, i) => {
    if (!notPrime) sum += 2 * i + 1;
    return sum;
  }, 2);
}

module.exports = sumOfPrimeNumbersTo4;
