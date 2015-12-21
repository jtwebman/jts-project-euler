'use strict';

const fs = require('fs');
const path = require('path');
const answersFolder = __dirname + '/answers';

/* run all answers */
fs.readdirSync(answersFolder).forEach(function (file) {
  require(path.join(answersFolder, file));
});
