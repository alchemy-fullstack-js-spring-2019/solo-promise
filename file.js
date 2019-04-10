const fsPromises = require('fs').promises;


fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    return 'hi';
    // this return can also return another promise to read/write whatever with another file...
    // return fs.Promises.readFile(....some file, some encoding...)
  }) 
  .catch(err => {
    console.log(data);
    console.error(err);
  });
