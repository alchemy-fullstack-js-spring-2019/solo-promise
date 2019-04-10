const fs = require('fs');

function readPromieFile(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, 'utf8', (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

readPromieFile('../hi.txt')
  .then(data => console.log('ya did it', data))
  .catch(err => console.error('AW DANG', err));
