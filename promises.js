const fsPromises = require('fs').promises;

fsPromises.writeFile('write.json', 'Write it here in JSON', 'utf8')
  .then(file => {
    console.log(file);
  })
  .catch(err => {
    console.log(err);
  });
