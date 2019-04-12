const fs = require('fs');


function readFilePromise2() {
  return new Promise((resolve, reject) => {
    fs.readFile('./1_promises.md', { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);

      resolve(data);
    });
  });
}

readFilePromise2('./1_promises.md');
 

