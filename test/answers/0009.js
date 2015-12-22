'use strict';

var expect = require('must');
var getProductOfPythagoreanTripletAddingTo = require('../../answers/0009');

describe('Question 9 tests', () => {

  it('product added pythagorean triplet of 12 is 60', () => {
    expect(getProductOfPythagoreanTripletAddingTo(12)).to.equal(60);
  });

  it('product added pythagorean triplet of 1000 is 31875000', () => {
    expect(getProductOfPythagoreanTripletAddingTo(1000)).to.equal(31875000);
  });
});
