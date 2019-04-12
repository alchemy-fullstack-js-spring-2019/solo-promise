const fsPromises = require('fs').promises;

fsPromises.readFile('./promise-write-test.txt', { encoding: 'utf8' })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

fsPromises.writeFile('./promise-write-test.txt', 'o hey there hi there')
  .then(() => console.log('Done writing!!'));

fsPromises.readFile('./promise-write-test.txt', { encoding: 'utf8' })
  .then(data => {
    fsPromises.writeFile('./promise-copy-test.txt', data)
      .then(() => console.log('Done copying!!'));
  });


// Promise.all([
//   fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }),
//   fsPromises.readFile('./package.json', { encoding: 'utf8' }),
//   fsPromises.readFile('./travis.yml', { encoding: 'utf8' })
// ])
//   .then(files => console.log(files));
