const fsPromises = require('fs').promises;

const options = {
  encoding: 'utf8'
};

const read = () => new Promise((resolve) => {
  resolve(fsPromises.readFile('./1_promises.md', options));
});

read().then(data => console.log(data));
