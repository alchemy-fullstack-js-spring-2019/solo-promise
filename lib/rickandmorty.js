const request = require('superagent');

Promise.all([
  request.get('https://rickandmortyapi.com/api/character/5'),
  request.get('https://rickandmortyapi.com/api/character/6')
])
  .then(result => {
    result.forEach(char => {
      console.log(char.body.name);
    });
  });
