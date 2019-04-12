const fsPromises = require('fs').promises;
//promises are a way to avoid callback hell


fsPromises.readFile('./1_promises.md', 'utf8')
  .then(data => {
    console.log(data);
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

//Promise.race returns the first promise to return something
Promise.race([
  fsPromises.readFile('./1_promises.md', 'utf8'),
  fsPromises.readFile('./package.json', 'utf8'),
  fsPromises.readFile('./files.js', 'utf8')
]);

//Promise.all returns an array of all fulfilled promises in the order you call them
Promise.all([
  fsPromises.readFile('./1_promises.md', 'utf8'),
  fsPromises.readFile('./package.json', 'utf8'),
  fsPromises.readFile('./files.js', 'utf8')
]);


//Promise.resolve() turns any value into a promise
Promise.resolve(1)
  .then(console.log); //prints 1, this is the data made from the resolved promise
