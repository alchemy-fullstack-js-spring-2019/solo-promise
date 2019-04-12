const fsPromises = require('fs').promises;

function transform(src) {
  return fsPromises.readFile(src, { encoding: 'utf8'})
    .then(data => {
      return data.replace(/[A-Z]/g, '');
    })
    .then(noCaps => {
      return noCaps.toUpperCase();
    })
    .then(allCaps => {
      return allCaps.split('').reverse().join('');
    })
    .catch(err => console.log(err));
}

module.exports = transform;

