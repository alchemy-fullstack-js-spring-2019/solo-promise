const fsPromises = require('fs').promises;

// function copy(OG, copy) {
//   fsPromises.readFile(OG, {
//     encoding: 'utf8' })
//     .then(data => {
//       fsPromises.writeFile(copy, data, (err) => {
//         if(err) throw err;
//       });
//       console.log();
//       // console.log('copy did');
//     });
// }

function copy(src, dst) {
  return fsPromises.readFile(src)
    .then(data => fsPromises.writeFile(dst, data));
}

module.exports = {
  copy,
};

//takes source and destination
