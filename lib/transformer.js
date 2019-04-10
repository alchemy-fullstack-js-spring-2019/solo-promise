const fsPromises = require('fs').promises;

function transform(src) { 
    return fsPromises.readFile(src, 'utf8')
        .then(data => {
            data.replace( /[^a-z]/g, '' );
        })
        .then(data => {
            data.toUpperCase();
        })
        .then(data => {
            data.str.split('').reverse().join('');
        });
}
