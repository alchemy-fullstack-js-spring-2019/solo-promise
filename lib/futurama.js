const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/characters/bender/1')
  .then(results => {
    console.log(results.body);
  });
