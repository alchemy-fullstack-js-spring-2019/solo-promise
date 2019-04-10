const fsPromises = require('fs').promises;

fsPromises.writeFile('./writing.txt', 'I am writing', { encoding: 'utf8' })
  .then(() => {
    /*eslint-disable-next-line*/
    console.log('DONE!');
  })
  .catch.error(err => {
    /*eslint-disable-next-line*/
    console.log(err);
  });
