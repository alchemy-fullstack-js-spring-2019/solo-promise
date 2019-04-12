const fsPromises = require('fs').promises;

function copy(src, dst) {
    return fsPromises.readFile(src, { encoding: 'utf8' })
        .then(data => {
            console.log('DONE');
            return fsPromises.writeFile(dst, data, { encoding: 'utf8' })
        })
}

module.exports = copy;
