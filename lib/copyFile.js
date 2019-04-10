const fsPromises = require('fs').promises;

function copyFile(src, path) {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => {
      fsPromises.writeFile(path, data);
    });
}

module.exports = copyFile;
