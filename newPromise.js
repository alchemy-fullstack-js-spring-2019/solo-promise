const fs = require('fs');

function readFilePromise(src) {
    return new Promise((res, rej) => {
        fs.readFile(src, { encoding: 'utf8'}, (err, data) => {
            if(err) return reject(err);
    
            res(data);
        });
    });
}


// const readFilePromise = new Promise((res, rej) => {
//     fs.readFile('./somethingToCopy.txt', { encoding: 'utf8'}, (err, data) => {
//         if(err) return reject(err);

//         res(data);
//     })
// });
