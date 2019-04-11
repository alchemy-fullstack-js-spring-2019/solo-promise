const fsPromises = require('fs').promises;
const { write } = require('./promises.js');

function copy(source, dest) {
  return fsPromises.readFile(source)
    .then(res => {
      write(res, dest, 'utf8');
    }); 
}
module.exports = copy();
