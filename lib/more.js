const fsPromises = require('fs').promises;
const fs = require('fs');

const readFilePromise(src) {
    return new Promise(( resolve, reject) => {
        fs.readFile(src, { encoding : 'utf8'}, (err, data) => {
            if(err) return reject(err);
            resolve(data);
        });
    });
}

readFilePromise('./1_promise.md')
    .then(data => console.log('sucess', data))
    .catch(err => console.log(err));