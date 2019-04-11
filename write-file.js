const fsPromises = require('fs').promises;

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