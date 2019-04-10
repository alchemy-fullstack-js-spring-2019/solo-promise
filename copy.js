const fsPromises = require('fs').promises;
const options = { encoding: 'utf8' };
function copy(src, dst) {
  return fsPromises.readFile(src, options)
    .then(data => {
      fsPromises.writeFile(dst, data, options);
    });
    
}

module.exports = copy;
