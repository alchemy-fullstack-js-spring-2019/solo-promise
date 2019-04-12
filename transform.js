const fsPromises = require('fs').promises;

function transform(src) {
  return fsPromises.readFile(src, 'utf8')
    .then(data => {
      return data.replace(/[A-Z]+/g, '');
    })
    .then(data => data.toUpperCase())
    .then(data => [...data].reverse().join(''));
}

module.exports = transform;
