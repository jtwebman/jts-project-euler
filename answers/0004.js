'use strict';

function maxNumberByDigits(numberOfDigits) {
  let num = 9;
  for(let i = 2; i <= numberOfDigits; i++) {
    num = (num * 10) + 9;
  }
  return num;
}

function minNumberByDigits(numberOfDigits) {
  let num = 1;
  for(let i = 2; i <= numberOfDigits; i++) {
    num = (num * 10);
  }
  return num;
}

function isPalindrome(num) {
  let numStr = num.toString();
  if (numStr.length % 2 === 0) {
    let firstPart = numStr.substring(0, numStr.length / 2);
    let secondPart = numStr.substring(numStr.length / 2).
    split('').reverse().join('');
    return firstPart == secondPart;
  } else {
    return false;
  }
}

function largestPalindromeProduct(numberOfDigits) {
  let first = maxNumberByDigits(numberOfDigits);
  let second = first;
  let minNum = minNumberByDigits(numberOfDigits);
  let largest = 0;
  let product = 0;

  while(second >= minNum) {
    product = first * second;
    if (product > largest && isPalindrome(product)) {
      largest = product;
    }

    first--;
    if (first === minNum) {
      first = second;
      second--;
    }
  }

  return largest;
}

module.exports = largestPalindromeProduct;
