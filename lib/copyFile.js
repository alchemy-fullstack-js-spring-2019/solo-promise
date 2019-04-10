const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
    .then(data => {
        fsPromises.writeFile('./1_promises_2.md', data, { encoding: 'utf8' });
        console.log('DONE!');
    });

    

