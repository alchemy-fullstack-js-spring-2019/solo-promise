const fsPromises = require('fs').promises();

function transformer(src) {
    return fsPromises.readFile(src { encoding: 'utf8'})
    .then(data => data.replace)
    
}
