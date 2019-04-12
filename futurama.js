const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/quotes/11')
  .then(res => res.body)
  .then(console.log);

