const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(data => console.log(data.body))
  .catch(err => console.log(err));
  
