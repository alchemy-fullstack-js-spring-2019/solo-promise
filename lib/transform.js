const fsPromises = require('fs').promises;

function transform(src) {
    return fsPromises.readFile(src, 'utf8')
        .then(data => data.replace(/[A-Z]/g, ''))
        .then(noCaps => noCaps.toUpperCase())
        .then(allCaps => [...allCaps].reverse().join(''));
}

module.exports = transform;
