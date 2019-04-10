const fsPromises = require('fs').promises;

module.exports = function copy(src, dest) {
  
  return fsPromises.readFile(`${src}`)
    .then(data => {
      fsPromises.writeFile(`${dest}`, data);
    });

};
