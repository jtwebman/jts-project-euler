'use strict';

var expect = require('must');
var sumSquareDiff = require('../../answers/0006');

describe('Question 6 tests', () => {

  it('sum square difference to 10 is 2640', () => {
    expect(sumSquareDiff(10)).to.equal(2640);
  });

  it('sum square difference to 100 is 25164150', () => {
    expect(sumSquareDiff(100)).to.equal(25164150);
  });
});
