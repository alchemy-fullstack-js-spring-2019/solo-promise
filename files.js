const fsPromises = require('fs').promises;

const options = { encoding: 'utf8' };
fsPromises.readFile('./1_promises.md', options)
  .then(data => {
    // console.log(data);
  });

const data = 'This is a string that will be writed';
fsPromises.writeFile('./write-by-promise.txt', data, options)
  .then(console.log('DONE!'));


// fsPromises.readFile('./1_promises.md', { encoding: 'utf8'})
//   .then(data => {
//     return fsPromises.readFile('./package.json', { encoding: 'utf8' })
//   })


// Promise.race([
//   fsPromises.readFile('./1_promises.md', { encoding: 'utf8'}),
//   fsPromises.readFile('./package.json', { encoding: 'utf8'}),
//   fsPromises.readFile('./files.js', { encoding: 'utf8'})
// ])
//   .then(files => {
//     console.log(files);
//   })