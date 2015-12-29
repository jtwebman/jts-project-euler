'use strict';

function getTriangleNumber(num) {
  return num * (num + 1) / 2;
}

function factors(num) {
  let factors = [1, num];

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      factors.push(i);
      if (num / i !== i) {
        factors.push(num / i);
      }
    }
  }
  factors.sort(function(a, b){return a - b;});

  return factors;
}

function firstTriangleNumberDivisorsOver(num) {
  let i = num;
  let triangleNumber = getTriangleNumber(i);

  while(factors(triangleNumber).length <= num) {
    i++;
    triangleNumber = getTriangleNumber(i);
  }

  return triangleNumber;
}

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

function allPrimesTo(num) {
  if (num < 1) {
    return [];
  } else if(num === 1) {
    return [1];
  } else if(num === 2) {
    return [1, 2];
  } else {
    let currentPrimes = [1, 2];
    let currentNum = 3; // start at 3 so we can just check odd numbers

    while (currentNum <= num) {
      if (isPrime(currentNum)) {
        currentPrimes.push(currentNum);
      }
      currentNum++;
    }

    return currentPrimes;
  }
}

function firstTriangleNumberDivisorsOver2(num) {
  let checkNumber = 3; //n
  let divisors = 2; //dn
  let cnt= 0;
  let primes = allPrimesTo(1000); //16-bit max int

  while (cnt <= num) {
    checkNumber++;
    let n1 = checkNumber;

    if (n1 % 2 === 0) {
      n1 = n1 / 2;
    }

    let Dn1 = 1;

    for (let i = 0; i < primes.length; i++) {
      if (primes[i] * primes[i] > n1) {
        Dn1 = 2 * Dn1;
        break;
      }

      let exponent = 1;

      while (n1 % primes[i] === 0) {
        exponent++;
        n1 = n1 / primes[i];
      }

      if (exponent > 1) {
        Dn1 = Dn1 * exponent;
      }

      if (n1 === 1) {
        break;
      }
    }
    cnt = divisors * Dn1;
    divisors = Dn1;
  }
  return checkNumber * (checkNumber - 1) / 2;
}

module.exports = firstTriangleNumberDivisorsOver;
