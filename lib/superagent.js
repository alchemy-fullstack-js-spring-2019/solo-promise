const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/quotes/2')
  .then(response => {
    console.log(response.body);
  });
