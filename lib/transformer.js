const fsPromises = require('fs').promises;
module.exports = function transformer(src) {
  return fsPromises.readFile(src, 'utf8')
    .then(data => data.replace(/[A-Z]/g, ''))
    .then(data => data.toUpperCase())
    .then(data => [...data].reverse().join(''));
};


  
  
