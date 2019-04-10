const fsPromises = require('fs').promises;


fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {

    return 'hi';
    // this return can also return another promise to read/write whatever with another file...
    // return fs.Promises.readFile(....some file, some encoding...)
  }) 
  .then([promisesMd, packageJson]) => console.log(packageJson)
  .catch(err => {
    console.log(data);
    console.error(err);
  });

Promise.race([
  fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }),
  fsPromises.readFile('./package.json', { encoding: 'utf8' }),
  fsPromises.readFile('./file.js', { encoding: 'utf8' })

])
  .then(data => console.log(data));

// sees which promise is fulfilled first (fastest)

Promise.all([
  fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }),
  fsPromises.readFile('./package.json', { encoding: 'utf8' }),
  fsPromises.readFile('./file.js', { encoding: 'utf8' })
])
  .then(files => {
    console.log(files[//file array position from above//])
  }
// waits for these to resolve and gives you the value?

// OR
// .then([promisesMD, packageJson, fileJs]) => {
  // console.log(promisesMD)
// };
