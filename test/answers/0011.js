'use strict';

var expect = require('must');
var largestProduct = require('../../answers/0011');

describe('Question 11 tests', () => {

  it('largest product with 4 adjacent numbers in the grid', () => {
    expect(largestProduct(4)).to.equal(70600674);
  });

});
