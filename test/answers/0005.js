'use strict';

var expect = require('must');
var smallestMultipleFromRange = require('../../answers/0005');

describe('Question 5 tests', () => {

  it('smallest multiple from range to 10 is 2520', () => {
    expect(smallestMultipleFromRange(10)).to.equal(2520);
  });

  it('smallest multiple from range to 20 is 232,792,560', () => {
    expect(smallestMultipleFromRange(20)).to.equal(232792560);
  });
});
