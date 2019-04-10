const fs = require('fs');

function readFilePromise(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

readFilePromise('./write.md')
  .then(data => console.log('success', data))
  .then(err => console.log('error', err));

module.exports = readFilePromise;
