const fsPromises = require('fs');

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    return data.replace(/[A-Z]/g, '');
  })
  .then(data => data.toUpperCase())
  .then(data => [...data].reverse().join(''))
  .then(console.log);
