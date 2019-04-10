const fsPromises = require('fs').promises;

fsPromises.writeFile('/lib/funny.txt', 'Guess What? Chicken Hut!', { encoding: 'utf8' })
  .then(err => {
    if(err) throw err;
  })
  .then(() => {
    console.log('ya!');
  });
