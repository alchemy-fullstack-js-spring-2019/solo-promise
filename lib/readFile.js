const fsPromises = require('fs').promises;

//read a file
fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    return fsPromises.readFile('./package.json');
  })
  .then(data => console.log(data.toString));
