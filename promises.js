const fsPromise = require('fs').promises;

fsPromise.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    fsPromise.writeFile('./copy1_promise.md', 'NEW MESSAGE NEW FILE BIIIISH', { encoding: 'utf8' });
    console.log('DONE');
  });
