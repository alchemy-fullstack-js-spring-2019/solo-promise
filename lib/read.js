const fsPromises = require('fs').promises;

fsPromises.readFile('lib/files.js', { encoding: 'utf8' })
  .then(data => {
    return data;
  })
  .then(data => console.log(data));
