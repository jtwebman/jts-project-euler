'use strict';

var expect = require('must');
var largestPalindromeProduct = require('../../answers/0004');

describe('Question 4 tests', () => {

  it('largest palindrome made from product of 2-digit numbers is 9009', () => {
    expect(largestPalindromeProduct(2)).to.equal(9009);
  });

  it('largest palindrome made from product of 3-digit numbers is 906609', () => {
    expect(largestPalindromeProduct(3)).to.equal(906609);
  });

});
