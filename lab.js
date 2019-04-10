
//READ A FILE

const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
    .then(data => {
        //console.log(data);
    });

//WRITE A FILE

fsPromises.writeFile('./writeTest', 'why hello there!')
.then(err => {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('DONE~!!!!!!');
    }
})