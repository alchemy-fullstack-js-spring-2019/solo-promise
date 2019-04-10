const fs = require('fs');

function readPromise(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);

      resolve(data);
    });
  });
}

module.exports = { readPromise };

// readPromise('./1_promises.md')
//   .then(data => 
//     /*eslint-disable-next-line*/
//     console.log(data))
//   .catch(err => 
//     /*eslint-disable-next-line*/
//     console.error(err));

// const readPromise = new Promise((resolve, reject) => {
//   fs.readFile('./1_promises.md', { encoding: 
//   'utf8' }, (err, data) => {
//     if(err) reject(err);
  
//     resolve (data);
//   });
// });
