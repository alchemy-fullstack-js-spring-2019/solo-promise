const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', 'utf8')
    .then(data => {
        return fsPromises.readFile('./files.js', 'utf8');
    })
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
    });

fsPromises.writeFile('promise-write.md', 'This data will be written to a file')
    .then(() => console.log('DONE!'));
    