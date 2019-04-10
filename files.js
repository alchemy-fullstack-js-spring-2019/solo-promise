const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    console.log(data);
  });

fsPromises.writeFile('write.md', 'this is a test')
  .then(data => {
    console.log('done');
  });

fsPromises.readFile('./.travis.yml', {encoding: 'utf8'})
  .then(data => {
    fsPromises.writeFile('copy.md', data)
      .then(data => {
        console.log('done with copy');
      });
  });

module.exports function 
