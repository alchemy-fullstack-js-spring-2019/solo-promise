function transform(src) {
  const fsPromises = require('fs').promises;
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(fileContents => {
      return fileContents.replace(/[A-Z]/g, '');
    })
    .then(lowercaseContents => {
      return lowercaseContents.toUpperCase();
    })
    .then(uppercaseContents => {
      return uppercaseContents.split('').reverse().join('');
    });
}

transform('./lib/write.txt');
