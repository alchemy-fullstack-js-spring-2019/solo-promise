const fs = require('fs');

function readPromise(src) {
    return new Promise((res, rej) => {
        fs.readFile(src, { encoding: 'utf8'}, (err, data) => {
            if(err) return rej(err);
            res(data);
        });
    });
}

module.exports = readPromise;
