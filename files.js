const fsPromises = require('fs').promises;

//Read A File:
fsPromises.readFile('./1_promises.md', 'utf8')
  .then(data => {
    console.log(data);
  });


//Write A File:
const data = 'This is a new file';
fsPromises.writeFile('./newFile.txt', data)
  .then(() => {
    console.log('this is copied');
  });


//Copy A File:
fsPromises.readFile('./1_promises.md', 'utf8')
  .then(data => {
    fsPromises.writeFile('./copy.md', data);
  })
  .then(() => {
    console.log('this is copied');
  });
