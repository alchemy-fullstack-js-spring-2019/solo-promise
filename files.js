const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    console.log(data);
  });

fsPromises.writeFile('write.md', 'this is a test')
  .then(data => {
    console.log('done');
  });
