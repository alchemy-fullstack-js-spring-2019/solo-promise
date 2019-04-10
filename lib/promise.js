const fsPromises = require('fs').promises;
fsPromises.readFile('./.eslintrc')
  .then(data => console.log(data.toString()));
