const fs = require('fs');

function readPromiseV2(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = readPromiseV2;
