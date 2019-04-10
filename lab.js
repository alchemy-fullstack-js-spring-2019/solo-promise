
//READ A FILE

const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', {encoding: 'utf8'})
    .then(data=>{
        console.log(data);
    });