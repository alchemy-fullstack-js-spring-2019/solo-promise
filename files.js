const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    fsPromises.writeFile('./1_promises-copy.md', data, { encoding: 'utf8' });
  });

fsPromises.readFile('./README.md', { encoding: 'utf8' })
  .then(data => {
    return data.replace(/[A-Z]/g, '');
  });
