const fsPromises = require('fs').promises;

fsPromises.writeFile('../hi.txt', 'HI!!!', 'utf8')
  .then(() => {
    console.log('DONE');
  })
  .catch(err => {
    console.error(err);
  });
