const fsPromises = require('fs').promises;

fsPromises.writeFile('2_promises.md', 'promise me promises', { encoding: 'utf8' }, (err) => {
  if(err) throw err;
})
  .then(console.log('I wrote things'));

fsPromises.readFile('1_promises.md', 'utf8') //pending
  .then(data => {
    fsPromises.writeFile('3_promises.md', data, { enccoding: 'utf8' }, (err) => {
      if(err) throw err;
    })
      .then(console.log('I copied things!'));
  });

  
