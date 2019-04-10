const fsPromises = require('fs').promises;

fsPromises.readFile('1_promises.md', { encoding: 'utf8' })
  .then(console.log)
  .catch(console.log);

fsPromises.writeFile('testt', 'okkkk')
  .then(() => {
    console.log('Ok');
  })
  .catch(console.log);

fsPromises.readFile('package.json')
  .then(data => {
    fsPromises.writeFile('package-copy', data);
  })
  .then(() => console.log('Done'));
