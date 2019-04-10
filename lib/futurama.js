const request = require('superagent');

request.get('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(response => response.body)
  .then(console.log);

request.get('http://futuramaapi.herokuapp.com/api/quotes/5')
  .then(response => response.body)
  .then(console.log);

request.get('http://futuramaapi.herokuapp.com/api/characters/Bender/3')
  .then(response => response.body)
  .then(console.log);
