const fsPromises = require('fs').promises;

const options = {
  encoding: 'utf8'
};

fsPromises.readFile('./1_promises.md', options)
  .then(data => console.log(data))
  .catch(err => console.log(err));

fsPromises.writeFile('./write1.txt', 'hi there', options)
  .then(() => console.log('DONE!'))
  .catch(err => console.log(err));

fsPromises.readFile('./1_promises.md', options)
  .then(data => {
    fsPromises.writeFile('./1_promises-copy.md', data, options);
  })
  .then(() => console.log('DONE!'))
  .catch(err => console.log(err));

