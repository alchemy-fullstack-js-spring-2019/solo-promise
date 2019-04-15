const fsPromises = require('fs').promises;

function copy(src, dst) {
    return fsPromises.readFile(src, 'utf8')
        .then(data => {
            fsPromises.writeFile(dst, data);
        })
        .catch(err => {
            throw err;
        });
}

module.exports = copy;
