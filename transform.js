const fsPromises = require('fs').promises;

function transform(src) {
  let encoding = { encoding: 'utf8' };
  return fsPromises.readFile(src, encoding)
    .then(data => data.replace(/[A-Z]/g, ''))
    .then(noCaps => noCaps.toLowerCase())
    .then(allCaps => allCaps.toUpperCase());
}

module.exports = transform;
