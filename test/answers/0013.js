'use strict';

var expect = require('must');
var sumDigitsFirst = require('../../answers/0013');

describe('Question 13 tests', () => {

  it('first 10 digits of sum of large numbers', () => {
    expect(sumDigitsFirst(10)).to.equal('5537376230');
  });

});
