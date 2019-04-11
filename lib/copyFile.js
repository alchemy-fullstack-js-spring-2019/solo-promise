const fsPromises = require('fs').promises;

function copy(src, dst) {
    console.log(src);
    return fsPromises.readFile(src, { encoding: 'utf8' })
        .then(data => {
            console.log(data);
            fsPromises.writeFile(dst, data);
        })
        .catch(err => console.log(err));
}

module.exports = copy;
