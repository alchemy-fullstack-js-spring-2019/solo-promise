const fs = require('fs');

const options = {
  encoding: 'utf8'
};

const readPromise = src => {
  return new Promise((resolve, reject) => {
    fs.readFile(src, options, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
};

const src = './1_promises.md';

readPromise(src)
  .then(data => console.log(data))
  .catch(err => console.error(, err));
