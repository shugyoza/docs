/* eslint-disable @typescript-eslint/no-var-requires */

/* OK */
const data = require('./package.json');
console.log(data);

/* OK */
const fs = require('fs');
fs.readFile('package.json', function (error, data) {
  if (error) throw error;
  console.log(JSON.parse(data));
});

/* SyntaxError: Identifier 'data' has already been declared */
const fs = require('fs');
fs.readFile('package.json', function (error, data) {
  if (error) throw error;
  const data = JSON.parse(data);
  console.log(data);
});

/* Error: Cannot find module 'package.json' */
const data = require('package.json');
console.log(data);

/* OK */
const fs = require('fs');
fs.readFile('./package.json', function (error, data) {
  if (error) throw error;
  const output = JSON.parse(data);
  console.log(output);
});
