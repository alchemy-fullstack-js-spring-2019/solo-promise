const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    /*eslint-disable-next-line*/
    console.log(data);
  })
  .catch(err => {
    /*eslint-disable-next-line*/
    console.error(err);
  });
