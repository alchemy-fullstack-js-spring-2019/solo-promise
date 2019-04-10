const fs = require('fs');



const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile('./1_promises.md', { encoding: 'utf8' }, (err, data) => {
        if (err) return reject(err);

        resolve(data);
    });
});


function readFilePromise(src) {
    return new Promise((resolve, reject) => {
        fs.readFile('./1_promises.md', { encoding: 'utf8' }, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

module.exports = readFilePromise;