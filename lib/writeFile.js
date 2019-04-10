const fsPromises = require('fs').promises;


fsPromises.writeFile('./test-write.txt', 'this is a test and s h o u l d N o t B e T a k e n S e r i o u s l y', { encoding: 'utf8' })
  .then(console.log('DONE!!!'))
  .catch(err => console.log(err));
