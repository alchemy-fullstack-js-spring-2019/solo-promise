const request = require('superagent');


request
  .get('futuramaapi.herokuapp.com/api/quotes')
  .then(res => {
    console.log(res.body);
  });
