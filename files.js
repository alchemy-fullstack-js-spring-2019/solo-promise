const fsPromises = require('fs').promises;
const fs = require('fs');

fsPromises.readFile('./1_promises.md', 'utf8')
    .then(data => {
        return fsPromises.readFile('./files.js', 'utf8');
    })
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
    });

fsPromises.writeFile('promise-write.md', 'This data will be written to a file')
    .then(() => console.log('DONE!'));
    
fsPromises.readFile('./1_promises.md', 'utf8')
    .then(data => {
        fsPromises.writeFile('promise-copy.md', data);
    })
    .then(() => console.log('Did it again!'));

// const readFilePromise = new Promise((resolve, reject) => {
//     fs.readFile('../lib/dog.md', 'utf8', (err, data) => {
//         return reject(err);
//     });
// });

const readFilePromise(src) {
    return new Promise((resolve, reject) => {
        fs.readFile(src, 'utf8', (err, data) => {
            if(err) return reject(err);

            resolve(data);
        })
    })
}

readFilePromise
    .then(data => console.log('success', data))
    .catch(err => console.error('error', err));
