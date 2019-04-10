const fs = require('fs');

function readPromise(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, 'utf8', (err, data) => {
      if(err) reject(err);
      resolve(data);
    });
  });
}

readPromise('./test.txt')
  .then(data => console.log(data.toString()));
