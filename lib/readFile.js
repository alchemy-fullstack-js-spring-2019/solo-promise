const fsPromises = require('fs').promises;

fsPromises.readFile('../textfile.txt', { encoding: 'utf8' })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
