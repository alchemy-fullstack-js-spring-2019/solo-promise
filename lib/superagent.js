const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/characters/Bender/10')
  .then(response => response.body)
  .then(console.log);
  
