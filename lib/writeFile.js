const fsPromises = require('fs').promises;

fsPromises.writeFile('./lib/sample.json', 'samplestring', {
  encoding: 'utf8' })
  .then(data => {
    console.log('file written');
  });
