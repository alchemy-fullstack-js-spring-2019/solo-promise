const fsPromises = require('fs').promises;


fsPromises.readFile('/interestingtext.txt', { encoding: 'utf8' })
  .then(data => {
    data.replace(/[A-Z]/g, '');
  })
  .then(console.log);


// .then(data => data.toUpperCase());
// .then(data => [...data].reverse  ().join(''));

// function transform(src) {

module.exports = {
  transform,
};
