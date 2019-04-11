const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/characters/bender')
  .then(res => {
    res.body;
    console.log(res.body);
  });
