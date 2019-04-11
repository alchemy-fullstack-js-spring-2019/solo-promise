const fsPromises = require('fs').promises;

function copy(src, dst) {
  return fsPromises.readFile(src, 'utf8') //pending
    .then(data => {
      return fsPromises.writeFile(dst, data, { enccoding: 'utf8' });
    });
}

module.exports = { copy };
