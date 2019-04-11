const fsPromises = require('fs').promises;

function transform(src) {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => {
      return data.replace((/[A-z]/g, ''));
    })
    .then(noCaps => {
      return noCaps.toLowerCase();
    })
    .then(allCaps => {
      return allCaps.toUpperCase();
    });
}
console.log(transform('./demoFile.md'));

module.exports = transform;
