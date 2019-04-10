const fsPromises = require('fs').promises;
const fs = require('fs');

// const readFilePromise = new Promise((reslove, reject) => {
//   fs.readFile('./1_promises.md', { encoding: 'utf8' }, (err, data) => {
//     if(err) return reject(err);
//     resolve(data);
//   });
// });

function readFilePromise2() {
  return new Promise((resolve, reject) => {
    fs.readFile('./1_promises.md', { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);

      resolve(data);
    });
  });
}

readFilePromise2('./1_promises.md')
  .then(data => console.log('yay', data))
  .catch(err => console.log('nooo', err));


// fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }).then(data => {
//   return data;

// })
//   .then(data => console.log(data))
//   .catch(err => {
//     console.log(err);

    
//   });

// const dataData = fsPromises.readFile('./1_promises.md', { encoding: 'utf8 '});

// fsPromises.writeFile('./stuff.text', 'write somethuing and try not to be obnoxious', { encoding: 'utf8' }).then(data => {
//   return data;
// }).then(data => console.log('saved', data)).catch(err => {
//   console.log('nope', err);
// });
    
// (err) => {
//   if(err) throw err;
//   console.log('saved');

// Promise.all([
//   fsPromises.readFile('/1_promises.md', { encoding: 'utf8' }),
//   fsPromises.readFile('/package.json', { encoding: 'utf8' }),
//   fsPromises.readFile('/files.js', { encoding: 'utf8' })
// ]);

// .then(([promises]));

// Promise.resolve({
//   name: 'spot',
//   age: 10
// });

// fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }).then(data =>{
//   return data.replace(/A-Z/g, '');
// }) //
//   .then(data => data.toUpperCase())
//   .then(data => [...allCaps].reverse().join(''))
//   .then(console,log);