const fsPromises = require('fs').promises;

const src = '../1_promises.md';

fsPromises.readFile(src, 'utf8')
  .then(data => {
    return data.replace(/[A-Z]/g, '');
  })
  .then(data => data.toUpperCase())
  .then(data => [...data].reverse().join(''))
  .then(console.log);
