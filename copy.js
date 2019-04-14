const fsPromises = require('fs').promises;
//const encoding = { encoding: 'utf8' };
function copy(source, dest) {
  return fsPromises.readFile(source, { encoding: 'utf8' })
    .then(data => fsPromises.writeFile(dest, data, { encoding: 'utf8' }));
}

module.exports = copy;
