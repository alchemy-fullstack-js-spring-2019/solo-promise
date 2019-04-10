const fsPromises = require('fs').promises;

fsPromises.writeFile('./sample-write.txt', 'Hello there! You wrote a file!')
    .then(() => console.log('DONE'));
