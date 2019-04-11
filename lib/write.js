const fsPromises = require('fs').promises;

fsPromises.writeFile('./lib/funny.txt', 'Guess What? Chicken Hut!', { encoding: 'utf8' })
  .then(() => {
    console.log('done');
  })
  .catch(err => {
    console.log('**error!!\n', err);
  });
