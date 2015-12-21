'use strict';

var expect = require('must');
var findLargestPrimeFactor = require('../../answers/0003');

describe('Question 3 tests', () => {

  it('largest prime factor of 13195 is 59', () => {
    expect(findLargestPrimeFactor(13195)).to.equal(29);
  });

  it('largest prime factor of 600,851,475,143 is 6857', () => {
    expect(findLargestPrimeFactor(600851475143)).to.equal(6857);
  });

});
