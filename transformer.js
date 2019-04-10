const fsPromises = require('fs').promises;
const fs = require('fs');

function readFilePromise(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, 'utf8', (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

readFilePromise('./1_promises.md')
  .then(data => console.log(data.toString()));

fsPromises.readFile('./3_promises.md', 'utf8')
  .then(data => {
    return data.replace(/[A-Z]/g, '');
  })
  .then(data => data.toUpperCase())
  .then(data => [...data].reverse().join(''))
  .then(console.log);
