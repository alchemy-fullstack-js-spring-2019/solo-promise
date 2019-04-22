const fsPromises = require('fs').promises;


function transform(src) {
  fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => {
      data.replace(/[A-Z]/g, '');
    })
    .then(console.log);
}

// .then(data => data.toUpperCase());
// .then(data => [...data].reverse  ().join(''));

transform('./lib/interestingtext.txt');

module.exports = {
  transform,
};
