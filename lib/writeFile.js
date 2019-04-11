const fsPromises = require('fs').promises;

fsPromises.writeFile('../writtenfile.txt', 'i wrote this amazing file. so great!')
    .then(() => {
        console.log('DONE!');
    })
    .catch(err => {
        console.log(err);
    });
