'use strict';

var expect = require('must');
var longestCollatzSeqStartingUnder = require('../../answers/0014');

describe('Question 14 tests', () => {

  it('longest Collatz seq starting under 1,000,000', () => {
    expect(longestCollatzSeqStartingUnder(1000000)).to.equal(837799);
  });

});
