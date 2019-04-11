const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    return Promise.all([
      Promise.resolve(data),
      fsPromises.readFile('./package.json', { encoding: 'utf8' })
    ]);
  })
  .then(([promisesMd, packageJson]) => console.log(packageJson))
  .catch(err => {
    console.log(err);
  });

Promise.all([
  fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }),
  fsPromises.readFile('.package.json', { encoding: 'utf8' }),
  fsPromises.readFile('./files.js', { encoding: 'utf8' }),
])
  .then(([promisesMD, packageJson, filesJs]) => {
    console.log(promisesMd);
  });

Promise.resolve({
  name: 'spot',
  age: 5
});
