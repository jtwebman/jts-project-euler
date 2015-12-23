'use strict';

var expect = require('must');
var sumOfPrimeNumbersTo = require('../../answers/0010');

describe('Question 10 tests', () => {

  it('sum of prime numbers to 10 is 17', () => {
    expect(sumOfPrimeNumbersTo(10)).to.equal(17);
  });

  it('sum of prime numbers to 2,000,000 is 142,913,828,922', () => {
    expect(sumOfPrimeNumbersTo(2000000)).to.equal(142913828922);
  });

  /* Takes 16 seconds but the highest you can go in javascript for max array length
  it('sum of prime numbers to 150,000,000 is 614,333,144,695,291', () => {
    console.time('maxArray');
    expect(sumOfPrimeNumbersTo(150000000)).to.equal(614333144695291);
    console.timeEnd('maxArray');
  });
 */
});
