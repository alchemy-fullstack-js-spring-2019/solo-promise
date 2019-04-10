const fsPromises = require('fs').promises;

const options = {
  encoding: 'utf8'
};

module.exports = src => {
  return fsPromises.readFile(src, options)
    .then(data => {
      const pattern = /[A-Z]/g;
      return [...data].filter(letter => !pattern.test(letter)).join('');
    })
    .then(lowerCaseData => {
      return lowerCaseData.toUpperCase();
    })
    .then(upperCaseData => {
      return [...upperCaseData].reverse().join('');
    })
    .catch(err => {
      if(err) throw err;
    });
};
