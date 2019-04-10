const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
    .then(data => {
        return data;     
    })
    .then(data =>{
        fsPromises.writeFile('./writeTest', data)
        .then(err=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log('DONE')
            }
        })
    });