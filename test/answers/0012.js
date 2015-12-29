'use strict';

var expect = require('must');
var firstTriangleNumberDivisorsOver = require('../../answers/0012');

describe('Question 12 tests', () => {

  it('first triangle number with over 5 divisors', () => {
    expect(firstTriangleNumberDivisorsOver(5)).to.equal(28);
  });

  it('first triangle number with over 500 divisors', () => {
    expect(firstTriangleNumberDivisorsOver(500)).to.equal(76576500);
  });

});
