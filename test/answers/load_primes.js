'use strict';

const pg = require('pg');
const conString = 'postgres://postgres:199912@127.0.0.1/primes';
const startAt = 3;

function isPrime(num) {
  const root = Math.sqrt(num);
  let tryFactor = 3;
  while(num % tryFactor !== 0 && (tryFactor += 2) < root) {}

  if (tryFactor > root) {
    return true;
  } else {
    return false;
  }
}

function addIfPrime(done, client, num) {
  if (isPrime(num)) {
    console.log('found prime:', num);
    client.query('INSERT INTO "128bitprimes" (prime) VALUES ($1)',
    [num], function(err) {
      if (err) {
        done(err);
      } else {
        if (num + 2 > 2147483647) {
          done();
        } else {
          addIfPrime(done, client, num + 2);
        }
      }
    });
  } else {
    if (num + 2 > 2147483647) {
      done();
    } else {
      addIfPrime(done, client, num + 2);
    }
  }
}

it.skip('load db of prime numbers', function(done) {
  pg.connect(conString, function(err, client) {
    if(err) {
      done(err);
    } else {
      addIfPrime(done, client, startAt);
    }
  });


});
