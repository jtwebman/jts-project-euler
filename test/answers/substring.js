'use strict';

var expect = require('must');
var maxLengthNoRepeatedCharators = require('../../answers/substring');

describe('Substring question tests', () => {
  var try1 = 'abcdefgyafjemcownenmf,kfpekw,dlge[;;skdjw]';

  it('max non-repeated charactors in try 1', () => {
    expect(maxLengthNoRepeatedCharators(try1)).to.equal(11);
  });

  it('max non-repeated charactors in try 2', () => {
    expect(maxLengthNoRepeatedCharators('ABDEFGABEF')).to.equal(6);
  });

});
