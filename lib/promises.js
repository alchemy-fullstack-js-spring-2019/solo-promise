const fsPromises = require('fs').promises;

fsPromises.readFile('1_promises.md', { encoding: 'utf8' })
  .then(console.log);
