const fsPromises = require('fs').promises;

fsPromises.readFile('./package.json', 'utf8')
  .then(data => {
    return data;
  })
  .then(data => {
    fsPromises.writeFile('./notepad.txt', (data, err => {
      if(err) throw err;
    }))

      .then(console.log('done!'));

  });
