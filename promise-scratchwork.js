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

    //first promise to resolve moves to next step
    Promise.race([
        fsPromises.readFile('./1_promises.md', { encoding: 'utf8'}),
        fsPromises.readFile('./package.json', { encoding: 'utf8'})
    ])
        .then(data => console.log(data));

    //become array of fulfilled value, promises must all fulfill before moving
    Promise.all([
        fsPromises.readFile('./1_promises.md', { encoding: 'utf8'}),
        fsPromises.readFile('./package.json', { encoding: 'utf8'})
    ])
        .then(([promisesMd, packageJson]) => console.log(promisesMd));
    //waits for each to resolve then receive array of fulfilled promises

    Promise.resolve(1)
        .then(console.log);
