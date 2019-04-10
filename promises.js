const fsPromises = require('fs').promises;

const options = {
  encoding: 'utf8'
};

fsPromises.readFile('./1_promises.md', options);
