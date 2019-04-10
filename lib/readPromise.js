const fs = require('fs');

module.exports = function readPromise(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
}
