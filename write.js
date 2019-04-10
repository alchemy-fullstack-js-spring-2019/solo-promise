const fsPromises = require('fs').promises;

fsPromises.writeFile('write.txt', 'sup.js', { encoding: 'utf8' })
  .then(data => {
    console.log('done!', data);
  })
  .catch(err => {
    console.log(err);
  });
