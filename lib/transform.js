const fsPromises = require('fs').promises;

fsPromises.readFile('./README.md', { encoding: 'utf8' })
  .then(data => {
    return data.replace(/[A-Z]/g, '');
  })
  .then(data => data.toUpperCase());
  .then(data => [...data].reverse().join(''));
  .then(console.log);
