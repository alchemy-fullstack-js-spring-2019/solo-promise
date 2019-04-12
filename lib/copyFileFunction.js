const fsPromises = require('fs').promises;


module.exports = function copyFile(src, dst) {
   
    return fsPromises.readFile(src)
        .then(data => {
            fsPromises.writeFile(dst, data);
        });
};
