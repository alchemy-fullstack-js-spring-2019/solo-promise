const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(res => res.body)
  .then(console.log)
  .catch(err => console.error(err));

request
  .get('http://futuramaapi.herokuapp.com/api/quotes')
  .then(res => res.body)
  .then(console.log)
  .catch(err => console.error(err));

request
  .get('http://futuramaapi.herokuapp.com/api/characters/Bender/2')
  .then(res => res.body)
  .then(console.log)
  .catch(err => console.error(err));
