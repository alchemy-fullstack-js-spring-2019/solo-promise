const fs = require('fs');

function readPromise(srcFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(srcFile, { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = readPromise;
