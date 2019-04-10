const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    return Promise.all([
      data,
      fsPromises.readFile('./package.json', { encoding: 'utf8' })
    ]);
  })
  .then(([promisesMd, packageJson]))
  .catch(err => {
    console.log(err);
  });


  // Promise.all([
  //   fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }),
  //   fsPromises.readFile('./package.json', { encoding: 'utf8' }),
  //   fsPromises.readFile('./files.js', { encoding: 'utf8' })
  // ])
  //   .then(([promisesMd, packageJson, filesJs]) => {
  //     console.log(promisesMD);
  //   });


// dog API
Promise.resolve({
  name: 'spot',
  age: 5
});
