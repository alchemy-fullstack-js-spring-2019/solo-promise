const fsPromises = require('fs').promises;

fsPromises.writeFile('./megan.md', { encoding: 'utf8' })
    .then(() => {
        console.log('DONE');
    });

