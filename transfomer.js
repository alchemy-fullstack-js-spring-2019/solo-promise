const fsPromises = require('fs').promises;

function transformer {
    return fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }).then(data =>{
  return data.replace(/A-Z/g, '');
}) //
  .then(data => data.toUpperCase())
  .then(data => [...allCaps].reverse().join(''))
  .then(console,log);
}