const fsPromises = require('fs').promises;

fsPromises.readFile('../1_promises.md', 'utf8')
    .then(data => {
        console.log(data);
    });
