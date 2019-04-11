const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/characters/Bender/1')
  .then(res => res.body)
