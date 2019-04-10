const fsPromises = require('fs').promises;

module.exports = function copy(src, dst) {
  return fsPromises.readFile(src, 'utf8')
    .then(data => {
      fsPromises.writeFile(dst, data);
    })
    .catch(err => {
      console.error(err);
    });
};

// WHAT RYAN DID....
// function copy(src, dst) {
//   return fsPromises.readFile(src)
//     .then(data => fsPromises.writeFile(dst, data));
// };

// module.exports = copy;
