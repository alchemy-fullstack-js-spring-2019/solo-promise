const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8'})
    .then(data => {
        return data;
    })
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
    });

fsPromises.readFile('./1_promises.md', { encoding: 'utf8'})
    .then(()=> {
        return fsPromises.readFile('./package.json', { encoding: 'utf8'})
    })
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
    });

    Promise.race([
        fsPromises.readFile('./1_promises.md', { encoding: 'utf8'}),
        fsPromises.readFile('./package.json', { encoding: 'utf8'})
    ])
        .then(data => console.log(data));

    Promise.all([
        fsPromises.readFile('./1_promises.md', { encoding: 'utf8'}),
        fsPromises.readFile('./package.json', { encoding: 'utf8'})
    ])
        .then(([promisesMd, packageJson]) => console.log(promisesMd));

    Promise.resolve(1)
        .then(console.log);
