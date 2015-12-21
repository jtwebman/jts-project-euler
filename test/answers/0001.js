'use strict';

var expect = require('must');
var sumMutiplesOf3And5 = require('../../answers/0001');

describe('Question 1 tests', () => {

  it('sum of 10 is 23', () => {
    expect(sumMutiplesOf3And5(10)).to.equal(23);
  });

  it('sum of 1000 is 233168', () => {
    expect(sumMutiplesOf3And5(1000)).to.equal(233168);
  });

});
