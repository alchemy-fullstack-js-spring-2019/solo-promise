const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    return fsPromises.readFile('./package.json');
  })
  .then(data => console.log(data.toString));
