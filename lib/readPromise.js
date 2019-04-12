const fs = require('fs');

function readPromise(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);
      console.log(data);
      resolve(data);
    });
  });
}
module.exports = readPromise;
