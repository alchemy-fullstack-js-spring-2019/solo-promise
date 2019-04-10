const fsPromises = require('fs').promises;

//since I am expecting a promise in my test, i must return a promise in this function
function copy(src, dst) {
    return fsPromises.readFile(src, { encoding: 'utf8' })
        .then(data => {
            fsPromises.writeFile(dst, data);
        });
}

module.exports = copy;
