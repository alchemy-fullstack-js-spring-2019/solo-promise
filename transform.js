const fsPromises = require('fs').promises;

function transform(source) {
  return fsPromises.readFile(source, 'utf8')
    .then(data => data.replace(/[A-Z]/g, ''))
    .then(allLows => allLows.toUpperCase())
    .then(allCaps => [...allCaps].reverse().join(''));
}

module.exports = transform;
