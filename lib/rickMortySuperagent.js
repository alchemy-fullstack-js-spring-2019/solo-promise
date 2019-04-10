const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(response => {
    console.log(response);
  });
