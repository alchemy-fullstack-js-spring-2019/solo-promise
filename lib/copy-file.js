const fsPromises = require('fs').promises;

function copy(src, dest) {
    return fsPromises.readFile(src, 'utf8')
        .then(data => {
            fsPromises.writeFile(dest, data);
        });
}

copy('./promise-copy.md', 'copies-copies.md');

module.exports = copy;
