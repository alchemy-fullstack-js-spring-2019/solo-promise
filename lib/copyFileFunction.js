const fsPromises = require('fs').promises;

module.exports = function copyFile(src, dst) {
    fsPromises.readFile(src, { encoding: 'utf8' })
        .then(data => {
            const newFile = fsPromises.writeFile(dst, data, { encoding: 'utf8' });
            return newFile;
        });
};
