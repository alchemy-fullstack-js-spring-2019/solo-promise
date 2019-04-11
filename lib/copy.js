const fsPromises = require('fs').promises;

fsPromises.readFile('lib/funny.txt', { encoding: 'utf8' })
  .then(data => {
    return data;
  })
  .then(data => { 
    return fsPromises.writeFile('./lib/funny-COPY.txt', data, { encoding: 'utf8' });
  })
  .then(() => {
    console.log('done!');
  })
  .catch(err => {
    console.log('oh noes!', err);
  });
