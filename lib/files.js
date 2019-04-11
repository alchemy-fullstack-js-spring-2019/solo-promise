const fsPromises = require('fs').promises;

fsPromises.readFile('package.json', { encoding: 'utf8' })
  .then(data => {
    return data;
  })
  .then(data => console.log(data))
  .catch(err => {
    console.error(err);
  });

// Promise.race([
//   fsPromises.readFile('1_promises.md', { encoding: 'utf8' }),
//   fsPromises.readFile('package.json', { encoding: 'utf8' }),
// ])
//   .then(([promisesMd, packageJson]) => {
//     console.log(promisesMd, packageJson);
//   });

// Promise.resolve({
//   name: 'spot',
//   age: 10
// });
