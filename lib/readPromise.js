const fs = require('fs');

function readPromise(src) {
  new Promise((resolve, reject) => {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);
      console.log(data);
      return resolve(data);
    });
  });
}
module.exports = readPromise;
