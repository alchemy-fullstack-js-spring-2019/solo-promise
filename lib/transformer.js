const fsPromises = require('fs').promises;

function transformer(src) {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => data.replace(/[A-Z]/g, ''))
    .then(data => data.toUpperCase())
    .then(data => [...data].reverse().join(''));
}

module.exports = transformer;
