const fsPromises = require('fs').promises;

module.exports = function transform(src) {
    fsPromises.readFile(src, { encoding: 'utf8' })
        .then(data => {
            const lower = data.toLowerCase();
            return lower;
        })
        .then(lower => {
            const upper = lower.toUpperCase();
            return upper;
        })
        .then(upper => {
            const array = upper.split('');
            const reverseArray = array.reverse();
            const finalString = reverseArray.join();
        });
};
