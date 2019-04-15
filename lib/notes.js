const fsPromises = require('fs').promises;

fsPromises.readFile('../1_promises.md', { encoding: 'utf8' })
    .then(data => {
        return fsPromises.readFile('../package.json', { encoding: 'utf8' });
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

Promise.race([
    fsPromises.readFile('../1_promises.md', { encoding: 'utf8' }),
    fsPromises.readFile('../package.json', { encoding: 'utf8' }),
    fsPromises.readFile('./files.js', { encoding: 'utf8' }),
])
    .then(data => console.log(data));

Promise.all([
    fsPromises.readFile('../1_promises.md', { encoding: 'utf8' }),
    fsPromises.readFile('../package.json', { encoding: 'utf8' }),
    fsPromises.readFile('./notes.js', { encoding: 'utf8' }),
])
    .then(([promisesMd, packageJSon, filesJs]) => console.log(promisesMd));

Promise.resolve(1)
    .then(console.log);
