const fsPromises = require('fs').promises;

// fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
//   .then(data => {
//     return fsPromises.readFile('../');
//   })
//   .then(data => console.log(data))

//   .catch(error => {
//     console.log(error);
//   });

// Promise.all([
//   fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }),
//   fsPromises.readFile('./package.json', { encoding: 'utf8' }),
//   fsPromises.readFile('./files.js', { encoding: 'utf8' }),
// ])
//     .then(([promisesMd, packageJson, filesJs])) => {
//         console.log(promisesMd);
//     };

