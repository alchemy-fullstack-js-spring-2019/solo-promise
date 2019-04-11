const fsPromises = require('fs').promises;

module.exports = function transformer(src) {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => data.replace(/[A-Z]/g, ''))
    .then(noCaps => noCaps.toUpperCase())
    .then(allCaps => [...allCaps].reverse().join(''))
}
