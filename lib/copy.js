const fsPromises = require('fs').promises;

module.exports = function copy(src, dst) {
  return fsPromises.readFile(src, 'utf8')
    .then(data => {
      return fsPromises.writeFile(dst, data);
    })
    
    .then(console.log('done'))

    .catch(err => console.log(err));
};
