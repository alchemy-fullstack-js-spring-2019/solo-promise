const fsPromises = require('fs').promises;

function copy(src, dst) {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => {
      fsPromises.writeFile(dst, data, { encoding: 'utf8' });
    })
    .then(data => {
      return data;
    });
}

module.exports = { copy };
