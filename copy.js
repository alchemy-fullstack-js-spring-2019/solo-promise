const fsPromises = require('fs').promises;

const options = {
  encoding: 'utf8'
};

module.exports = (src, dst) => {
  return fsPromises.readFile(src, options)
    .then(data => {
      fsPromises.writeFile(dst, data, options);
    })
    .catch(err => console.log(err));
};
