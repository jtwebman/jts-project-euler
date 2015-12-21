'use strict';

var expect = require('must');
var sumEvenFibonacci = require('../../answers/0002');

describe('Question 2 tests', () => {

  it('sum at max 89 is 44', () => {
    expect(sumEvenFibonacci(89)).to.equal(44);
  });

  it('sum at max 4,000,000 is 4613732', () => {
    expect(sumEvenFibonacci(4000000)).to.equal(4613732);
  });

});
