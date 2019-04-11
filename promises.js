const fsPromises = require('fs').promises;

const read = fsPromises.readFile('./package.json', { encoding: 'utf8' })
  .then(data => {
    return Promise.all([
      Promise.resolve(data),
      fsPromises.readFile('./package.json', { encoding: 'utf8' })
    ]);
  })
  .then(([promisePackageJson, promisePromisesMd]) => console.log(promisePackageJson, promisePromisesMd))
  .catch(err => {
    console.error(err);
  });

const write = fsPromises.writeFile('write.json', 'Write it here in JSON', 'utf8')
  .then(() => {
    console.log('Ok');
  })
  .catch(console.log());

module.exports = {
  read,
  write
};
