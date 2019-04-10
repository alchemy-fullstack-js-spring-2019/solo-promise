const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/characters/zapp-brannigan/3')
  .then(result => {
    console.log(result.body[0].quote);
    console.log(result.body[1].quote);
    console.log(result.body[2].quote);
  });

