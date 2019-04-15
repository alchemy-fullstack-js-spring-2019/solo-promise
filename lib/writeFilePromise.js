const fsPromises = require('fs').promises;

fsPromises.writeFile('./lib/write.txt', 'drippen like wata')
  .then(console.log('done!!!!!!'));
