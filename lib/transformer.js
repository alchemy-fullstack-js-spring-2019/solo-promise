const fsPromises = require('fs').promises;

function transformer(src) {
  const pattern = /[A-Z]/g;
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(message => message.replace(pattern, '').toUpperCase())
    .then(capped => [...capped].reverse().join(''));
}

module.exports = transformer;
