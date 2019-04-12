const fsPromises = require('fs').promises;
  
function copy(src, dest) {
    
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => {
      fsPromises.writeFile(dest, data)
        .then(data => {
          return data;
        });
    });
}

module.exports = copy;
