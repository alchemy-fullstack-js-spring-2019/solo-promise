const fsPromises = require('fs').promises;

function transform(src) {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => data.replace(/[A-Z]/g, ''))
    .then(noCaps => noCaps.toLowerCase())
    .then(allCaps => allCaps.toUpperCase());
}

module.exports = transform;
