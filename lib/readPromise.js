const fs = require('fs');

function readPromise(src) {
    return new Promise((resolve, reject) => {
        fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
            if(err) return reject(err);
            resolve(data);
        });
    });
}

module.exports = readPromise;

readPromise('./1_promises.md')
    .then(data => console.log('success', data))
    .catch(err => console.error('error', err));



