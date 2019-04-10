const fsPromises = require('fs').promises;

module.exports = function copy(src, dest) {
  
  fsPromises.readFile(`./${src}`, { encoding: 'utf8' })
    .then(data => {
      fsPromises.writeFile(`${dest}`, data);
    });

};
