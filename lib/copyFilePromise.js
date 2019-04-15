const fsPromise = require('fs').promises;

fsPromise.readFile('./.eslintrc')
  .then(fileContents => {
    fsPromise.writeFile('./eslint-copy.js', fileContents);
    console.log('file created');
  });
