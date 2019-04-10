const fsPromises = require('fs').promises;

module.exports = function transform(srcFile) {
  return fsPromises.readFile(`${srcFile}`, { encoding: 'utf8' })
    .then(data => data.replace(/([A-Z])/g, ''))
    .then(data => data.toUpperCase())
    .then(data => [...data].reverse().join(''));
};
