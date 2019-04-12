const fsPromises = require('fs').promises;

function copy(src, destination) {
  return fsPromises.readFile(src)
    .then(data => fsPromises.writeFile(destination, data));
}

module.exports = copy;
