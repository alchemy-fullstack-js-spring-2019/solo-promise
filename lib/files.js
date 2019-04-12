const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
    .then(data => {
        return Promise.all([
            Promise.resolve(data),
            fsPromises.readFile('./package.json', { encoding: 'utf8' })
        ]);
    })
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
    });

