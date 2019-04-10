const fsPromises = require('fs').promises;

function transform(src){
    return fsPromises.readFile(src, { encoding: 'utf8' })
        .then(data => {
            console.log(data);
            return data.replace(/[A-Z]/g, '');
        })
        .then(data => data.toUpperCase())
        .then(data => [...data].reverse().join(''));
}

module.exports = transform;
