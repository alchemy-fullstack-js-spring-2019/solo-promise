const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => { // if accepts, will run this part
    /*eslint-disable-next-line*/
    console.log(data);
  })
  .catch(err => { // if rejects, will run this part
    /*eslint-disable-next-line*/
    console.error(err);
  });

// if you have multiple .then chains, the data from the previous will get passed onto the next .then
// will wait for .then to resolve before moving to next .then
