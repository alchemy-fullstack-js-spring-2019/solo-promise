const fsPromises = require('fs').promises;

function copy(src, dest) {
  return fsPromises.readFile(src, 'utf8')
    .then(data => {
      return fsPromises.writeFile(dest, data);
    });
}

module.exports = copy;
