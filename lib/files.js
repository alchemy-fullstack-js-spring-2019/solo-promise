const fsPromises = require('fs').promises;

fsPromises.readFiles('./1_promoises.md', 'utf8')
  .then(data => {
    return Promise.all([
      data,
      fsPromise.readFile('./package.json')
    ])
  })

  .then(data => console.log(data))

  .catch(err => {
    console.error(err);
  });

  // Promise.race([
  //   fsPromise.readFile('./1_promise.md', 'utf8'),
  //   fsPromise.readFile('./package.json', 'utf8'),
  //   fsPromise.readFile('./files.js', 'utf8')
  // ])
  // .then(files => {
  //   console.log(files)
  // })

  // Promise.all([
  //   fsPromise.readFile('./1_promise.md', 'utf8'),
  //   fsPromise.readFile('./package.json', 'utf8'),
  //   fsPromise.readFile('./files.js', 'utf8')
  // ])
  // .then(files => {
  //   console.log(files[2])
  // })

  // Promise.all([
  //   fsPromise.readFile('./1_promise.md', 'utf8'),
  //   fsPromise.readFile('./package.json', 'utf8'),
  //   fsPromise.readFile('./files.js', 'utf8')
  // ])
  // .then(([promisesMD, packageJson, filesJs]) => {
  //   console.log(promisesMD)
  // })

  Promise.resolve(1)
    .then(console.log)

