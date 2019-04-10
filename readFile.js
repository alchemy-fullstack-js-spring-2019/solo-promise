const fsPromises = require('fs').promises;

//promises - waits for first promise to resolve before moving on
fsPromises.readFile('./textfile.txt', { encoding: 'utf8' })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
