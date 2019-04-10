const fsPromise = require('fs').promises;

fsPromise.readFile('./1_promises.md', { encoding: 'utf8' })
    .then(data => {
        console.log(data);
    });

fsPromise.writeFile('./promise-copy.md', { encoding: 'utf8' })
    .then(() => {
        console.log('DONE!');
    });

fsPromise.readFile('./1_promises.md', { encoding: 'utf8' })
    .then(data => {
        fsPromise.writeFile('./promise-copy2.md', data, { encoding: 'utf8' });
    })
    .then(() => {
        console.log('DONE');
    });
