const fsPromises = require('fs').promises;

function transform(src) { 
    return fsPromises.readFile(src, 'utf8')
        .then(data => {
            return data.replace(/[^a-z]/g, '');
        })
        .then(data => {
            return data.toUpperCase();
        })
        .then(data => {
            return data.split('').reverse().join('');
        })
        .catch(err => {
            if(err) throw err;
        });
}
module.exports = transform;

// const newString = 'AbCdE'.replace(/[^a-z]/g, '');
// console.log(newString);
