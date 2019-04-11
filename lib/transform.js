const fsPromises = require('fs').promises;

function transformer(src) {
    return fsPromises.readFile(src, { encoding: 'utf8' })
        .then(data => data.replace(/[A-Z]/g, ''))
        .then(lowerCase => lowerCase.toUpperCase())
        .then(upperCase => [...upperCase].reverse().join(''));
}

module.exports = transformer;
