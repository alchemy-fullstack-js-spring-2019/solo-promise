const fsPromises = require('fs').promises;

function transform(src) {
  return fsPromises.readFile(src, 'utf8')
    .then(data => {
      console.log('DATA HERE:', data);
      const pattern = /[A-Z\s]+/;
      return data.slice(pattern);
    })
    .then(data => {
      console.log('SLICED STRING', data);
      data.toUpperCase();
    })
    .then(data => {
      const splitDataArray = data.split('');
      console.log(splitDataArray);
      const reversedDataArray = splitDataArray.reverse();
      console.log(reversedDataArray);
      return reversedDataArray.join('');
    });
}

module.exports = transform;
