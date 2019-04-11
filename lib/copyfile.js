const fsPromises = require('fs').promises;

const copyFile = (src, dest) => {
  fsPromises.readFile(src, 'utf8')
    .then(fileData  =>
      fsPromises.writeFile(dest, fileData, 'utf8')
    );
};

module.exports = copyFile;
