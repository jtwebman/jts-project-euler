'use strict';

function maxLengthNoRepeatedCharators(str) {
  let maxString = '';
  let currentCheck = {};
  let currentMaxString = '';
  let chars = str.split('');

  for (let i = 0; i < chars.length - maxString.length; i++) {
    if (!currentCheck[chars[i]]) {
      currentCheck[chars[i]] = true;
      currentMaxString += chars[i];
    } else {
      currentCheck = {};
      if (maxString.length < currentMaxString.length) {
        maxString = currentMaxString;
      }
      i = i - currentMaxString.length + 1;
      currentMaxString = '';

    }
  }

  return maxString;
}

function maxLengthNoRepeatedCharators2(str) {
  let chars = str.split('');
  let len = chars.length;
  let visited = {};
  let maxLength = 1;
  let currentLength = 1;
  visited[chars[0]] = 0;

  for (let i = 1; i < len; i++) {
    let prevIndex = visited[chars[i]];

    if (typeof prevIndex === 'undefined' || (i - currentLength) > prevIndex) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
      currentLength = i - prevIndex;
    }
    visited[chars[i]] = i;
  }
  // check end isn't the longest
  if (currentLength > maxLength) {
    maxLength = currentLength;
  }

  return maxLength;
}

module.exports = maxLengthNoRepeatedCharators2;
