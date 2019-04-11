const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/characters/Bender/5')
  .then(res => {
    console.log(res.body);
  });
