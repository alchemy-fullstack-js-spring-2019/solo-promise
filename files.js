const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }).then(data => {
  return data;

})
  .then(data => console.log(data))
  .catch(err => {
    console.log(err);
  });

Promise.all([
  fsPromises.readFile('/1_promises.md', { encoding: 'utf8' }),
  fsPromises.readFile('/package.json', { encoding: 'utf8' }),
  fsPromises.readFile('/files.js', { encoding: 'utf8' })
]);

.then(([promises]));

Promise.resolve({
    name: 'spot',
    age: 10
});
