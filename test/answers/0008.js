'use strict';

var expect = require('must');
var findLargestProduct = require('../../answers/0008');

describe('Question 8 tests', () => {

  it('largest product in series of 4 is 5832', () => {
    expect(findLargestProduct(4)).to.equal(5832);
  });

  it('largest product in series of 13 is 23,514,624,000', () => {
    expect(findLargestProduct(13)).to.equal(23514624000);
  });
});
