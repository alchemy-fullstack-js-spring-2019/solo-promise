const fsPromises = require('fs').promises;

module.exports = function transform(src) {
    fsPromises.readFile(src, { encoding: 'utf8' })
        .then(data => {
            return data.replace(/[A-Z]/g, '');
        })
        .then(data => {
            return data.toUpperCase();
        })
        .then(data => {
            return [...data].reverse().join();
        });
};
