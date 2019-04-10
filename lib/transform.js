const fsPromises = require('fs').promises;

fsPromises.readFile('./lib/dog.md', 'utf8')
    .then(data => data.replace(/[A-Z]/g, ''))
    .then(noCaps => noCaps.toUpperCase())
    .then(allCaps => [...allCaps].reverse().join(''))
    .then(result => console.log(result));
