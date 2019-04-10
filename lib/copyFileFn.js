function copy(src, dst) {
  const fsPromises = require('fs').promises;
  
  return fsPromises.readFile(src)
    .then(fileContents => {
      fsPromises.writeFile(dst, fileContents);
    });
}

module.exports = copy;
