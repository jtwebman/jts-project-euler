'use strict';

var expect = require('must');

describe('Question 1 tests', () => {

  var functions = [{
    name: 'original',
    func: require('../../answers/0001')
  }, {
    name: 'fastest',
    func: require('../../answers/0001-correct')
  }];

  functions.forEach(callFunction => {

    it(callFunction.name + ': sum of 10 is 23', () => {
      expect(callFunction.func(10)).to.equal(23);
    });

    it(callFunction.name + ': sum of 1000 is 233168', () => {
      expect(callFunction.func(1000)).to.equal(233168);
    });

  });

});
