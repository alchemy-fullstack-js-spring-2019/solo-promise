const fsPromises = require('fs').promises;

// const read = fsPromises.readFile('./package.json', { encoding: 'utf8' })
//   .then(data => {
//     return Promise.all([
//       Promise.resolve(data),
//       fsPromises.readFile('./package.json', { encoding: 'utf8' })
//     ]);
//   })
//   .then(([promisePackageJson, promisePromisesMd]) => console.log(promisePackageJson, promisePromisesMd))
//   .catch(err => {
//     console.error(err);
//   });

// const write = fsPromises.writeFile('write.json', 'Write it here in JSON', 'utf8')
//   .then(() => {
//     console.log('Ok');
//   })
//   .catch(console.log());

// function dynamicWrite(source, data) {
//   return fsPromises.writeFile(src, data)
//     .then();
// }

function copy(source, dest) {
  return fsPromises.readFile(source)
    .then(res => {
      fsPromises.writeFile(res, dest, 'utf8');
    }) 
    .then(console.log('done!'));
  // .then(([promisePackageJson, promisePromisesMd]) => console.log(promisePackageJson, promisePromisesMd))
  // .catch(err => {
  //   console.error(err);
  // });
}
copy('./package.json', './oneCopyDemo.md');

// module.exports = {
//   //read,
//   //write,
//   copy
// };
