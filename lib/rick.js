const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/2')
  .then(result => {
    console.log(result.body.name);
    console.log(result.body.status);
    console.log(result.body.gender);
    console.log(result.body.species);

  });
