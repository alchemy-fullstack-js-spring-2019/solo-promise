const fsPromises = require('fs').promises;
const options = { encoding: 'utf8' };

function transform(src) {
  return fsPromises.readFile(src, options)
    .then(data => data.replace(/[A-Z]/g, ''))
    .then(noCaps => noCaps.toUpperCase())
    .then(allCaps => [...allCaps].reverse().join(''));  
}

module.exports = transform;
