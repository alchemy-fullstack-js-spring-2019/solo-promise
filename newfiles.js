const fsPromises = require('fs').promises;

fsPromises.readFile('1_promises.md', 'utf8') //pending
  .then(data => {
    return (data); //fulfilled
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error(error); //rejected
  });

Promise.race([ //first to resolve will move on
  fsPromises.readFile('1_promises.md', 'utf8'),
  fsPromises.readFile('files.js', 'utf8'),
  fsPromises.readFile('package.json', 'utf8'),
])
  .then(data => console.log(data));

Promise.all([ //waits for all and gives array of refurned values
  fsPromises.readFile('1_promises.md', 'utf8'),
  fsPromises.readFile('files.js', 'utf8'),
  fsPromises.readFile('package.json', 'utf8'),
])
  .then(([promisesMd, filesJS, packageJson]) => {
      console.log(promisesMD);
  }
//   .then(files => console.log(files[0]));

// Promise.resolve(1)
//   .then(console.log);
  //this promise will always resolve with;
