const fsPromises = require('fs').promises;

function copy(source, dest) {
  return fsPromises.readFile(source)
    .then(data => fsPromises.writeFile(dest, data));
}

module.exports = copy;
