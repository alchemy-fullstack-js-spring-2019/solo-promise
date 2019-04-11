const fsPromises = require('fs').promises;
const fs = require('fs');

const readPromise = src => new Promise((resolve, reject) => {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    console.log('I read and create a new Promise, and I am done!');
    resolve(data);
  });
});
readPromise('./oneReadDemo.txt')
  .then(data => console.log(data));

function write(source, dest) {
  return fsPromises.writeFile(source, dest)
    .then(console.log('write done!'));
}
write('1_promises.md', 'oneWriteDemo.txt');

function copy(source, dest) {
  return fsPromises.readFile(source)
    .then(data => fsPromises.writeFile(dest, data))
    .then(console.log('copy done!'));
}
copy('1_promises.md', 'oneCopyDemo.txt');
