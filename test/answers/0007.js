'use strict';

var expect = require('must');
var findPrimeAt = require('../../answers/0007');

describe('Question 7 tests', () => {

  it('prime at location 6 is 13', () => {
    expect(findPrimeAt(6)).to.equal(13);
  });

  it('prime at location 10001 is 13', () => {
    expect(findPrimeAt(10001)).to.equal(104743);
  });
});
