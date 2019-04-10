const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' }).then(data => {
  return data;

})
  .then(data => console.log(data))
  .catch(err => {
    console.log(err);

    
  });



fsPromises.writeFile('./stuff.text', 'there is a lot of things i could write to be obnoxious', { encoding: 'utf8' }).then(data => {
  return data;
}).then(data => console.log('saved', data)).catch(err => {
    console.log('nope', err);
});
    
// (err) => {
//   if(err) throw err;
//   console.log('saved');

// Promise.all([
//   fsPromises.readFile('/1_promises.md', { encoding: 'utf8' }),
//   fsPromises.readFile('/package.json', { encoding: 'utf8' }),
//   fsPromises.readFile('/files.js', { encoding: 'utf8' })
// ]);

// .then(([promises]));

Promise.resolve({
  name: 'spot',
  age: 10
});
