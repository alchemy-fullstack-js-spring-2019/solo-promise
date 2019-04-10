const fs = require('fs');

function readFilePromise(src) {
    return new Promise((resolve, reject) => {
        fs.readFile(src, 'utf8', (err, data) => {
            if(err) return reject(err);
            resolve(data);
        });
    });
}

readFilePromise('./sample-write.txt')
    .then(data => console.log(data))
    .catch(err => console.error('error', err));



