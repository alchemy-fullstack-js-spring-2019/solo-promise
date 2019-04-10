const fsPromises = require('fs').promises;

// fsPromises.readFile('./1_promises.md', 'utf8')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// fsPromises.writeFile('./hi.txt', 'HI!!!', 'utf8')
//   .then(() => {
//     console.log('DONE');
//   })
//   .catch(err => {
//     console.error(err);
//   });

fsPromises.readFile('./1_promises.md', 'utf8')
  .then(fileToCopy =>
    fsPromises.writeFile('./copy.md', fileToCopy, 'utf8')
  );
