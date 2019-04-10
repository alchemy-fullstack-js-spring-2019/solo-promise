const fs = require('fs');
const options = { encoding: 'utf8' };


function readPromise(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, options, (err, data) =>{
      if(err) return reject(err);

      resolve(data);
    });
  });
}

module.exports = readPromise;
// readPromise('./write-by-promise.txt')
//   .then(console.log);
