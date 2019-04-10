const fsPromises = require('fs').promises;

function transform(src) {
  return fsPromises.readFile(src, 'utf8')
    .then(data => {
      const pattern = /[a-z]+/g;
      const match = data.match(pattern);
      const lowercaseString = match.join(' ');
      return lowercaseString;
    })
    .then(data => {
      const uppercaseString = data.toUpperCase();
      return uppercaseString;
    })
    .then(data => {
      const splitDataArray = data.split('');
      const reversedDataArray = splitDataArray.reverse();
      return reversedDataArray.join('');
    });
}

module.exports = transform;
