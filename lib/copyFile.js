const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    fsPromises.writeFile('./1_promises-copy.md', data, { encoding: 'utf8' });
  })
  .then(() => {
    /*eslint-disable-next-line*/
    console.log('DONE!');
  })
  .catch(err => {
    /*eslint-disable-next-line*/
    console.log(err);
  });
