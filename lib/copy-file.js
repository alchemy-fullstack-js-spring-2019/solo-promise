const fsPromises = require('fs').promises;

function copy(src, dest) {
    fsPromises.readFile(src, 'utf8')
        .then(data => {
            return fsPromises.writeFile(dest, data);
        });
}

copy('./promise-copy.md', 'copies-copies.md');

module.exports = copy;
