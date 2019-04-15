function copy(src, dst) {
  const fsPromises = require('fs').promises;
  
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(fileContents => {
      return fsPromises.writeFile(dst, fileContents);
    });
}

module.exports = copy;
