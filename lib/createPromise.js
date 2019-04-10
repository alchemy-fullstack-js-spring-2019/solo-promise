const fs = require('fs');

function readPromise(fileToRead) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileToRead, { encoding: 'utf8' }, (err, data) => {
      if(err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

module.exports = readPromise;
